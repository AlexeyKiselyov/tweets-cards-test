import { useEffect, useState } from 'react';

import getUsers from '../../services/getUsers';

import { Tweet } from '../../components/Tweet/Tweet';
import { BtnLoadMore, List } from './TweetsPage.styled.js';
import { Loader } from '../../components/Loader/Loader';
import { Section } from '../../components/Common/Section/Section';
import { Container } from '../../components/Common/Conteiner/Conteiner';

export const TweetsPage = () => {
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
    <Section>
      <Container>
        <div style={{ width: 290, marginLeft: 'auto', marginBottom: 20 }}>
          <button>Show all</button>
          <button>Follow</button>
          <button>Followings</button>
        </div>
        {error ? (
          error
        ) : (
          <List>
            {users.map(user => {
              return (
                <Tweet
                  key={user._id}
                  data={user}
                  setIsLoading={setIsLoading}
                  setError={setError}
                />
              );
            })}
          </List>
        )}
        <BtnLoadMore type="button" onClick={onLoadMoreBtn}>
          Load more
        </BtnLoadMore>
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
