import "./List.css";

import Note from "../Note/Note.js";

function List(props) {

  const handleNoteClick = function(index) {

    let note = localStorage.getItem("notes");

    note = JSON.parse(note);

    note = note[index];

    props.passNoteToDisplay(note);

  };
  
  return (

    <section id = "notesList">

        <h2 id = "title">Notes list</h2>

        { 
        
          props.notes.map((note, index) => {

            return <div 
            
                     id = { index }>

                     <Note 

                       populateNotesList = { props.populateNotesList }

                       handleNoteClick = { handleNoteClick }

                       noteInformation = { note }

                       noteIndex = { index }

                       passNoteToEdit = { props.passNoteToEdit }
                     
                     />

                   </div>

          })
        
        }

      </section>

  )

}

export default List;