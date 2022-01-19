import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { ContactItem } from './Contact.styled';

function Contact({ id, name, number, onDeleteContact }) {
  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      <Button
        label="Delete"
        type="submit"
        onClick={() => onDeleteContact(id)}
      />
    </ContactItem>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
