import MenuList from "../MenuList";
import { Container, Header, UserContainer } from "./style";
import { BoxArrowRight } from "react-bootstrap-icons";
import { useUser } from "../../context/user.context";
import { useAuth } from "../../context/auth.context";

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const { name, professional } = useUser();
  return (
    <Container>
      <Header>
        <h1>Mente Sã</h1>
        <p>Bem vindo(a),</p>
        <UserContainer>
          <h4>{name}</h4>
          <button
            onClick={() => {
              signOut();
            }}
          >
            <BoxArrowRight color="red" size={22} className="icon" />
          </button>
        </UserContainer>
      </Header>
      <MenuList professional={professional} />
    </Container>
  );
};

export default Aside;
