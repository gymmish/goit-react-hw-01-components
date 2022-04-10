import propTypes from 'prop-types';
import defaultImg from './default-avatar.png';

const Profile = ({ username, tag, location, avatar = defaultImg, stats }) => {
  return (
    <div className>
      <div className>
        <img src={avatar} alt={username} />
        <p className>{username}</p>
        <p className>@{tag}</p>
        <p className>{location}</p>
      </div>

      <ul className>
        <li>
          <span className>Followers</span>
          <span className>{stats.followers}</span>
        </li>
        <li>
          <span className>Views</span>
          <span className>{stats.views}</span>
        </li>
        <li>
          <span className>Likes</span>
          <span className>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  username: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  avatar: propTypes.string,
  stats: propTypes.objectOf({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }),
};
