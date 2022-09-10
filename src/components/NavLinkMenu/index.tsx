import { NavLink } from "react-router-dom";
import { Container } from "./style";

interface IProps {
  title: string;
  navigateTo: string;
}
const NavLinkMenu: React.FC<IProps> = ({ title, navigateTo }) => {
  return (
    <Container>
      <NavLink
        to={navigateTo}
        className={({ isActive }) =>
          isActive ? "menuItemLinkActived" : "menuItemLink"}>
        <h4>{title}</h4>
      </NavLink>
    </Container>
  );
};
export default NavLinkMenu;
