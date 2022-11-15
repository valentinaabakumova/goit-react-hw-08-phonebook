import React, { useState } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Form({ contacts, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const marker = e.currentTarget.name;
    switch (marker) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };
  const notification1 = '  is already in your list';
  const notification2 = 'OK';
  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      Report.warning(`${name}` + notification1, notification2);
      return;
    }

    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLable>
        name:
        <StyledInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledLable>
      <StyledLable>
        number:
        <StyledInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLable>
      <StyledBtn type="submit" disabled={!name || !number}>
        add contact
      </StyledBtn>
    </StyledForm>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const StyledLable = styled.label`
  display: flex;
  align-items: center;

  margin: 10px 0px;
  font-size: 30px;
`;

const StyledInput = styled.input`
  width: 180px;
  height: 30px;
  margin-left: 10px;
  font-size: 20px;
`;

const StyledBtn = styled.button`
  font-family: monospace;
  font-size: 25px;
  width: 170px;
  height: 50px;
`;

export default Form;
