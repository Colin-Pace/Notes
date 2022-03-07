import "./List.css";

import Note from "../Note/Note.js";

function List(props) {

  const handleNoteClick = function(index) {

    let note = localStorage.getItem("notes");

    note = JSON.parse(note);

    note = note[index];

    props.passNoteToDisplay(note);

  };

  const handleSortNotes = function(e) {

    e.preventDefault();

    const sort = e.target.sort.value;
    
    props.defineNotesSort(sort);

  };
  
  return ( 

    <section id = "notesList">

        <h2 id = "title">Notes organizer</h2>

        <form
      
          onSubmit = { handleSortNotes }>

          <label for = "sort">Sort:</label>

          <select name = "sort" id = "sortingMenu">
            
            <option value = "newest">Newest</option>
            
            <option value = "oldest">Oldest</option>
          
          </select>

          <input type = "submit" value = "Submit"></input>

        </form>

        {

          props.notesSort === "newest" ? 
        
            props.notes

              .sort(function(a, b) {
                
                return a.id - b.id
              
              })
            
              .map((note, index) => {

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

          :

            props.notes

              .sort(function(a, b) {
              
                  return b.id - a.id
                
              })
              
              .map((note, index) => {

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