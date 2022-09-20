import React, { useCallback } from "react";
import MenuList from "../MenuList";
import { Container, Header, PerfilButton, UserContainer } from "./style";
import { BoxArrowRight } from "react-bootstrap-icons";
import { useUser } from "../../../context/user.context";
import { useAuth } from "../../../context/auth.context";
import { useNavigate } from "react-router-dom";
import { FilePerson } from "react-bootstrap-icons";
import { fetchUserLogout } from "../../../services/Auth/service";

const Aside: React.FC = () => {
  const { isAdmin, authenticatedUser } = useUser();
  const { isAuthenticated,verifyAuthentication } = useAuth();
  const navigate = useNavigate();

  const handleSignOutClick = async () => {
    await fetchUserLogout(authenticatedUser.email);
    if (!isAuthenticated) {
      navigate("/");
    }
  };

  const handleLogoutClick = useCallback(async () => {
    await fetchUserLogout(authenticatedUser.email).then(() => {
      verifyAuthentication();
      if (!isAuthenticated) {
        navigate("/");
      }
    });
  }, [isAuthenticated]);

  return (
    <Container>
      <Header>
        <h1>Mente Sã</h1>
        <p>Bem vindo(a),</p>
        <UserContainer>
          <PerfilButton>
            <FilePerson size={22} />
          </PerfilButton>
          <h4>{authenticatedUser.name}</h4>
          <button onClick={() => handleLogoutClick()}>
            <BoxArrowRight size={22} className="icon" />
          </button>
        </UserContainer>
      </Header>
      <MenuList professional={isAdmin} />
    </Container>
  );
};

export default Aside;
