import { useState } from 'react';

import {
  Wrapper,
  DecorBlockLine,
  DecorBlockCircle,
  AvatarWrapper,
  TweetsParagragh,
  FollowersParagragh,
  FollowBtn,
} from './Tweet.styled.js';

import { commaFollowersFunc } from '../../utils';

export const Tweet = ({ data }) => {
  const { tweets, followers, avatar } = data;

  const [followersCount, setFollowersCount] = useState(followers);
  const [follow, setFollow] = useState(false);

  const onFolowBtnClick = () => {
    if (!follow) {
      setFollowersCount(prev => prev + 1);
      setFollow(true);
    } else {
      setFollowersCount(prev => prev - 1);
      setFollow(false);
    }
  };

  return (
    <Wrapper>
      <DecorBlockLine />
      <DecorBlockCircle />
      <AvatarWrapper url={avatar} />
      <TweetsParagragh>{tweets} tweets</TweetsParagragh>
      <FollowersParagragh>
        {commaFollowersFunc(followersCount)} Followers
      </FollowersParagragh>
      <FollowBtn type="button" onClick={onFolowBtnClick} color={follow}>
        {follow ? 'Following' : 'Follow'}
      </FollowBtn>
    </Wrapper>
  );
};
