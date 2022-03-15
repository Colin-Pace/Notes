import "./Note.css";

function Note(props) {

  const handleDeleteNote = function(id) {

    let storedData = localStorage.getItem("notes");

    storedData = JSON.parse(storedData);

    let updatedData = storedData.filter(entry => {

      if (entry["id"] !== id) {

        return entry;

      }

    });

    localStorage.setItem("notes", JSON.stringify(updatedData));

    props.populateNotesList();

  };

  const handleEditNote = function(id) {

    let notes = localStorage.getItem("notes");

    notes = JSON.parse(notes);

    notes.forEach(note => {

      console.log(note);

      if (note["id"] === id) {

        props.passNoteToEdit(note);

      }

    });

  };

  return (
  
    <div className = "note">

      <h2
 
        className = "noteTitle"
      
        onClick = { () => props.handleNoteClick(props.noteIndex) }

      >{ props.noteInformation.title }</h2>

      <button

        className = "editNote"
      
        onClick = { () => handleEditNote(props.noteIndex) }
      
      >Edit</button>

      <button
      
        className = "deleteNote"

        onClick = { () => handleDeleteNote(props.noteIndex) }

      >Delete</button>

    </div>

  )

}

export default Note;