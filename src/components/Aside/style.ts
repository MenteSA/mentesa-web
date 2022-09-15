import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  background: #6813d4;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  height: 100px;
  margin: 10px 22px;
  color: #fff;

  p {
    margin-top: 30px;
  }
  button {
    border-radius: 5px;
    align-items: center;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  margin-top: 10px;

  h4 {
    margin-right: 10px;
  }

  .icon {
    margin: 3px;
    color: red;
  }
`;
