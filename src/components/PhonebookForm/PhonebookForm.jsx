import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { FormWrapper, Label, Input } from './PhonebookForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class PhonebookForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { handleSubmit, handleInputChange } = this;
    const { number, name } = this.state;

    return (
      <form autoComplete="off" onSubmit={handleSubmit}>
        <FormWrapper>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Phone number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleInputChange}
            />
          </Label>
          <Button label="Add contact" type="submit" />
        </FormWrapper>
      </form>
    );
  }
}

export default PhonebookForm;
