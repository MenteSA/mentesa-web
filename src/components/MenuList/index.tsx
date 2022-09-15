import { Container } from "./style";
import NavLinkMenu from "../NavLinkMenu";
import {
  House,
  PersonFill,
  CalendarEvent,
  Calendar3,
} from "react-bootstrap-icons";

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
      <NavLinkMenu navigateTo="/sessions/professional" title="Sessão">
        <CalendarEvent size={22} />
      </NavLinkMenu>
      <NavLinkMenu navigateTo="/schedulling/professional" title="Agendamento">
        <Calendar3 size={22} />
      </NavLinkMenu>
    </Container>
  ) : (
    <Container>
      <NavLinkMenu navigateTo="/" title="Dashboard">
        <House size={20} />
      </NavLinkMenu>
      <NavLinkMenu navigateTo="/sessions/patients" title="Sessão">
        <CalendarEvent size={22} />
      </NavLinkMenu>
      <NavLinkMenu navigateTo="/schedulling/patients" title="Agendamento">
        <Calendar3 size={22} />
      </NavLinkMenu>
    </Container>
  );
};

export default MenuList;
