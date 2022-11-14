import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import LoginForm from '../../components/LoginForm/LoginForm';

import { login } from '../../redux/auth/authOperations';

import { getAuthError } from '../../redux/selectors';
import useAuth from 'hooks/useAuth';
import styled from 'styled-components';
import useLang from '../../hooks/useLang';
import contentText from '../../Lang/contentText.json';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);
  const isLogin = useAuth();
  const { lang } = useLang();

  const onLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/my-contacts" />;
  }
  const logPage = contentText.logPage[lang];
  return (
    <Wrapper className="container">
      <STitle>{logPage}</STitle>
      <LoginForm onSubmit={onLogin} />
      {status && <p style={{ color: 'red' }}>{message}</p>}
    </Wrapper>
  );
};

const STitle = styled.h2`
  margin: 20px;
  font-size: 35px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default LoginPage;
