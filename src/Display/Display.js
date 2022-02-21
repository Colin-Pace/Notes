import { useState } from "react";

import CreateNote from "../CreateNote/CreateNote.js";

import DisplayNote from "../DisplayNote/DisplayNote.js";

import EditNote from "../EditNote/EditNote.js";

function Display(props) {

  // const [noteForDisplay, setNoteForDisplay] = useState(false);

  const handleCreateNote = function() {

    props.noteCreation();

  };

  const noteCreated = function() {

    props.turnOffNoteForDisplay();

  };

  return (

    <div>

      <button onClick = { handleCreateNote }>Create Note</button>

      {

          props.displayState === "create" ? 

          <CreateNote 
          
            populateNotesList = { props.populateNotesList }

            noteCreated = { noteCreated }
          
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

              indexOfSelectedNote = { props.indexOfSelectedNote }

              populateNotesList = { props.populateNotesList }

            />

            :

            ""

      }

  </div>

  )
  
}

export default Display;