import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleDoubleClick() {
    console.log("Double Clicked");
    props.onDelete(props.id);
  }

  return (
    <div className="note" onDoubleClick={handleDoubleClick}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDoubleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
