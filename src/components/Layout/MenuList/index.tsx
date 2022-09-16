import { Container } from "./style";
import NavLinkMenu from "../NavLinkMenu";
import {
  House,
  PersonFill,
  CalendarEvent,
  Calendar3,
  CardText,
} from "react-bootstrap-icons";

interface IProps {
  professional: boolean;
}

const MenuList: React.FC<IProps> = ({ professional }) => {
  return (
    <Container>
      <NavLinkMenu navigateTo="/" title="Dashboard">
        <House size={22} />
      </NavLinkMenu>
      {professional && (
        <NavLinkMenu navigateTo="/patients" title="Pacientes">
          <PersonFill size={22} />
        </NavLinkMenu>
      )}
      <NavLinkMenu navigateTo="/sessions" title="Sessão">
        <CalendarEvent size={22} />
      </NavLinkMenu>
      <NavLinkMenu navigateTo="/schedulling" title="Agendamento">
        <Calendar3 size={22} />
      </NavLinkMenu>
      {professional && (
        <NavLinkMenu navigateTo="/resources" title="Recursos">
          <CardText size={22} />
        </NavLinkMenu>
      )}
    </Container>
  );
};

export default MenuList;
