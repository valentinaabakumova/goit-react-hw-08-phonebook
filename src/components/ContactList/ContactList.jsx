import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <StyledList key={id}>
          <p>
            {name}: {number}
          </p>
          <StyledBtn type="button" onClick={() => onDeleteContact(id)}>
            delete
          </StyledBtn>
        </StyledList>
      ))}
    </ul>
  );
};

const StyledList = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 25px;
`;

const StyledBtn = styled.button`
  margin-left: auto;
  font-family: monospace;
  font-size: 25px;

  width: 150px;
  height: 40px;

  :hover,
  :focus {
    cursor: pointer;
  }
`;
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
