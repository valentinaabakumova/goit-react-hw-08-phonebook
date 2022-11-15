import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../redux/auth/authOperations';

import { getUser } from '../../redux/selectors';
import styled from 'styled-components';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <SPanel>
      <span>{name}</span>
      <StyledBtn onClick={onLogout} type="button">
        logout
      </StyledBtn>
    </SPanel>
  );
};

const SPanel = styled.div`
  margin-left: auto;
  margin-right: 120px;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const StyledBtn = styled.button`
  font-family: monospace;
  font-size: 25px;

  width: 150px;
  height: 50px;
  cursor: pointer;
`;

export default NavbarUser;
