import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  margin: 40px auto;
  background-color: bisque;

  border-collapse: collapse;

  th,
  td {
    width: calc(100% / 3);
    border: 2px solid black;
  }
  th {
    height: 50px;
    font-size: 30px;
    font-weight: bold;
    background-color: brown;
  }
  td {
    height: 40px;
    font-size: 20px;
    font-weight: 500;
  }
  tr:nth-child(2n + 1) {
    background-color: #e5bd97;
  }
`;
