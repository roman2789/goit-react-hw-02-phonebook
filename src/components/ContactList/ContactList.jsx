import propTypes from 'prop-types';
import { List, Item, DelButton } from './ContactListStyled';

const ContactList = ({ filteredContacts, onClickDeleteContact }) => {
  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          <span>{contact.name}</span>: <span>{contact.number}</span>
          <DelButton
            type="button"
            onClick={() => onClickDeleteContact(contact.id)}
          >
            Delete
          </DelButton>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  filteredContacts: propTypes.arrayOf(propTypes.object).isRequired,
  onClickDeleteContact: propTypes.func.isRequired,
};
