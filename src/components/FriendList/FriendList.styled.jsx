import styled from 'styled-components';
export const List = styled.ul`
  list-style: none;
  width: 600px;
  margin: 0 auto;
  padding: 0;
  & > li {
    padding: 20px 0;
    border-radius: 8px;
    transform: scale(1);
    transition: transform 250ms ease-in;
  }
  & > li:not(:last-child) {
    margin-bottom: 16px;
  }
  & > li:hover,
  & > li:focus {
    transform: scale(1.05);
  }
`;
