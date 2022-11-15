import { memo } from 'react';
import Form from '../Form/Form';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import { useEffect } from 'react';

import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux/es/exports';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from '../../redux/contacts/operationsContacts';
import { filterContact } from '../../redux/filter/sliceFilter';
import { getFilter, visibleContacts } from '../../redux/selectors';

function MyContacts() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(visibleContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = (name, number) => {
    const payload = { name, number };
    const action = addContact(payload);
    dispatch(action);
  };

  const onDeleteContact = payload => {
    dispatch(deleteContact(payload));
  };

  const onChangeFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <Wrapper>
      <Title>phonebook</Title>

      <Form onSubmit={onAddContact} contacts={contacts} />
      <Title>contacts</Title>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  border: 1px solid black;
  width: 800px;
  margin: 20px auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 40px;
`;

export default memo(MyContacts);
