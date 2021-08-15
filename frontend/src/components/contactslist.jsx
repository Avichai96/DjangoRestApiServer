import React from "react";
import FormContactDialog from "./contactDialog.jsx";
import { deleteContact } from "../services/request/contacts.js";

import classes from "../style/contactslist.module.css";
import {
  Button,
  List,
  ListSubheader,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
  IconButton,
  Grid,
} from "@material-ui/core";
// import CreateIcon from "@material-ui/icons/Create";
import AddIcon from "@material-ui/icons/Add";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PhoneIcon from "@material-ui/icons/Phone";
import { useState } from "react";

function ContactsList(props) {
  const [showContactDialog, setContactDialog] = useState(false);

  const deleteContactFromDB = async (dlcontact) => {
    await deleteContact(dlcontact);
    props.updateContactList();
  };

  return (
    <div className={classes.root}>
      <ListSubheader component="div" id="nested-list-subheader">
        Contacts List
      </ListSubheader>
      <Button
        className={classes.addbut}
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => setContactDialog(true)}
      >
        Add Contact
      </Button>
      {props.contactList &&
        props.contactList.map((contact, index) => {
          return (
            <List key={index} component="nav" aria-label="users list">
              <ListItem>
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText primary={contact.contact_name} />
                <Grid item xs={1}>
                  <PhoneIcon />
                </Grid>
                <ListItemText primary={contact.contact_phone_number} />
                {/* <IconButton color="primary" onClick={() => setContactDialog(true)}>
                  <CreateIcon />
                </IconButton> */}

                <IconButton color="secondary" onClick={()=>deleteContactFromDB(contact.id)}>
                  <DeleteForeverIcon />
                </IconButton>
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          );
        })}
      <FormContactDialog
      userId={props.selectedUser}
        show={showContactDialog}
        updateContactList={props.updateContactList}
        closeDialog={() => setContactDialog(false)}
      />
    </div>
  );
}

export default ContactsList;
