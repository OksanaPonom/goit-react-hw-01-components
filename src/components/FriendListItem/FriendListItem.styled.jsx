import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: rgba(155, 236, 236, 0.826);
  box-shadow: 1px 8px 34px -4px rgba(0, 0, 0, 0.75);
`;
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: auto 20px auto 20px;
  background-color: ${props => {
    return props.status ? 'green' : 'red';
  }};
`;
export const Avatar = styled.img`
  height: 72px;
  margin: auto 20px auto 0;
`;
export const UserName = styled.p`
  font-size: 50px;
  font-weight: bold;
  margin: auto 0;
`;
