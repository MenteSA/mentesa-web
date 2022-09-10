import MenuList from "../MenuList";
import { Container, Header, UserContainer } from "./style";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Mente Sã</h1>
        <p>Bem vindo(a),</p>
        <UserContainer>
          <h4>nome Usuario</h4>
          <button>
            <span>icone</span>
          </button>
        </UserContainer>
      </Header>
      <MenuList professional={true} />
    </Container>
  );
};

export default Aside;
