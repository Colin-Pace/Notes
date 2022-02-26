import { useState, useEffect } from "react";

import Display from "./Display/Display.js";

import List from "./List/List.js";

import './App.css';

function App() {

  const [notes, setNotes] = useState([]);

  // empty, edit, display, create
  const [displayState, setDisplayState] = useState("empty");

  const [selectedNote, setSelectedNote] = useState({});

  const [indexOfSelectedNote, setIndexOfSelectedNote] = useState(undefined);

  const populateNotesList = function() {

    let storedData = localStorage.getItem("notes");
    
    storedData = JSON.parse(storedData);

    setNotes(storedData);

    setDisplayState("empty");

  };

  const noteCreation = function() {

    setDisplayState("create");

  }

  const passNoteToDisplay = function(note) {

    setSelectedNote(note);

    setDisplayState("display");

  };

  const passNoteToEdit = function(note, index) {

    setSelectedNote(note);

    setDisplayState("edit");

    setIndexOfSelectedNote(index);

  }

  const turnOffNoteForDisplay = function() {

    setDisplayState("empty");

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

        selectedNote = { selectedNote }

        indexOfSelectedNote = { indexOfSelectedNote }

        turnOffNoteForDisplay = { turnOffNoteForDisplay }

        noteCreation = { noteCreation }

        displayState = { displayState }

      />
      
    </div>
  
  );
}

export default App;