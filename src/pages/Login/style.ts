import styled from "styled-components";

export const HelperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px 10px;
  color: #666666;

  input {
    margin-right: 5px;
  }
`;
export const CreateAccountContainer = styled.div`
  margin: 10px 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666666;
  a {
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  margin-top: 10px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid;
  padding: 10px;
`;
