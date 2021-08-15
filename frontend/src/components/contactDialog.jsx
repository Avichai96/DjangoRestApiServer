import React from "react";
import { useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import SaveIcon from "@material-ui/icons/Save";

import { addContact } from "../services/request/contacts.js";

function FormContactDialog(props) {
  const [contactName, setContactName] = useState("");
  const [contactPhoneNumber, setContactPhoneNumber] = useState("");

  const handleClose = () => {
    setContactName("")
    setContactPhoneNumber("")
    props.closeDialog();
  };
  const addContactToDB = async () => {
    let contact = {
      user: props.userId,
      contact_name: contactName ,
      contact_phone_number:  contactPhoneNumber ,
    };
    await addContact(contact);
    props.updateContactList();
    handleClose()
  };

  return (
    <div>
      <Dialog
        open={props.show}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Contact</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Contact Name"
            fullWidth
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Contact Phone Number"
            type="number"
            fullWidth
            value={contactPhoneNumber}
            onChange={(e) => setContactPhoneNumber(e.target.value)}
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
            onClick={addContactToDB}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormContactDialog;
