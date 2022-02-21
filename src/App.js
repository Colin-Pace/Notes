import { useState, useEffect } from "react";

import Display from "./Display/Display.js";

import List from "./List/List.js";

import './App.css';

function App() {

  const [notes, setNotes] = useState([]);

  const [noteForDisplay, setNoteForDisplay] = useState({});

  const [booleanNoteForDisplay, setBooleanNoteForDisplay] = useState(false);

  const populateNotesList = function() {

    let storedData = localStorage.getItem("notes");
    
    storedData = JSON.parse(storedData);

    setNotes(storedData);

  };

  const passNoteToDisplay = function(note) {

    setNoteForDisplay(note);

    setBooleanNoteForDisplay(true);

  };

  const turnOffNoteForDisplay = function() {

    setBooleanNoteForDisplay(false);

  }

  useEffect(() => {

    localStorage.setItem("notes", JSON.stringify([]));
   
    populateNotesList();

  }, []);

  return ( 
  
    <div id = "app">

      <List 

        notes = { notes }

        passNoteToDisplay = { passNoteToDisplay }

        populateNotesList = { populateNotesList }
      
      />

      <Display 
      
        populateNotesList = { populateNotesList }

        noteForDisplay = { noteForDisplay }

        booleanNoteForDisplay = { booleanNoteForDisplay }

        turnOffNoteForDisplay = { turnOffNoteForDisplay }

      />
      
    </div>
  
  );
}

export default App;