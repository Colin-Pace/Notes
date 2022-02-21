import { useState, useEffect } from "react";

import Display from "./Display/Display.js";

import List from "./List/List.js";

import './App.css';

function App() {

  const [notes, setNotes] = useState([]);

  const [noteForDisplay, setNoteForDisplay] = useState({});

  const [booleanNoteForDisplay, setBooleanNoteForDisplay] = useState(false);

  const [noteForEdit, setNoteForEdit] = useState({});

  const [indexOfNoteForEdit, setIndexOfNoteForEdit] = useState(undefined);

  const [booleanNoteForEdit, setBooleanNoteForEdit] = useState(false);

  const populateNotesList = function() {

    let storedData = localStorage.getItem("notes");
    
    storedData = JSON.parse(storedData);

    setNotes(storedData);

    setBooleanNoteForDisplay(false);

    setBooleanNoteForEdit(false);

  };

  const passNoteToDisplay = function(note) {

    setNoteForDisplay(note);

    setBooleanNoteForDisplay(true);

  };

  const passNoteToEdit = function(note, index) {

    setNoteForEdit(note);

    setBooleanNoteForEdit(true);

    setIndexOfNoteForEdit(index);

  }

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

        passNoteToEdit = { passNoteToEdit }

        populateNotesList = { populateNotesList }
      
      />

      <Display 
      
        populateNotesList = { populateNotesList }

        booleanNoteForDisplay = { booleanNoteForDisplay }

        noteForDisplay = { noteForDisplay }

        turnOffNoteForDisplay = { turnOffNoteForDisplay }

        booleanNoteForEdit = { booleanNoteForEdit }

        noteForEdit = { noteForEdit }

        indexOfNoteForEdit = { indexOfNoteForEdit }

      />
      
    </div>
  
  );
}

export default App;