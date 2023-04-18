import {
  Wrapper,
  GoitLogo,
  ImgChat,
  DecorBlockLine,
  DecorBlockCircle,
  AvatarWrapper,
  ImgAvatar,
  TweetsParagragh,
  FollowersParagragh,
  FollowBtn,
} from "./tweets.styled.js";
import logoGoit from "../../assets/goit-logo.svg";
import chatImg from "../../assets/chat.svg";
import avatarImg from "../../assets/avatar.svg";

export const Tweet = () => {
  return (
    <Wrapper>
      <GoitLogo src={logoGoit} alt="Gi IT logo" width="76" />
      <ImgChat src={chatImg} alt="Chat and tweets image" width="308px" />
      <DecorBlockLine />
      <DecorBlockCircle />
      <AvatarWrapper>
        <ImgAvatar src={avatarImg} alt="Avagar image" width="62px" />
      </AvatarWrapper>
      <TweetsParagragh>777 tweets</TweetsParagragh>
      <FollowersParagragh>100,500 Followers</FollowersParagragh>
      <FollowBtn>Follow</FollowBtn>
    </Wrapper>
  );
};
