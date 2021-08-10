import React from "react";
import classes from "../style/users.module.css";

import {
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@material-ui/core";

function Users(props) {
  return (
    <div className={classes.root}>
      {props.userList &&
        props.userList.map((user, index) => {
          return (
            <List key={index} component="nav" aria-label="users list">
              <ListItem button onClick={() => props.onSelectUser(user.id)}>
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.user_name} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          );
        })}
    </div>
  );
}

export default Users;
