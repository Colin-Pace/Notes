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

    </div>

  )

}

export default Note;