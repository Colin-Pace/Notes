import "./Note.css";

function Note(props) {

  const handleDeleteNote = function(index) {

    console.log("Test delete click", index);

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