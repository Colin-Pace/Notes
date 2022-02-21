import { useState } from "react";

import CreateNote from "../CreateNote/CreateNote.js";

function Display(props) {

  const [createNote, setCreateNote] = useState(false);

  const handleCreateNote = function() {

    setCreateNote(true);

  }

  const noteCreated = function() {

    setCreateNote(false);

  }

  return (

    <div>

      <button onClick = { handleCreateNote }>Create Note</button>

      {

        createNote ? 

          <CreateNote 
          
            populateNotesList = {props.populateNotesList}

            noteCreated = {noteCreated}
          
          />

          :

          ""

      }

  </div>

  )
  
}

export default Display;