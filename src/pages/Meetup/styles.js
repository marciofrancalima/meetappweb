import styled from 'styled-components';
import { darken } from 'polished';
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

      span {
        font-size: 14px;
        font-weight: normal;
        color: #c8bd5b;
      }
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        margin-right: 8px;
        background: none;
        border: 1px solid #fff;
        border-radius: 4px;
        padding: 5px;
        color: #fff;
        font-size: 12px;

        &:hover {
          background: ${darken(0.03, '#f94d6a')};
        }
      }
    }
  }

  strong {
    color: #fff;
    font-size: 20px;
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
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
    opacity: ${props => (props.done ? 0.3 : 1)};

    &:hover {
      color: ${darken(0.03, '#f94d6a')};
    }
  }

  time {
    opacity: ${props => (props.done ? 0.3 : 1)};
  }
`;

export const NewMeetupButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 37px;
  width: 140px;
  margin-left: 10px;
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

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background: #f94d6a;
    color: #fff;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      background: ${darken(0.08, '#f94d6a')};
    }

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;
