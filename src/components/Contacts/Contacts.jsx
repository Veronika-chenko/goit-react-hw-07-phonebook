import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { ContactItem, ContactDeleteButton } from './Contacts.styled';

const getFilteredContacts = (contacts, filterValue) => {
  const normalizedFilter = filterValue.toLowerCase();
  return contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const visibleContacts = getFilteredContacts(contacts, filterValue);

  const dispatch = useDispatch();

  return (
    <ul>
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
