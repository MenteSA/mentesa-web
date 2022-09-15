import { Container } from "./style";
import NavLinkMenu from "../NavLinkMenu";
import { House, PersonFill, CalendarEvent } from "react-bootstrap-icons";

interface IProps {
  professional: boolean;
}

const MenuList: React.FC<IProps> = ({ professional }) => {
  return professional ? (
    <Container>
      <NavLinkMenu navigateTo="/" title="Dashboard">
        <House size={22} />{" "}
      </NavLinkMenu>
      <NavLinkMenu navigateTo="/patients" title="Pacientes">
        <PersonFill size={22} />
      </NavLinkMenu>
      <NavLinkMenu navigateTo="/sessions" title="Sessão">
        <CalendarEvent size={22} />
      </NavLinkMenu>
    </Container>
  ) : (
    <Container>
      <NavLinkMenu navigateTo="/" title="Dashboard">
        <House size={20} />
      </NavLinkMenu>
    </Container>
  );
};

export default MenuList;
