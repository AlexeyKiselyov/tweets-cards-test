import { Wrapper } from "./tweets.styled.js";
import logo from "../../assets/goit-logo.svg";

export const Tweet = () => {
  return (
    <Wrapper>
      <div>
        <img src={logo} alt="Gi IT logo" width="76" />
      </div>
    </Wrapper>
  );
};
