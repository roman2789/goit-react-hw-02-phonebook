export const Contacts = ({ title, contacts }) => {
  return (
    <div>
      <h2>{title}</h2>
      {contacts.map(contact => (
        <li key={contact.id}>
          <span>{contact.name}</span>: <span>{contact.number}</span>
        </li>
      ))}
    </div>
  );
};
