import { Tweet } from "../../components/Tweet/Tweet";
import { List } from "./TweetsPage.styled.js";

const users = [
  {
    id: 1,
    user: "Elon Reeve Musk",
    tweets: 777,
    followers: 100500,
    avatar:
      "https://res.cloudinary.com/digml0rat/image/upload/v1682020896/tweets-cards-test/avatar_ihnk7c.png",
  },
  {
    id: 2,
    user: "Dave Ben",
    tweets: 666,
    followers: 1500,
    avatar:
      "https://res.cloudinary.com/digml0rat/image/upload/v1682020896/tweets-cards-test/avatar_ihnk7c.png",
  },
  {
    id: 3,
    user: "Bill Morgan",
    tweets: 555,
    followers: 100,
    avatar:
      "https://res.cloudinary.com/digml0rat/image/upload/v1682020896/tweets-cards-test/avatar_ihnk7c.png",
  },
];

export const TweetsList = () => {
  return (
    <>
      <List>
        {users.map((user) => {
          return <Tweet key={user.id} data={user} />;
        })}
      </List>
    </>
  );
};
