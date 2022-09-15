import MenuList from "../MenuList";
import { Container, Header, UserContainer } from "./style";
import { BoxArrowRight } from "react-bootstrap-icons";
import { useUser } from "../../context/user.context";
import { useAuth } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";
import React from "react";

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const { name, professional } = useUser();
  const navigate = useNavigate();

  const handleSignOutClick = () => {
    signOut();
    navigate("/");
  };

  return (
    <Container>
      <Header>
        <h1>Mente Sã</h1>
        <p>Bem vindo(a),</p>
        <UserContainer>
          <h4>{name}</h4>
          <button onClick={() => handleSignOutClick()}>
            <BoxArrowRight size={22} className="icon" />
          </button>
        </UserContainer>
      </Header>
      <MenuList professional={professional} />
    </Container>
  );
};

export default Aside;
