import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact';
import { ContactList } from './ContactsList.styled';

function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ContactList>
      {contacts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, number }) => (
          <Contact
            key={id}
            name={name}
            number={number}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        ))}
    </ContactList>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
