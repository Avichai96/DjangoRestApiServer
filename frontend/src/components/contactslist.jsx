import React from "react";
import classes from "../style/contactslist.module.css";
import {
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@material-ui/core";

function ContactsList(props) {
  return (
    <div className={classes.root}>
      {props.contactList &&
        props.contactList.map((contact, index) => {
          return (
            <List key={index} component="nav" aria-label="users list">
              <ListItem button >
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText primary={contact.contact_name} />
                <ListItemText primary={contact.contact_phone_number} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          );
        })}
    </div>
  );
}

export default ContactsList;
