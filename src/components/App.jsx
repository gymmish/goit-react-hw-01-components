import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friends/FriendList';

import users from './Profile/users.json';
import data from './Statistics/data.json';
import friends from './Friends/friends.json';

export const App = () => {
  return (
    <>
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        stats={users.stats}
      />

      <Statistics title="Upload stats" data={data} />

      <FriendList friends={friends} />
    </>
  );
};
