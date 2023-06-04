import React, { useEffect, useState } from "react"
import contactsData from './contact.json'

 const ContactApp = () => {
    const [contacts, setContacts] = useState([])
    const [search, setSearch] = useState('');
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null)

    useEffect(() => {
        setContacts(contactsData);
      }, []);
    
      useEffect(() => {
        const filtered = contacts.filter((contact) =>
          contact.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredContacts(filtered);
      }, [search, contacts]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  }

  const handleClosePopup = () => {
    setSelectedContact(null);
  }


    return (
         <div>
            <center>
            <h1><b>CONTACTS MOBILE APP</b></h1>
            </center>
             <input
                 type="text"
                 placeholder="Search Contacts..."
                 value={search}
                 onChange={handleSearch}
             />
             <ul>    
                {filteredContacts.map(contact=>(
                    <li key={contact.id} onClick={() => handleContactClick(contact)}> 
                        <p>Name: {contact.name}</p>
                        <p>Phone: {contact.phone}</p>
                    </li>
                ))}
            </ul>   
            {selectedContact && (
        <div className="popup">
          <div className="popup-content">
            <h2>Contact Details</h2>
            <p>Name: {selectedContact.name}</p>
            <p>Number: {selectedContact.number}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
        </div>
    )
}

 export default ContactApp;