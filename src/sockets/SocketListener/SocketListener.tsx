import React from 'react';
import socketIOClient from 'socket.io-client';
import {
  DraftContext,
  PickIsInModalContext,
  PlayersContext,
  TeamsContext,
  UserContext,
} from '../../contexts';
import isEmpty from 'lodash.isempty';

const ROOT_URL = 'http://localhost:4001';
export const socket = socketIOClient(ROOT_URL);

const SocketListener: React.FC = ({ children }) => {
  const { user } = React.useContext(UserContext);
  const { draft } = React.useContext(DraftContext);
  const { players } = React.useContext(PlayersContext);
  const { teams } = React.useContext(TeamsContext);
  const { setCurrentPickIsInModal } = React.useContext(PickIsInModalContext);

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
      if (
        !isEmpty(draft) &&
        !isEmpty(players) &&
        !isEmpty(teams) &&
        !isEmpty(user)
      ) {
        const owner = draft.owners.find(
          (owner) => owner._id === draft.currentPick.ownerId
        );
        if (user?._id !== owner?._id) {
          const player = players[pick.playerId];
          const team = teams[player.teamId];
          const ownerName = owner ? owner.name : '';
          const newModal: PickIsInModal = {
            visible: true,
            selectionNumber: pick.selectionNumber,
            ownerName,
            player,
            team,
          };
          setCurrentPickIsInModal(newModal);
        } else {
          //TODO: update MyTeam
        }
        //TODO: update draft.currentPick.ownerId + .selectionNumber
        //TODO: update players[id].available = false
      }
    });
  }, [players, teams, draft, setCurrentPickIsInModal, user]);

  return <div>{children}</div>;
};

export default SocketListener;
