import React from 'react';
import { PageContainer, CenterContent } from './PlayersPage.styles';
import {
  HidePlayersToggle,
  PlayerCard,
  PositionToggle,
  SortToggle,
} from '../../components';
import {
  MyTeamContext,
  PlayersContext,
  TeamsContext,
  DraftContext,
  UserContext,
} from '../../contexts';
import { makePick } from '../../api';
import sortBy from 'lodash.sortby';
import find from 'lodash.find';

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
  const { user } = React.useContext(UserContext);
  const { draft } = React.useContext(DraftContext);
  const { players } = React.useContext(PlayersContext);
  const { teams } = React.useContext(TeamsContext);
  const { myTeam } = React.useContext(MyTeamContext);
  // console.log('myTeam', myTeam);

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
    // console.log('position', position);
    const numSlots =
      find(draft.league.positionSlots, { position: position })?.total || 0;
    // console.log('numSlots', numSlots);

    const myPicks = myTeam.filter(
      (pick) => players[pick.playerId].position === position
    ).length;
    // console.log('myPicks', myPicks);
    return myPicks < numSlots;
  };

  const handlePick = (playerId: string) => {
    if (user) {
      const newPick: DraftSelection = {
        selectionNumber: draft.currentPick.selectionNumber,
        leagueId: draft.league._id,
        ownerId: user._id,
        playerId,
      };
      console.log('newPick', newPick);
      makePick(newPick)
        .then((res) => console.log('res', res))
        .catch((err) => console.log('err', err));
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
      draft.league.draftStatus === 'open' &&
        draft.currentPick.ownerId === user?._id
    );
  }, [draft, user]);

  return (
    <PageContainer>
      <CenterContent>
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
      </CenterContent>
    </PageContainer>
  );
};

export default PlayersPage;
