import { Form } from './Form/Form';
import { ContactList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { TopTitle, Title } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <TopTitle>Phonebook</TopTitle>
      <Form />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={2000} theme="colored" hideProgressBar="true" />
    </>
  );
};
