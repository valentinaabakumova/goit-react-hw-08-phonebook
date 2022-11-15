import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import RegisterForm from '../RegisterForm/RegisterForm';

import { signup } from '../../redux/auth/authOperations';

import { getAuthError } from '../../redux/selectors';
import useAuth from 'hooks/useAuth';
import styled from 'styled-components';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  const isLogin = useAuth();

  const onRegister = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/my-contacts" />;
  }

  return (
    <Wrapper className="container">
      <STitle>register page</STitle>
      <RegisterForm onSubmit={onRegister} />
      {status && <p style={{ color: 'red' }}>{message}</p>}
    </Wrapper>
  );
};

export default RegisterPage;

const STitle = styled.h2`
  margin: 20px;
  font-size: 35px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
