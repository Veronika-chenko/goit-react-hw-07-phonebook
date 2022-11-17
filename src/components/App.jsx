import { Form } from './Form/Form';
import { ContactList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { TopTitle, Title } from './App.styled';

export const App = () => {
  return (
    <>
      <TopTitle>Phonebook</TopTitle>
      <Form />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </>
  );
};
