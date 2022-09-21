import styled from "styled-components";

export const Container = styled.div`
  h4 {
    font-size: large;
    font-weight: bold;
    margin-left: 7px;
    margin-top: 11px;
  }

  &:hover {
    opacity: 0.7;
  }

  .menuItemLink {
    color: #fff;
    text-decoration: none;
    margin: 15px 0 15px 0;
    display: flex;
    align-items: center;
    transition: opacity 0.3s;
    padding-left: 22px;
  }

  .menuItemLinkActived {
    display: flex;
    background: #fff;
    color: #6813d4;
    border-end-end-radius: 22px;
    border-start-end-radius: 22px;
    padding: 8px 8px 8px 22px;
    margin: 15px 10px 15px 0;
    text-decoration: none;
    align-items: center;
    transition: opacity 0.3s;
  }
`;
