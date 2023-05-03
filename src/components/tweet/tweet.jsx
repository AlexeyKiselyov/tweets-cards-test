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
  const { tweets, followers, avatar, isFollow } = data;

  const [followersCount, setFollowersCount] = useState(followers);
  const [follow, setFollow] = useState(isFollow);

  const followBtnColor = follow ? 'active' : 'basic';

  const onFolowBtnClick = () => {
    if (!follow) {
      setFollowersCount(prev => prev + 1);
      setFollow(!follow);
    } else {
      setFollowersCount(prev => prev - 1);
      setFollow(!follow);
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
      <FollowBtn type="button" onClick={onFolowBtnClick} color={followBtnColor}>
        {follow ? 'Following' : 'Follow'}
      </FollowBtn>
    </Wrapper>
  );
};
