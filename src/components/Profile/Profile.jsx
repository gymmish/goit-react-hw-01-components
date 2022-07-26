import propTypes from 'prop-types';
import defaultImg from './default-avatar.png';

import {
  ContainerProfile,
  Description,
  Avatar,
  NameUser,
  Tag,
  Location,
  Stat,
  StatList,
  StatItem,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar = defaultImg, stats }) => {
  return (
    <ContainerProfile>
      <Description>
        <Avatar src={avatar} alt={username} />
        <NameUser>{username}</NameUser>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stat>
        <StatList>
          <span>Followers </span>
          <StatItem> {stats.followers}</StatItem>
        </StatList>
        <StatList>
          <span>Views </span>
          <StatItem> {stats.views}</StatItem>
        </StatList>
        <StatList>
          <span>Likes </span>
          <StatItem> {stats.likes}</StatItem>
        </StatList>
      </Stat>
    </ContainerProfile>
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
