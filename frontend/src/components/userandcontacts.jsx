import React, { useEffect, useState } from "react";
import Users from "./users.jsx";
import ContactsList from "./contactslist.jsx";
import classes from "../style/userAndContacts.module.css";
import { getAllUsers } from "../services/request/users";
import { getAllContacts } from "../services/request/contacts";

function UserAndContacts(props) {
  const [userList, setUserList] = useState([]); //users
  const [contactSelectedById, setContactSelectedById] = useState([]); //User which onclick event
  const [contactList, setContactList] = useState([]);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    //initalize user list
    fetchUsers();
    fetchContacts();
  }, []);

  const fetchUsers = async () => {
    const users = await getAllUsers();
    setUserList(users.data);
    console.log("user" + users.data);
  };

  const fetchContacts = async () => {
    const contacts = await getAllContacts();
    setContactList(contacts.data);
    console.log("contact" + contacts.data);
  };

  const onSelectUser = (id) => {
    const contactsById = contactList.filter((contact) => {
      return contact.user === id;
    });
    setContactSelectedById(contactsById);
    setShowContact(true);
  };

  return (
    <div hidden={!props.show}>
      <div className={classes.contactsWrapper}>
        <Users userList={userList} onSelectUser={onSelectUser} />
        {showContact && <ContactsList contactList={contactSelectedById} />}
      </div>
    </div>
  );
}

export default UserAndContacts;
