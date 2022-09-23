import { Container } from './style';
import NavLinkMenu from '../NavLinkMenu';
import {
  House,
  PeopleFill,
  CalendarEvent,
  Calendar3,
  CardText,
} from 'react-bootstrap-icons';

interface IProps {
  professional: boolean;
}

const MenuList: React.FC<IProps> = ({ professional }) => {
  return (
    <Container>
      <NavLinkMenu navigateTo="/dashboard" title="Dashboard">
        <House size={22} />
      </NavLinkMenu>
      {professional && (
        <NavLinkMenu navigateTo="/pacientes" title="Pacientes">
          <PeopleFill size={22} />
        </NavLinkMenu>
      )}
      <NavLinkMenu navigateTo="/sessoes" title="Sessões">
        <CalendarEvent size={22} />
      </NavLinkMenu>
      <NavLinkMenu navigateTo="/agendamentos" title="Agendamentos">
        <Calendar3 size={22} />
      </NavLinkMenu>
      {professional && (
        <NavLinkMenu navigateTo="/recursos" title="Recursos">
          <CardText size={22} />
        </NavLinkMenu>
      )}
    </Container>
  );
};

export default MenuList;
