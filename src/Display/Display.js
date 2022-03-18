import "./Display.css";

import CreateNote from "../CreateNote/CreateNote.js";

import DisplayNote from "../DisplayNote/DisplayNote.js";

import EditNote from "../EditNote/EditNote.js";

function Display(props) {

  const handleCreateNote = function() {

    props.noteCreation();

  };

  const noteCreated = function() {

    props.turnOffNoteForDisplay();

  };

  return (

    <div id = "displayArea">

      <button 
      
        id = "createNote" 
        
        onClick = { handleCreateNote }>
          
          Create Note
          
      </button>
 
      { 

          props.displayState === "create" ? 

          <CreateNote 
          
            populateNotesList = { props.populateNotesList }

            noteCreated = { noteCreated }

            id = { props.id }
          
          />

          :

          props.displayState === "display" ? 

            <DisplayNote 

              selectedNote = { props.selectedNote }

            />

            :

            props.displayState === "edit" ?

            <EditNote

            selectedNote = { props.selectedNote }

              idOfSelectedNote = { props.idOfSelectedNote }

              populateNotesList = { props.populateNotesList }

            />

            :

            ""

      }

  </div>

  )
  
}

export default Display;