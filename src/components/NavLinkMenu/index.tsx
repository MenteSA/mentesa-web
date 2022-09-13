import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./style";

interface IProps {
  title: string;
  navigateTo: string;
  children: ReactNode;
}
const NavLinkMenu: React.FC<IProps> = ({ title, navigateTo, children }) => {
  return (
    <Container>
      <NavLink
        to={navigateTo}
        className={({ isActive }) =>
          isActive ? "menuItemLinkActived" : "menuItemLink"
        }
      >
        {children}
        <h4>{title}</h4>
      </NavLink>
    </Container>
  );
};
export default NavLinkMenu;
