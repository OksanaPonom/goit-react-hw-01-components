import PropTypes from 'prop-types';
import {
  ProfileWrapper,
  Description,
  Avatar,
  UserName,
  Tag,
  Location,
  List,
  Label,
  Quantity,
} from './Profile.styled';

export function Profile(props) {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;
  return (
    <ProfileWrapper>
      <Description>
        <Avatar src={avatar} alt="User avatar" width="400" />
        <UserName>{username}</UserName>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <List>
        <li>
          <Label>Followers:</Label>
          <Quantity>{followers}</Quantity>
        </li>
        <li>
          <Label>Views:</Label>
          <Quantity>{views}</Quantity>
        </li>
        <li>
          <Label>Likes:</Label>
          <Quantity>{likes}</Quantity>
        </li>
      </List>
    </ProfileWrapper>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
