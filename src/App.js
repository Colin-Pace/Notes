import { useState, useEffect } from "react";

import Display from "./Display/Display.js";

import List from "./List/List.js";

import './App.css';

function App() {

  const [notes, setNotes] = useState([]);

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

      <List 

        notes = { notes }
      
      />

      <Display 
      
        populateNotesList = {populateNotesList}

      />
      
    </div>
  
  );
}

export default App;