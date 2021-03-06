import "./DisplayNote.css";

function DisplayNote(props) {
 
  return (

    <div id = "noteDisplay">

      <h2 id = "noteTitle">{ props.selectedNote.title }</h2>

      <p id = "textContent">{ props.selectedNote.content }</p>

    </div>
 
  )

}

export default DisplayNote;