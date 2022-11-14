// import { instance } from './auth';

// export const getContacts = async () => {
//   const { data } = await instance.get('/contacts');
//   return data;
// };

// export const addContact = async options => {
//   const { data } = await instance.post('/contacts', options);
//   return data;
// };

// export const deleteContact = async id => {
//   const { data } = await instance.delete(`/contacts/${id}`);
//   return data;
// };

// import axios from 'axios';
import instance from './auth';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  console.log(data);
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContact = async id => {
  const { data: result } = await instance.delete(`/contacts/${id}`);
  return result;
};
