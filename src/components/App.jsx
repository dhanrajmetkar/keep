import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);
  function AddItems(newnote) {
    setNotes((prenote) => {
      return [...prenote, newnote];
    });
  }
  function deleteItem(id) {
    console.log("del called");

    setNotes((prenote) => {
      return prenote.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />

      <CreateArea onChecked={AddItems} />
      {notes.map((noteitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteitem.title}
            content={noteitem.content}
            ondel={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
