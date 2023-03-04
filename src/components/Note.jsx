import React from "react";

function Note(props) {
  console.log("note");

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.ondel(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
