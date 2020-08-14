import React from 'react';
import socketIOClient from 'socket.io-client';
import {
  AlertContext,
  CurrentPickContext,
  DraftContext,
  MyTeamContext,
  PickIsInModalContext,
  PicksContext,
  PlayersContext,
  TeamsContext,
  UserContext,
} from '../../contexts';

const ROOT_URL = 'http://localhost:4001';
export const socket = socketIOClient(ROOT_URL);

const SocketListener: React.FC = ({ children }) => {
  const { setCurrentAlert } = React.useContext(AlertContext);
  const { user } = React.useContext(UserContext);
  const { setCurrentDraftPick } = React.useContext(CurrentPickContext);
  const { draft } = React.useContext(DraftContext);
  const { picks, setCurrentPicks } = React.useContext(PicksContext);
  const { players, setCurrentPlayers } = React.useContext(PlayersContext);
  const { teams } = React.useContext(TeamsContext);
  const { myTeam, setCurrentMyTeam } = React.useContext(MyTeamContext);
  const { setCurrentPickIsInModal } = React.useContext(PickIsInModalContext);

  const [newPick, setNewPick] = React.useState<DraftSelection>();

  const updatePlayer = React.useCallback(
    (playerId: string, players: PlayersContext) => {
      players[playerId].available = false;
      setCurrentPlayers(players);
    },
    [setCurrentPlayers]
  );

  const updatePicks = React.useCallback(
    (newPick: DraftSelection, picks: DraftPickContext) => {
      picks[newPick.selectionNumber] = newPick;
      const updateCurrent: CurrentDraftPick = {
        selectionNumber: newPick.selectionNumber + 1,
        ownerId: picks[newPick.selectionNumber + 1].ownerId,
      };
      // ? what if last pick?
      setCurrentDraftPick(updateCurrent);
      setCurrentPicks(picks);
    },
    [setCurrentPicks, setCurrentDraftPick]
  );

  const getOwnerName = React.useCallback(
    (ownerId: string) => {
      const owner = draft.owners.find((owner) => owner._id === ownerId);
      return owner ? owner.name : '';
    },
    [draft]
  );

  React.useEffect(() => {
    console.log('newPick', newPick);
    if (
      newPick &&
      user &&
      players &&
      teams &&
      setCurrentPickIsInModal &&
      updatePlayer &&
      updatePicks
    ) {
      if (user?._id !== newPick.ownerId) {
        // console.log('pick not by user - set modal');
        const player = players[newPick.playerId];
        const team = teams[player.teamId];
        const newModal: PickIsInModal = {
          visible: true,
          selectionNumber: newPick.selectionNumber,
          ownerName: getOwnerName(newPick.ownerId),
          player: {
            position: player.position,
            firstName: player.firstName,
            lastName: player.lastName,
          },
          team: {
            abbv: team.abbv,
            colors: team.colors,
          },
        };
        setCurrentPickIsInModal(newModal);
      } else {
        // console.log('pick by user - set myTeam');
        const updateTeam: MyTeam = JSON.parse(JSON.stringify(myTeam));
        const newSelection: DraftPick = {
          selectionNumber: newPick.selectionNumber,
          playerId: newPick.playerId,
          ownerId: newPick.ownerId,
        };
        updateTeam.push(newSelection);
        setCurrentMyTeam(updateTeam);
        setCurrentAlert('Congrats! Your pick is complete.');
        setTimeout(() => setCurrentAlert(null), 4000);
      }
      updatePicks(newPick, JSON.parse(JSON.stringify(picks)));
      updatePlayer(newPick.playerId, JSON.parse(JSON.stringify(players)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    newPick,
    user,
    teams,
    setCurrentPickIsInModal,
    getOwnerName,
    updatePlayer,
    updatePicks,
  ]);

  React.useEffect((): any => {
    socket.on('JoinRoomWelcome', (msg: string) =>
      console.log('JoinRoomWelcome', msg)
    );
    // socket.on("UpdateConnected", (data) =>
    //   console.log("update connected", data)
    // )
    return () => socket.disconnect();
  }, []);

  React.useEffect((): any => {
    socket.on('PickMade', (pick: DraftSelection) => {
      console.log('pick made', pick);
      setNewPick(pick);
    });
  }, []);

  React.useEffect(() => {
    console.log('draft change', draft);
  }, [draft]);

  return <div>{children}</div>;
};

export default SocketListener;