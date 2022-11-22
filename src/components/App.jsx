import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import { Form } from './Form';
import { Filter } from './Filter';
import { Contacts } from './Contacts';
import { TopTitle, Title, InfoText } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <TopTitle>Phonebook</TopTitle>
      <Form />
      <Title>Contacts</Title>
      <Filter />
      {isLoading && !error && <InfoText>Request in progress...</InfoText>}
      {error && <InfoText>Oops, something went wrong</InfoText>}
      <Contacts />
    </>
  );
};
