import React from 'react';
import useLang from 'hooks/useLang';
import contentText from '../../Lang/contentText.json';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiOutlinePhone } from 'react-icons/ai';

const ContactList = ({ contacts, onDeleteContact }) => {
  const { lang } = useLang();
  const deleteBtn = contentText.delBtn[lang];
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <StyledList key={id}>
          <Span>
            <AiOutlinePhone color={`black`} size={30} />
          </Span>
          <p>
            {name}: {number}
          </p>
          <StyledBtn type="button" onClick={() => onDeleteContact(id)}>
            {deleteBtn}
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
const Span = styled.span`
  margin-right: 10px;
`;

const StyledBtn = styled.button`
  margin-left: auto;
  font-family: inherit;
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
