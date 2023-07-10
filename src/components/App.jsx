import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contact')) ?? '';
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = ({ name, number }) => {
   
    const isExistingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExistingContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
  };

  const handleClick = id => {
    setContacts(prevState => prevState.filter(contacts => contacts.id !== id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div
      style={{
        width: '460px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '24px',
        padding: '24px',
        boxShadow: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
        1px 4px 6px rgba(0, 0, 0, 0.16)`,
        backgroundColor: '#eee',
        borderRadius: '15px',
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onFormSubmit} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onClick={handleClick} />
    </div>
  );
};

export default App;
