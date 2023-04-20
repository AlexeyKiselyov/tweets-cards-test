import {
  Wrapper,
  GoitLogo,
  ImgChat,
  DecorBlockLine,
  DecorBlockCircle,
  AvatarWrapper,
  TweetsParagragh,
  FollowersParagragh,
  FollowBtn,
} from "./Tweets.styled.js";
import logoGoit from "../../assets/goit-logo.svg";
import chatImg from "../../assets/chat.svg";
import { useState } from "react";

export const Tweet = ({ data }) => {
  const { tweets, followers, avatar } = data;

  const [followersCount, setFollowersCount] = useState(followers);
  const [follow, setFollow] = useState(false);

  const onFolowBtnClick = () => {
    if (!follow) {
      setFollowersCount((prev) => prev + 1);
      setFollow(true);
    } else {
      setFollowersCount((prev) => prev - 1);
      setFollow(false);
    }
  };

  return (
    <Wrapper>
      <GoitLogo src={logoGoit} alt="Gi IT logo" width="76" />
      <ImgChat src={chatImg} alt="Chat and tweets image" width="308px" />
      <DecorBlockLine />
      <DecorBlockCircle />
      <AvatarWrapper url={avatar} />
      <TweetsParagragh>{tweets} tweets</TweetsParagragh>
      <FollowersParagragh>{followersCount} Followers</FollowersParagragh>
      <FollowBtn type="button" onClick={onFolowBtnClick} color={follow}>
        Follow
      </FollowBtn>
    </Wrapper>
  );
};
