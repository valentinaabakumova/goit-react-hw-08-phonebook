import useForm from '../../hooks/useForm';
import styled from 'styled-components';

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

  const { name, email, password } = state;

  return (
    <SForm action="" onSubmit={handleSubmit}>
      <SField>
        <label htmlFor="">user name: </label>
        <input
          value={name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="your name"
          required
        />
      </SField>
      <SField>
        <label htmlFor="">user email: </label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="your email"
        />
      </SField>
      <SField>
        <label htmlFor="">password: </label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="your password"
        />
      </SField>

      <StyledBtn type="submit">registration</StyledBtn>
    </SForm>
  );
};

export default RegisterForm;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
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
  font-family: monospace;
  font-size: 25px;

  width: 180px;
  height: 40px;
  cursor: pointer;
`;
