import MenuList from "../MenuList";
import { Container, Header, UserContainer } from "./style";
import { BoxArrowRight } from 'react-bootstrap-icons';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Mente Sã</h1>
        <p>Bem vindo(a),</p>
        <UserContainer>
          <h4>nome Usuario</h4>
          <button>
            <BoxArrowRight color="red"size={22} className="icon"/>
          </button>
        </UserContainer>
      </Header>
      <MenuList professional={true} />
    </Container>
  );
};

export default Aside;
