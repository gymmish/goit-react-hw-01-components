import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../Friends/FriendList';
import TransactionHistory from '../Transaction/Transaction';

import users from '../Profile/users.json';
import data from '../Statistics/data.json';
import friends from '../Friends/friends.json';
import transactions from '../Transaction/transactions.json';

import { Container } from './App.styled'

export const App = () => {
  return (
    <Container>
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        stats={users.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
