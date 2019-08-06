import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: #fff;
      font-size: 32px;
      font-weight: bold;
    }

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  img {
    width: 800px;
    height: 260px;
    margin-top: 30px;
    border-radius: 4px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: 30px auto;
`;

export const EditButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 37px;
  width: 140px;
  margin-left: 10px;
  background: #4dbaf9;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, '#4DBAF9')};
  }
`;

export const CancelButton = styled.button`
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

export const Description = styled.div`
  p {
    margin-top: 15px;
    color: #fff;
  }

  div {
    margin: 30px;
    color: #999;
    display: flex;

    time {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 40px;

      svg {
        margin-right: 3px;
      }
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 3px;
      }
    }
  }
`;
