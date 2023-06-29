import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 600px;
  background-color: lightgrey;
  border-radius: 16px;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 10px 2px 40px 0px rgba(199, 95, 199, 1);
`;

export const Description = styled.div`
  margin-top: 30px;
`;
export const Avatar = styled.img`
  margin-left: 100px;
  background-color: grey;

  border-radius: 50%;
  overflow: hidden;
`;
export const UserName = styled.p`
  margin-bottom: 0;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;
export const Tag = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;
export const Location = styled.p`
  margin-top: 0;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
`;
export const List = styled.ul`
  width: 540px;
  list-style: none;
  padding: 0;
  margin-right: auto;
  margin-left: auto;

  display: flex;
  border: 2px solid black;
  background-color: lightblue;
  & > li {
    flex-basis: calc(100% / 3);
    padding: 10px 0;
  }
  & > li:nth-child(2n) {
    border-right: 2px solid black;
    border-left: 2px solid black;
  }
`;

export const Label = styled.span`
  display: block;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;
export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-size: 25px;
  font-weight: 800;
`;
