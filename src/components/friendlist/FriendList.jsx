import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendsList = ({ friends }) => (
  <ul className={styles.friends_list}>
    {friends.map(friend => (
      <li className={styles.item} key={friend.id}>
        <span
          className={
            friend.isOnline ? styles.statusOnline : styles.statusOffline
          }
        ></span>
        <img
          className={styles.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendsList;
