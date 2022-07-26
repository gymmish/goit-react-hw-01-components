import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const FriendItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 300px;
  margin: 10px;
  padding: 15px;
  border-radius: 15px;
  background-color: lavender;
  :hover {
    box-shadow: 0 5px 10px 2px rgb(0 0 0 / 25%);
  }
`;

export const Statys = styled.span`
  height: 10px;
  margin: 10px;
  border-radius: 50%;
  color: #11ffee00;
  background-color: ${props => (props.typeisOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  object-fit: cover;
`;

export const FriendName = styled.p`
  height: 10px;
  margin: 10px;
  color: black;
  font-size: 18px;
`;
