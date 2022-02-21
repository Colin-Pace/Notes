import "./Note.css";

function Note(props) {

  return (
 
    <div className = "note">

      <h2>{ props.noteInformation.title }</h2>

      <img 
      
        src = "/Delete.png" 
        
        alt = "image" 
        
        className = "deleteImage"
        
      />

    </div>

  )

}

export default Note;