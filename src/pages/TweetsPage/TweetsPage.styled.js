import styled from 'styled-components';

export const List = styled.ul`
  position: relative;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const BtnLoadMore = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 28px;

  width: 196px;
  height: 50px;

  background: #ebd8ff;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  text-transform: uppercase;

  color: #373737;
`;
