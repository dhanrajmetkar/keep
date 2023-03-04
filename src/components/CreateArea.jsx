import React from "react";
import Note from "./Note";

function CreateArea(props) {
  const [inputText, setText] = React.useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setText((preValue) => {
      return { ...preValue, [name]: value };
    });
  }
  function handeClick(event) {
    event.preventDefault();

    props.onChecked(inputText);
    setText({ title: " ", content: "" });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          //onChange={props.onChecked}
          name="title"
          placeholder="Title"
          value={inputText.titel}
        />
        <textarea
          onChange={handleChange}
          // onChange={props.onChecked}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText.content}
        />
        <button onClick={handeClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
