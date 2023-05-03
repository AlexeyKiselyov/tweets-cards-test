import { useEffect, useState } from 'react';
import { Tweet } from '../../components/Tweet/Tweet';
import { BtnLoadMore, List } from './TweetsPage.styled.js';
import getUsers from '../../services/getUsers';

export const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers(pageNumber, setError, setIsLoading, setUsers, setTotalPages);
  }, [pageNumber]);

  const onLoadMoreBtn = () => {
    if (totalPages && totalPages - pageNumber < 0) return;

    setPageNumber(prev => prev + 1);
  };

  return (
    <>
      {isLoading && 'Loading...'}
      {error ? (
        error
      ) : (
        <List>
          {users.map(user => {
            return <Tweet key={user._id} data={user} />;
          })}
        </List>
      )}
      <BtnLoadMore type="button" onClick={onLoadMoreBtn}>
        Load more
      </BtnLoadMore>
    </>
  );
};
