import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import SaveIcon from "@material-ui/icons/Save";
import { useState } from "react";

import { addUser } from "../services/request/users.js";

function FormUserDialog(props) {
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");

  const handleClose = () => {
    setUserName("")
    setUserLastName("")
    props.closeDialog();
  };
  const addUserToDB = async () => {
    let user = {
      user_name: userName ,
      user_last_name:  userLastName ,
    };
    await addUser(user);
    props.updateUserList();
    handleClose()
  };

  return (
    <div>
      <Dialog
        open={props.show}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="User Name"
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="User Last Name"
            fullWidth
            value={userLastName}
            onChange={(e) => setUserLastName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<SaveIcon />}
            onClick={addUserToDB}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormUserDialog;
