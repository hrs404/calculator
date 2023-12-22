import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddContacts from './AddContacts';
import ContactList from './ContactList';import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module 
import ContactCard from './ContactCard';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contacts]);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setContacts(retriveContacts);  
  },[]);

  useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);


  return (
    <div className='ui container'>
    <Header />
    <AddContacts addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
