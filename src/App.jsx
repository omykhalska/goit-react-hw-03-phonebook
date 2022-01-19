import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import PhonebookForm from './components/PhonebookForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import { Container, MainTitle, Title, Message } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));

    savedContacts && this.setState({ contacts: savedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    contacts.some(contact => contact.name === name)
      ? toast.error(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  deleteContact = contactId => {
    const { contacts } = this.state;

    this.setState({
      contacts: contacts.filter(contact => contact.id !== contactId),
    });

    toast.success('Selected contact deleted');
  };

  changeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { addContact, changeFilter, deleteContact } = this;
    const { filter, contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <div>
          <Toaster />
        </div>
        <MainTitle>Phonebook</MainTitle>
        <PhonebookForm onSubmit={addContact} />
        {contacts.length === 0 ? (
          <Message>Your phone book is empty, enter your first contact!</Message>
        ) : (
          <>
            <Title>Contacts</Title>
            <Filter value={filter} onChange={changeFilter} />
            <ContactsList
              contacts={filteredContacts}
              onDeleteContact={deleteContact}
            />
          </>
        )}
      </Container>
    );
  }
}

export default App;
