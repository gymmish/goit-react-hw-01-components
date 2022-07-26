import PropTypes from 'prop-types';

import { List, FriendItem, Statys, Avatar, FriendName } from './Friend.styled';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <Statys typeisOnline={friend.isOnline ? true : false}>O</Statys>
          <Avatar src={friend.avatar} alt="User avatar" width="48" />
          <FriendName>{friend.name}</FriendName>
        </FriendItem>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
