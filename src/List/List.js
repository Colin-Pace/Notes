import "./List.css";

import Note from "../Note/Note.js";

function List(props) {

  const handleNoteClick = function() {

    console.log("Test note click");

  }
  
  return (

    <section id = "notesList">

        <h2 id = "title">Notes list</h2>

        { 
        
          props.notes.map((note, index) => {

            return <div 
            
                     onClick = { handleNoteClick }         

                     id = { index }>

                     <Note 

                       noteInformation = {note}

                       noteIndex = {index}
                     
                     />

                   </div>

          })
        
        }

      </section>

  )

}

export default List;