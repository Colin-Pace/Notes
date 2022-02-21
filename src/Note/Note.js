import "./Note.css";

function Note(props) {

  const handleDeleteNote = function(index) {

    let storedData = localStorage.getItem("notes");

    storedData = JSON.parse(storedData);

    let updatedData = storedData.filter((entry, entryIndex) => {

      if (index !== entryIndex) {

        return entry;

      }

    });

    localStorage.setItem("notes", JSON.stringify(updatedData));

    props.populateNotesList();

  };

  const handleEditNote = function(index) {

    let note = localStorage.getItem("notes");

    note = JSON.parse(note);

    note = note[index];

    props.passNoteToEdit(note, index);

  };

  return (
 
    <div className = "note">

      <h2
      
        onClick = { () => props.handleNoteClick(props.noteIndex) }

      >{ props.noteInformation.title }</h2>

      <img 
      
        src = "/Delete.png" 
        
        alt = "image" 
        
        className = "deleteImage"

        onClick = { () => handleDeleteNote(props.noteIndex) }
        
      />

      <button
      
        onClick = { () => handleEditNote(props.noteIndex) }
      
      >Edit</button>

    </div>

  )

}

export default Note;