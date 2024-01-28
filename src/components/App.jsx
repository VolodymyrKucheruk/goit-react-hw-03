import css from "./App.module.css";
import "modern-normalize";
import { FcContacts } from "react-icons/fc";
import { useState, useEffect } from "react";
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactForm } from "./ContactForm/ContactForm";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem("saved-contacts"));
    return savedContacts ? savedContacts.contacts : initialContacts;
  });

  const [filter, setFilter] = useState("");

  function addContact(newContact) {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  }

  function deleteContact(contactId) {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify({ contacts }));
  }, [contacts]);

  return (
    <>
      <div className={css.deviceHeader}>
        <div className={css.deviceSensors}></div>
      </div>

      <h1 className={css.title}>
        Phonebook
        <FcContacts className={css.bookitem} />
      </h1>
      <ContactForm value={filteredContacts} onAdd={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList
        value={filteredContacts}
        onDelete={deleteContact}
        onAdd={addContact}
      />
    </>
  );
};
