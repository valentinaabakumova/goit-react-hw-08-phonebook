import Navbar from './Navbar/Navbar';
import UserRoutes from './UseRouts';
import { useEffect } from 'react';
import { current } from '../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <SBody className="App">
      <Navbar />
      <UserRoutes />
    </SBody>
  );
}

const SBody = styled.div`
  padding: 20px;
  height: 100vh;
`;
export default App;
