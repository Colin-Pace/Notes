import { useState } from "react";

import CreateNote from "../CreateNote/CreateNote.js";

import DisplayNote from "../DisplayNote/DisplayNote.js";

import EditNote from "../EditNote/EditNote.js";

function Display(props) {

  const [createNote, setCreateNote] = useState(false);

  const [noteForDisplay, setNoteForDisplay] = useState(false);

  const handleCreateNote = function() {

    setCreateNote(true);

  };

  const noteCreated = function() {

    setCreateNote(false);

    props.turnOffNoteForDisplay();

  };

  return (

    <div>

      <button onClick = { handleCreateNote }>Create Note</button>

      {

        createNote ? 

          <CreateNote 
          
            populateNotesList = { props.populateNotesList }

            noteCreated = { noteCreated }
          
          />

          :

          props.booleanNoteForDisplay ? 

            <DisplayNote 

              noteForDisplay = { props.noteForDisplay }

            />

            :

            props.booleanNoteForEdit ?

            <EditNote

              noteForEdit = { props.noteForEdit }

              indexOfNoteForEdit = { props.indexOfNoteForEdit }

              populateNotesList = { props.populateNotesList }

            />

            :

            ""

      }

  </div>

  )
  
}

export default Display;