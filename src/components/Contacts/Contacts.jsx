export const Contacts = ({ title, filteredContacts }) => {
  return (
    <div>
      <h2>{title}</h2>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <span>{contact.name}</span>: <span>{contact.number}</span>
        </li>
      ))}
    </div>
  );
};
