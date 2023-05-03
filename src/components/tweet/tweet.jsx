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
import { putchIsFollow } from '../../services/putchIsFollow.js';

export const Tweet = ({ data, setIsLoading, setError }) => {
  const { _id, tweets, followers, avatar, isFollow } = data;

  const [followersCount, setFollowersCount] = useState(followers);
  const [follow, setFollow] = useState(isFollow);

  const followBtnColor = follow ? 'active' : 'basic';

  const onFolowBtnClick = () => {
    putchIsFollow(
      setError,
      setIsLoading,
      follow,
      followersCount,
      setFollow,
      setFollowersCount,
      _id
    );

    // if (!follow) {
    //   setFollowersCount(prev => prev + 1);
    //   putchIsFollow(setError, setIsLoading, follow, setFollow, _id);
    // } else {
    //   setFollowersCount(prev => prev - 1);
    //   putchIsFollow(setError, setIsLoading, follow, setFollow, _id);
    // }
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
