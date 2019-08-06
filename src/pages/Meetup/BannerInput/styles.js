import styled from 'styled-components';

export const Container = styled.div`
  align-self: stretch;
  margin-bottom: 30px;
  height: 100%;
  width: 100%;

  span {
    margin-top: 10px;
    padding-top: 10px;
    margin-bottom: 10px;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      flex: 1;
      height: 220px;
      border: none;
      border-radius: 4px;
      background: #241c2b;
      object-fit: fill;
    }

    input {
      display: none;
    }

    strong {
      position: absolute;
      color: #fff;
      font-size: 22px;
    }
  }
`;
