import axios from 'axios';

export function putchIsFollow(
  setError,
  setIsLoading,
  follow,
  followersCount,
  setFollow,
  setFollowersCount,
  _id
) {
  setIsLoading(true);

  axios
    .patch(`users/${_id}/follow`, {
      isFollow: !follow,
      followers: follow ? followersCount - 1 : followersCount + 1,
    })
    .then(res => {
      const { isFollow, followers } = res.data;
      setFollow(isFollow);
      setFollowersCount(followers);
    })
    .catch(error => {
      setError(error.message);
    })
    .finally(() => {
      setIsLoading(false);
    });
}
