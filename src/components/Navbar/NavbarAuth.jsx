import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarAuth = () => {
  return (
    <SPanel>
      <NavLink to="/register">register</NavLink>|
      <NavLink to="/login">login</NavLink>
    </SPanel>
  );
};

const SPanel = styled.div`
  margin-left: auto;
  margin-right: 120px;
  font-size: 40px;
`;

export default NavbarAuth;
