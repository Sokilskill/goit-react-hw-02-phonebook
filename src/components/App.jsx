import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handlerInputName = e => {
    console.log('name', this.state.name);

    console.log('state.name', e.currentTarget.value);
    this.setState({
      name: e.currentTarget.value,
    });
  };

  handlerFormSubmit = e => {
    e.preventDefault();
    this.setState({
      contacts: [this.state.name, ...this.state.contacts],
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

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={nanoid()}>
              <p>{contact}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
