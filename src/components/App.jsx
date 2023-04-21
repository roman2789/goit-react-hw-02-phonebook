import { Component } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import ContactForm from './ContactForm/ContactForm';

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
    this.setState({
      filter: e.target.value,
    });
  };

  onFilterContacts = () => {
    let filteredContacts = [];
    if (this.state.filter) {
      filteredContacts = this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    } else {
      return this.state.contacts;
    }
    return filteredContacts;
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
        <ContactForm
          onSubmit={this.formSubmitHandler}
          onContactsAdd={this.addContact}
          contacts={this.state.contacts}
        />
        <Filter filter={this.state.filter} onFilter={this.handleFilter} />

        <ContactList
          title="Contacts"
          filteredContacts={this.onFilterContacts()}
        />
      </div>
    );
  }
}
