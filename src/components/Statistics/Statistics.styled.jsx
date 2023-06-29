import styled from 'styled-components';
export const StatisticsSection = styled.section`
  background-color: rgba(229, 255, 0, 0.804);
  width: 600px;
  border-radius: 8px;
  margin: 30px auto 30px auto;
  padding: 15px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  margin: 0 0 20px 0;
`;
export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > li {
    flex-basis: calc(100% / 4);
    height: 100px;
    text-align: center;
  }
  & > li:nth-child(n + 1) {
    background-color: rgba(255, 0, 0, 0.434);
  }
  & > li:nth-child(2n + 1) {
    background-color: rgba(0, 255, 55, 0.434);
  }
  & > li:nth-child(3n + 1) {
    background-color: rgba(17, 0, 255, 0.434);
  }
  & > li:nth-child(4n + 1) {
    background-color: rgba(255, 0, 225, 0.434);
  }
  & > li:nth-child(5n + 1) {
    background-color: rgba(40, 40, 46, 0.434);
  }
`;
export const Label = styled.span`
  display: block;
  margin-bottom: 12px;
  margin-top: 20px;
  font-size: 28px;
  font-weight: 500;
`;

export const Percent = styled.span`
  font-size: 30px;
  font-weight: 700;
`;
