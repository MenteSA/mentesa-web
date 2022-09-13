import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #aaaaaa;
`;

export const HelperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px 10px;
  color: #666666;
`;
export const CreateAccountContainer = styled.div`
  margin: 10px 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #666666;
`;

export const Form = styled.form`
  width: 400px;
  height: 400px;
  padding: 30px;
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

export const Input = styled.input`
  margin-top: 10px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid;
  padding: 10px;
`;
