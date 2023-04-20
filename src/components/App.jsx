import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';

import Form from './Form/Form';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilter = e => {
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  addContact = ({ name, id, number }) => {
    const contact = { id, name, number };
    this.setState(({ contacts }) => {
      return { contacts: [contact, ...contacts] };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Form
          onSubmit={this.formSubmitHandler}
          onContactsAdd={this.addContact}
        />
        <label>
          Find contacts by name
          <input type="text" name="filter" onChange={this.handleFilter} />
        </label>

        <Contacts title="Contacts" contacts={this.state.contacts} />
      </div>
    );
  }
}
