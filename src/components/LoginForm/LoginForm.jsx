import useForm from '../../hooks/useForm';
import styled from 'styled-components';

const initialState = {
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <SForm action="" onSubmit={handleSubmit}>
      <SField>
        <label htmlFor="">user email: </label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Введите email пользователя"
        />
      </SField>
      <SField>
        <label htmlFor="">password: </label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Введите пароль пользователя"
        />
      </SField>
      <StyledBtn type="submit">login</StyledBtn>
    </SForm>
  );
};

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  height: 100%;
  padding: 20px;
  font-size: 25px;
`;

const SField = styled.div`
  margin: 10px;
`;

const StyledBtn = styled.button`
  margin: auto;
  margin-left: auto;
  font-family: monospace;
  font-size: 25px;
  width: 150px;
  height: 40px;
  cursor: pointer;
`;

export default RegisterForm;
