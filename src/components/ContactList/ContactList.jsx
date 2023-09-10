import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onButtonDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>

            <button type="button" onClick={() => onButtonDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onButtonDelete: PropTypes.func.isRequired,
};

export default ContactList;
