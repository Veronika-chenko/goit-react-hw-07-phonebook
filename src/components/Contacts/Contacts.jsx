import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { ContactItem, ContactDeleteButton } from './Contacts.styled';

const getFilteredContacts = (contacts, filterValue) => {
  const normalizedFilter = filterValue.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);
  const visibleContacts = getFilteredContacts(contacts, filterValue);

  const dispatch = useDispatch();

  return (
    <ul>
      {visibleContacts.length === 0 && <p>No matches found</p>}
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <ContactDeleteButton onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ContactDeleteButton>
        </ContactItem>
      ))}
    </ul>
  );
};
