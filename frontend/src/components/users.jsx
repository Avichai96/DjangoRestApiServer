import React from "react";
import FormUserDialog from "./usereDialog.jsx";
import classes from "../style/users.module.css";

import { deleteUser } from "../services/request/users.js";


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
} from "@material-ui/core";
// import CreateIcon from "@material-ui/icons/Create";
import AddIcon from "@material-ui/icons/Add";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useState } from "react";


function Users(props) {

  const [showUserDialog, setUserDialog] = useState(false);

  const deleteUserFromDB = async (dluser) => {
    await deleteUser(dluser);
    props.updateUserList()
  };

  return (
    <div className={classes.root}>
      <ListSubheader component="div" id="nested-list-subheader">
        User List
      </ListSubheader>
      <Button
        className={classes.addbut}
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => setUserDialog(true)}
      >
        Add User
      </Button>

      {props.userList &&
        props.userList.map((user, index) => {
          return (
            <List key={index} component="nav" aria-label="users list">
              <ListItem>
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.user_name} />

                {/* <IconButton color="primary" onClick={() => setUserDialog(true)}>
                  <CreateIcon />
                </IconButton> */}

                <IconButton color="secondary" onClick={()=> deleteUserFromDB(user.id)}>
                  <DeleteForeverIcon />
                </IconButton>

                <IconButton
                  color="inherit"
                  onClick={() => props.onSelectUser(user.id)}
                >
                  <ContactPhoneIcon />
                </IconButton>
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          );
        })}
      <FormUserDialog
        show={showUserDialog}
        updateUserList={props.updateUserList}
        closeDialog={() => setUserDialog(false)}
      />
    </div>
  );
}

export default Users;
