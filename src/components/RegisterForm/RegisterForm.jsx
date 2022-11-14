import useForm from '../../hooks/useForm';
import styled from 'styled-components';
import useLang from '../../hooks/useLang';
import contentText from '../../Lang/contentText.json';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { lang } = useLang();
  const { name, email, password } = state;
  const userName = contentText.userName[lang];
  const userEmail = contentText.userEmail[lang];
  const userPassword = contentText.userPassword[lang];
  const registrBtn = contentText.registrBtn[lang];
  return (
    <SForm action="" onSubmit={handleSubmit}>
      <SField>
        <label htmlFor="">{userName}: </label>
        <input
          value={name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Введите имя пользователя"
          required
        />
      </SField>
      <SField>
        <label htmlFor="">{userEmail}: </label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Введите email пользователя"
        />
      </SField>
      <SField>
        <label htmlFor="">{userPassword}: </label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Введите пароль пользователя"
        />
      </SField>

      <StyledBtn type="submit">{registrBtn}</StyledBtn>
    </SForm>
  );
};

export default RegisterForm;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  width: 600px;
  height: 100%;
  padding: 20px;
  border: solid black 1px;
  font-size: 25px;
`;

const SField = styled.div`
  margin: 10px;
`;

const StyledBtn = styled.button`
  margin: auto;
  margin-left: auto;
  font-family: inherit;
  font-size: 25px;

  width: 150px;
  height: 40px;
  cursor: pointer;
`;
