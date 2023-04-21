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
    this.setState({
      filter: e.target.value,
    });

    // this.state.contacts.filter(
    //   contact =>
    //     contact.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
    //     this.setState((prevState) => {
    //       prevState.contacts: [contact, ...contacts];
    //     })
    // );
  };

  onFilterContacts = () => {
    let filteredContacts = [];
    if (this.state.filter) {
      filteredContacts = this.state.contacts.filter(
        contact =>
          contact.name.includes(this.state.filter) ||
          contact.name.toLowerCase().includes(this.state.filter)
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
        <Form
          onSubmit={this.formSubmitHandler}
          onContactsAdd={this.addContact}
        />
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            onChange={this.handleFilter}
            value={this.state.filter}
          />
        </label>

        <Contacts title="Contacts" filteredContacts={this.onFilterContacts()} />
      </div>
    );
  }
}
