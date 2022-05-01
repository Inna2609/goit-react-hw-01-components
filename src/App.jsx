import Profile from './components/profile/Profile';
import user from './data-files/user.json';
import Statistics from './components/statistics/Statistics';
import data from './data-files/data.json';
import FriendList from './components/friendlist/FriendList';
import friends from './data-files/friends.json';
import TransactionHistory from './components/transactionhistory/TransactionHistory';
import transactions from './data-files/transaction-history.json';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
