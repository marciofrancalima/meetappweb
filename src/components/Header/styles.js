import styled from 'styled-components';

export const Container = styled.div`
  background: #191620;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 32px;
      width: 32px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    a {
      display: block;
      margin-top: 5px;
      font-size: 14px;
      color: #999;
    }
  }

  button {
    background: #d44059;
    border: 0;
    border-radius: 4px;
    height: 37px;
    width: 71px;
    margin-left: 10px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
`;
