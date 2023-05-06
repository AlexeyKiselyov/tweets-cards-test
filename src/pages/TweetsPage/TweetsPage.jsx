import { useEffect, useState } from 'react';

import getUsers from '../../services/getUsers';

import { Tweet } from '../../components/Tweet/Tweet';
import { Loader } from '../../components/Loader/Loader';
import { Section } from '../../components/Common/Section/Section';
import { Container } from '../../components/Common/Conteiner/Conteiner';

import { BtnLoadMore, DropdownStyle, List } from './TweetsPage.styled.js';

export const TweetsPage = () => {
  // dropdown options
  const options = ['Show all', 'Follow', 'Followings'];
  const defaultOption = options[0];

  // states
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [filter, setFilter] = useState(null);
  const [loadMoreBtnText, setloadMoreBtnText] = useState('Load more');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers(
      pageNumber,
      setError,
      setIsLoading,
      setUsers,
      setTotalPages,
      filter
    );
  }, [pageNumber, filter]);

  useEffect(() => {
    if (totalPages && totalPages - pageNumber < 0) {
      setloadMoreBtnText('No data');
    } else {
      setloadMoreBtnText('Load more');
    }
  }, [pageNumber, totalPages]);

  const onLoadMoreBtn = () => {
    if (totalPages && totalPages - pageNumber < 0) return;

    setPageNumber(prev => prev + 1);
  };

  const onSelect = e => {
    setUsers([]);
    setPageNumber(1);

    const query = e.value;
    if (query === 'Show all') {
      setFilter(null);
    }
    if (query === 'Follow') {
      setFilter(false);
    }
    if (query === 'Followings') {
      setFilter(true);
    }
  };

  return (
    <Section>
      <Container>
        <DropdownStyle
          options={options}
          onChange={onSelect}
          value={defaultOption}
        />
        {error && error}
        {!users.length && !isLoading ? (
          'Oopps...There is no data...('
        ) : (
          <List>
            {users.map(user => {
              return (
                <Tweet
                  key={user._id}
                  data={user}
                  setData={setUsers}
                  query={filter}
                  setIsLoading={setIsLoading}
                  setError={setError}
                />
              );
            })}
          </List>
        )}
        {!isLoading && users.length !== 0 && (
          <BtnLoadMore type="button" onClick={onLoadMoreBtn}>
            {loadMoreBtnText}
          </BtnLoadMore>
        )}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
