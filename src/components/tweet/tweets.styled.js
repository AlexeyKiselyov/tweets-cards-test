import styled from "styled-components";

export const Wrapper = styled.div`
  width: 380px;
  height: 460px;
  position: relative;

  padding: 284px 0 36px 0;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const GoitLogo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const ImgChat = styled.img`
  position: absolute;
  left: 36px;
  top: 28px;
`;

export const DecorBlockLine = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const DecorBlockCircle = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 178px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 86px;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  width: 62px;
  height: 62px;
  left: 159px;
  top: 187px;

  background-color: #5736a3;

  border-radius: 86px;
`;

export const ImgAvatar = styled.img``;

export const TweetsParagragh = styled.p`
  margin-bottom: 16px;

  text-align: center;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;
`;
export const FollowersParagragh = styled.p`
  margin-bottom: 26px;

  text-align: center;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const FollowBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 28px;

  width: 196px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  text-transform: uppercase;

  color: #373737;
`;
