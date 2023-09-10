import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContacts = (name, number) => {
    const showAlert = true;
    const similarElement = element => element.name === name;
    if (
      // this.state.contacts.filter(contact => contact.name === name).length !== 0 // мій метод пошуку подібного ім'я через фільтер
      // this.state.contacts.some(contact => contact.name === name) // знайшов some, який перебирає масив і повертає true або false, не мутує вихідний масив

      this.state.contacts.some(similarElement)
    ) {
      alert(name + ' is already in contacts.');
      return showAlert;
    }

    this.setState(prevState => ({
      contacts: [{ id: nanoid(), name, number }, ...prevState.contacts],
    }));
  };

  handlerInputFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  handlerButtonDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const lowerCaseFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm addNewContacts={this.addNewContacts} />
        <h2>Contacts</h2>
        <Filter
          onChange={this.handlerInputFilter}
          filterValue={this.state.filter}
        />
        <ContactList
          contacts={this.filterContacts()}
          onButtonDelete={this.handlerButtonDelete}
        />
      </div>
    );
  }
}
