import { Link, NavLink } from 'react-router-dom';
import NavbarAuth from './NavbarAuth';
import NavbarUser from './NavbarUser';
import useAuth from 'hooks/useAuth';
import styled from 'styled-components';

const Navbar = () => {
  const isLogin = useAuth();
  return (
    <>
      <Layout>
        <Link to="/">home</Link>
        {isLogin && <SContacts to="/my-contacts">contacts page</SContacts>}
        {isLogin ? <NavbarUser /> : <NavbarAuth />}
      </Layout>
      {/* <Text>welcome to contact list</Text> */}
    </>
  );
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
`;
const SContacts = styled(NavLink)`
  display: flex;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
`;

// const Text = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-right: auto;
//   margin-left: auto;
//   margin-top: auto;
//   margin-bottom: auto;
//   font-size: 40px;
// `;

export default Navbar;
