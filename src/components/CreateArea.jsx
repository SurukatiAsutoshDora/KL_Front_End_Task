import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "7px solid #FFB84C",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

function CreateArea(props) {
  const classes = useStyles();
  const [isModalOpen, setModalOpen] = useState(false);
 
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const saveNote = () => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setModalOpen(false);
  };

  return (
    <div>
      <form className="create-note">
        <TextField
          name="title"
          onChange={handleChange}
          value={note.title}
          label="Title"
          placeholder="Enter title"
        />
        <Fab onClick={openModal} disabled={!note.title}>
          <AddIcon />
        </Fab>
      </form>

      <Modal open={isModalOpen} onClose={closeModal}>
        <div className={classes.paper}>
          <h2>Type Description</h2>
          <TextField
            name="content"
            onChange={handleChange}
            value={note.content}
            label="Description"
            placeholder="Enter description"
            multiline
            rows={30}
            fullWidth
            style={{ height: "300px" }}
          />
          <Button variant="contained" color="warning" onClick={saveNote}>
            Save
          </Button>
          <Button variant="contained" color="warning" onClick={closeModal}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default CreateArea;
