import propTypes from 'prop-types';

const ContactList = ({ title, filteredContacts, onClickDeleteContact }) => {
  return (
    <div>
      <h2>{title}</h2>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <span>{contact.name}</span>: <span>{contact.number}</span>
          <button
            type="button"
            onClick={() => onClickDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  filteredContacts: propTypes.func.isRequired,
  onClickDeleteContact: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
};
