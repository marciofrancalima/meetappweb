import styled from 'styled-components';
import { darken } from 'polished';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 800px;
  margin: 30px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: #fff;
      font-size: 32px;
      font-weight: bold;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 30px auto;
`;

export const MeetupList = styled.ul`
  margin: 40px 0 20px;
`;

export const MeetupItem = styled.li`
  width: 100%;
  margin: 10px 0;
  padding: 15px 50px 15px 15px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  time {
    opacity: 0.8;
  }
`;

export const NewMeetupButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 37px;
  width: 140px;
  background: #f94d6a;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, '#f94d6a')};
  }
`;

export const Loading = styled(Loader).attrs({
  type: 'Oval',
  color: '#f94d6a',
  height: 100,
})`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
