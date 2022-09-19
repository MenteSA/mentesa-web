import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #aaaaaa;
`;

export const Form = styled.form`
  width: 400px;
  padding: 30px;
  margin-top: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  h3 {
    color: #6813d4;
    padding-bottom: 15px;
  }

  a {
    cursor: pointer;
  }
`;

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: end;
  input[type="submit"] {
    padding: 15px 30px;
    border-radius: 7px;
    background-color: #6813d4;
    color: #fff;
    transition: 0.5s;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    opacity: 0.7;
  }
`;

export const Title = styled.h1`
  display: flex;
  color: #6813d4;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
`;
