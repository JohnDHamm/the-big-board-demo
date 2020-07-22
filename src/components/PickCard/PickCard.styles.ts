import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid grey;
  max-width: 400px;
  height: 42px;
  border-radius: 21px;
  display: flex;
  margin: 4px 0;
`;

export const PickNumBlock = styled.div`
  display: flex;
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

export const PickNum = styled.h2`
  margin: 0;
  color: white;
`;

export const OwnerBlock = styled.div`
  display: flex;
  flex: 1;
  /* border: 1px solid red; */
  padding-left: 0.5rem;
  justify-content: flex-start;
  align-items: center;
`;

export const PlayerBlock = styled.div`
  display: flex;
  flex: 2.5;
  justify-content: space-between;
  /* border: 1px solid green; */
  padding-left: 0.5rem;
  background-color: navy;
  border-radius: 0 21px 21px 0;
`;

export const PlayerNameBlock = styled.div`
  /* border: 1px dashed blue; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const PlayerFirstName = styled.p`
  margin: 0;
  font-size: 10px;
  color: white;
`;

export const PlayerLastName = styled.p`
  margin: 0;
  color: white;
`;

export const PositionBlock = styled.div`
  display: flex;
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background-color: grey;
  justify-content: center;
  align-items: center;
`;

export const Position = styled.h2`
  margin: 0;
  color: black;
`;
