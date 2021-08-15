import React, { useEffect, useState } from "react";
import Users from "./users.jsx";
import ContactsList from "./contactslist.jsx";
import classes from "../style/userAndContacts.module.css";
import { getAllUsers } from "../services/request/users";
import { getAllContacts } from "../services/request/contacts";

function UserAndContacts(props) {
  const [userList, setUserList] = useState([]); //users
  const [selectedUser,setSelectedUser] =useState(null)
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
  };

  // const updateUserList = async (user) => {
  //   let users = [...userList]
  //   users.push(user)
  //   setUserList(users)
  // }

  const fetchContacts = async () => {
    const contacts = await getAllContacts();
    setContactList(contacts.data);
  };


  const onSelectUser = (id) => {
    setSelectedUser(id)
    setShowContact(true);
  };

  return (
    <div hidden={!props.show}>
      <div className={classes.contactsWrapper}>
        <Users userList={userList} onSelectUser={onSelectUser} fetchUsers={fetchUsers} updateUserList={fetchUsers}/>
        {showContact && <ContactsList selectedUser={selectedUser} contactList={
          contactList.filter((contact) => {
            return contact.user === selectedUser;
          })}
     updateContactList={fetchContacts}/>}
      </div>
    </div>
  );
}

export default UserAndContacts;
