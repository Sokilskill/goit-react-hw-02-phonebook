import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handlerInputName = e => {
    console.log('state.name', e.currentTarget.value);
    this.setState({
      name: e.currentTarget.value,
    });
  };

  handlerInputNumber = e => {
    console.log('number', e.currentTarget.value);

    this.setState({
      number: e.currentTarget.value,
    });
  };

  handlerFormSubmit = e => {
    e.preventDefault();
    this.setState({
      contacts: [
        {
          name: this.state.name,
          number: this.state.number,
        },
        ...this.state.contacts,
      ],
    });

    e.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>

        <form action="" onSubmit={this.handlerFormSubmit}>
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
        <ul>
          {this.state.contacts.map(contact => {
            return (
              <li key={nanoid()}>
                <p>
                  {contact.name}: {contact.number}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
