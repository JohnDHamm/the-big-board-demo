import React from 'react';
import { MobileContentContainer, ThreeUpLayout } from '../layouts';
import {
  HidePlayersToggle,
  PlayerCard,
  PositionToggle,
  SortToggle,
} from '../../components';
import {
  AlertContext,
  MyTeamContext,
  PlayersContext,
  TeamsContext,
  DraftContext,
  DraftStatusContext,
  UserContext,
  PickConfirmModalContext,
  CurrentPickContext,
} from '../../contexts';
import { MODAL_INITIAL_VALUE } from '../../contexts/PickConfirmModalContext/PickConfirmModalContext';
import { makePick, updateDraftStatus } from '../../api';
import sortBy from 'lodash.sortby';
import find from 'lodash.find';
import { calcTotalRounds } from '../../functions';

type Sorting = 'RANK' | 'A-Z' | 'TEAM';
const sortTypes: Sorting[] = ['RANK', 'A-Z', 'TEAM'];
const positions: NFL_Position[] = ['QB', 'RB', 'WR', 'TE', 'D', 'K'];
const LS_KEY = {
  PLAYERS_SETTINGS: 'player_settings',
};
const SETTINGS_KEYS = {
  SELECTED_POSITIONS: 'sel_positions',
  SORTING: 'sort',
  HIDE_SELECTED: 'hide_selected',
};

const PlayersPage: React.FC = () => {
  const { setCurrentAlert } = React.useContext(AlertContext);
  const { user } = React.useContext(UserContext);
  const { currentDraftPick } = React.useContext(CurrentPickContext);
  const { draft } = React.useContext(DraftContext);
  const { draftStatus } = React.useContext(DraftStatusContext);
  const { players } = React.useContext(PlayersContext);
  const { teams } = React.useContext(TeamsContext);
  const { myTeam } = React.useContext(MyTeamContext);
  const { setCurrentModal } = React.useContext(PickConfirmModalContext);

  const [playersRenderList, setPlayersRenderList] = React.useState<
    PlayerInfo[]
  >([]);
  const [selectedPositions, setSelectedPositions] = React.useState<
    NFL_Position[]
  >([]);
  const [sorting, setSorting] = React.useState<Sorting | ''>('');
  const [hideSelected, setHideSelected] = React.useState<boolean>(false);
  const [canMakePick, setCanMakePick] = React.useState<boolean>(false);

  const hasOpenPositionSlot = (position: NFL_Position): boolean => {
    const numSlots =
      find(draft.league.positionSlots, { position: position })?.total || 0;
    const myPicks = myTeam.filter(
      (pick) => players[pick.playerId].position === position
    ).length;
    return myPicks < numSlots;
  };

  const handleConfirm = (playerId: string) => {
    if (user) {
      const newPick: DraftSelection = {
        selectionNumber: currentDraftPick.selectionNumber,
        leagueId: draft.league._id,
        ownerId: user._id,
        playerId,
      };
      makePick(newPick)
        .then((res) => {
          // console.log('saved pick', res);
          setCurrentModal(MODAL_INITIAL_VALUE);

          const numOwners = draft.league.draftOrder.length;
          const numRounds = calcTotalRounds(draft.league.positionSlots);
          const totalPicks = numRounds * numOwners;
          if (res.selectionNumber + 1 > totalPicks) {
            updateDraftStatus(draft.league._id, 'done');
          }
        })
        .catch((err) => console.log('err', err));
    }
  };

  const handlePick = (playerId: string) => {
    if (user) {
      const selPlayer = players[playerId];
      const playerName = `${selPlayer.firstName} ${selPlayer.lastName}`;
      const team = teams[selPlayer.teamId];
      setCurrentModal({
        visible: true,
        player: {
          name: playerName,
          position: selPlayer.position,
        },
        team: {
          abbv: team.abbv,
          colors: team.colors,
        },
        onCancel: () => setCurrentModal(MODAL_INITIAL_VALUE),
        onConfirm: () => handleConfirm(playerId),
      });
    }
  };

  const renderPlayers = () => {
    return playersRenderList.map((player) => {
      if (!hideSelected || (hideSelected && player.available)) {
        return canMakePick &&
          hasOpenPositionSlot(player.position) &&
          player.available ? (
          <div key={player._id} onClick={() => handlePick(player._id)}>
            <PlayerCard
              player={player}
              team={teams[player.teamId]}
              rank={player.positionRank}
              selectable={true}
            />
          </div>
        ) : (
          <PlayerCard
            key={player._id}
            player={player}
            team={teams[player.teamId]}
            rank={player.positionRank}
            selectable={false}
          />
        );
      } else {
        return null;
      }
    });
  };

  const updateLocalStorage = (key: string, value: any) => {
    if (localStorage.getItem(LS_KEY.PLAYERS_SETTINGS)) {
      const store = localStorage.getItem(LS_KEY.PLAYERS_SETTINGS);
      if (store) {
        const updateObj = JSON.parse(store);
        updateObj[key] = value;
        localStorage.setItem(
          LS_KEY.PLAYERS_SETTINGS,
          JSON.stringify(updateObj)
        );
      }
    }
  };

  const handlePositionChange = (newSelectedPositions: NFL_Position[]) => {
    setSelectedPositions(newSelectedPositions);
    updateLocalStorage(SETTINGS_KEYS.SELECTED_POSITIONS, newSelectedPositions);
  };

  const handleSortChange = (newSort: Sorting) => {
    setSorting(newSort);
    updateLocalStorage(SETTINGS_KEYS.SORTING, newSort);
  };

  const handleHideSelectedChange = () => {
    const newValue = !hideSelected;
    updateLocalStorage(SETTINGS_KEYS.HIDE_SELECTED, newValue);
    setHideSelected(newValue);
  };

  React.useEffect(() => {
    const list: PlayerInfo[] = [];
    for (let key in players) {
      selectedPositions.forEach((selPos) => {
        if (players[key].position === selPos) {
          list.push(players[key]);
        }
      });
    }

    switch (sorting) {
      case 'A-Z':
        setPlayersRenderList(sortBy(list, ['lastName', 'firstName']));
        break;
      case 'RANK':
        setPlayersRenderList(
          sortBy(list, ['positionRank', 'lastName', 'firstName'])
        );
        break;
      case 'TEAM':
        setPlayersRenderList(sortBy(list, ['teamId', 'lastName', 'firstName']));
        break;
    }
  }, [players, selectedPositions, sorting]);

  React.useEffect(() => {
    if (!localStorage.getItem(LS_KEY.PLAYERS_SETTINGS)) {
      setSelectedPositions(['QB']);
      setSorting('RANK');
      const updateObj = {
        [SETTINGS_KEYS.SELECTED_POSITIONS]: ['QB'],
        [SETTINGS_KEYS.SORTING]: 'RANK',
        [SETTINGS_KEYS.HIDE_SELECTED]: false,
      };
      localStorage.setItem(LS_KEY.PLAYERS_SETTINGS, JSON.stringify(updateObj));
    } else {
      const savedSettings = localStorage.getItem(LS_KEY.PLAYERS_SETTINGS);
      if (savedSettings) {
        const parsedSettings = JSON.parse(savedSettings);
        setSelectedPositions(parsedSettings[SETTINGS_KEYS.SELECTED_POSITIONS]);
        setSorting(parsedSettings[SETTINGS_KEYS.SORTING]);
        setHideSelected(parsedSettings[SETTINGS_KEYS.HIDE_SELECTED]);
      }
    }
  }, []);

  React.useEffect(() => {
    setCanMakePick(
      draftStatus === 'open' && currentDraftPick.ownerId === user?._id
    );
    if (draftStatus === 'done') {
      setCurrentAlert('Your draft is complete!');
    }
  }, [draftStatus, user, currentDraftPick, setCurrentAlert]);

  return (
    <ThreeUpLayout
      left={<div>highest rank available</div>}
      center={
        <MobileContentContainer>
          <PositionToggle
            positions={positions}
            selectedPositions={selectedPositions}
            onPositionsToggle={(newSelectedPositions) =>
              handlePositionChange(newSelectedPositions)
            }
          />
          <SortToggle
            sortTypes={sortTypes}
            selectedSortType={sorting}
            onSortToggle={(newSort) => handleSortChange(newSort as Sorting)}
          />
          <HidePlayersToggle
            active={hideSelected}
            onToggle={() => handleHideSelectedChange()}
          />
          <div>{players && renderPlayers()}</div>
        </MobileContentContainer>
      }
      right={<div>my team needs</div>}
    />
  );
};

export default PlayersPage;
