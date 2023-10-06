import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  filterContacts = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };
  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  handleSubmit = data => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.concat({
          id: nanoid(),
          name: data.name,
          number: data.number,
        }),
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filterContacts} />
        {this.state.contacts.length !== 0 && (
          <ContactList contacts={this.getFilteredContacts()} />
        )}
      </div>
    );
  }
}
