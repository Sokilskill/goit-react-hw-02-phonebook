import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handlerInputName = e => {
    // console.log('state.name', e.currentTarget.value);
    this.setState({
      name: e.currentTarget.value,
    });
  };

  handlerInputNumber = e => {
    // console.log('number', e.currentTarget.value);

    this.setState({
      number: e.currentTarget.value,
    });
  };

  handlerFormSubmit = e => {
    e.preventDefault();
    if (
      this.state.contacts.filter(contact => contact.name === this.state.name)
        .length !== 0
    ) {
      return alert(this.state.name + ' is already in contacts.');
    }

    this.setState({
      contacts: [
        { id: nanoid(), name: this.state.name, number: this.state.number },
        ...this.state.contacts,
      ],
    });

    e.currentTarget.reset();
  };

  handlerInputFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  handlerButtonDelete = id => {
    this.setState(
      prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      }),

      () => {
        console.log('State has been updated:', this.state.contacts);
      }
    );
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>

        <form onSubmit={this.handlerFormSubmit}>
          <label>
            Name
            <input
              onChange={this.handlerInputName}
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              pattern="^[a-zA-Zа-яА-ЯєіїЄІЇ]+(([' \-][a-zA-Zа-яА-ЯєіїЄІЇ ])?[a-zA-Zа-яА-ЯєіїЄІЇ]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              onChange={this.handlerInputNumber}
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>

        <Filter onChange={this.handlerInputFilter} />

        <ul>
          {this.state.contacts
            .filter(contact =>
              contact.name
                .toLowerCase()
                .includes(this.state.filter.toLowerCase())
            )
            .map(contact => {
              return (
                <li key={contact.id}>
                  <p>
                    {contact.name}: {contact.number}
                  </p>
                  <button
                    type="button"
                    onClick={() => this.handlerButtonDelete(contact.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
