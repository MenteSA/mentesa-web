import { Container } from "./style";
import NavLinkMenu from "../NavLinkMenu";

interface IProps {
  professional: boolean;
}

const MenuList: React.FC<IProps> = ({ professional }) => {
  return professional ? (
    <Container>
      <NavLinkMenu navigateTo="/" title="Dashboard" />
      <NavLinkMenu navigateTo="/patients" title="Pacientes" />
      <NavLinkMenu navigateTo="/sessao" title="Sessão" />
    </Container>
  ) : (
    <Container>
      <NavLinkMenu navigateTo="/" title="Dashboard" />
    </Container>
  );
};

export default MenuList;
