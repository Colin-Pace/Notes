import './App.css';

import { useState, useEffect } from "react";

function App() {

  const [notes, setNotes] = useState([]);

  const handleFormSubmission = function(e) {

    e.preventDefault();

    const title = e.target.title.value;

    const note = e.target.note.value;

    e.target.title.value = "";

    e.target.note.value = "";

    const newEntry = {
      
      "title": title,

      "content": note

    };

    let storedData = localStorage.getItem("notes");

    storedData = JSON.parse(storedData);

    storedData.push(newEntry);

    localStorage.setItem("notes", JSON.stringify(storedData));

    populateNotesList();

  };

  const populateNotesList = function() {

    let storedData = localStorage.getItem("notes");

    storedData = JSON.parse(storedData);

    setNotes(storedData);

  };

  useEffect(() => {
   
    populateNotesList();

  }, []);

  return ( 
  
    <div id = "app">
      
      <section id = "notesList">

        <h2>Notes list</h2>

        { 
        
          notes.map(note => {

            return <div>

                     <h2>{ note["title"] }</h2>

                     <p>{ note["content"] }</p>

                   </div>

          })
        
        }

      </section>

      <main id = "main">

        <h2>Main</h2>

        <form onSubmit = { handleFormSubmission }>
        
          <div>
        
            <label for="name">Title: </label>
        
            <input type="text" name="title" />
        
          </div>
        
          <div>
        
            <label for="email">Note: </label>
        
            <textarea 
            
              id = "note" 
              
              name = "note"
                              
              rows = "15" 
              
              cols = "33">
            
              It was a dark and stormy night...
            
            </textarea>
        
          </div>
        
          <div>
        
            <input type="submit" value="Submit" />
        
          </div>
        
        </form>

      </main>

    </div>
  
  );
}

export default App;