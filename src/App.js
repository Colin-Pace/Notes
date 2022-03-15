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

  const [id, setID] = useState(0);

  const [notesSort, setNotesSort] = useState("oldest");

  const populateNotesList = function() {

    let storedData = localStorage.getItem("notes");

    if (storedData.length === 0) {

      localStorage.setItem("notes", JSON.stringify([]));

    } else {

      storedData = JSON.parse(storedData);

      let largest = 0;

      storedData.forEach((entry) => {

        if (entry["id"] > largest) {

          largest = entry["id"];

        }

      });

      setID(largest + 1);

    }

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

  const defineNotesSort = function(sort) {

    setNotesSort(sort);

  }

  useEffect(() => {
   
    populateNotesList();

  }, []);

  return ( 
  
    <div id = "app">

      <List 
 
        notes = { notes }

        passNoteToDisplay = { passNoteToDisplay }

        passNoteToEdit = { passNoteToEdit }

        populateNotesList = { populateNotesList }

        notesSort = { notesSort }

        defineNotesSort = { defineNotesSort }/>

      <Display 
      
        populateNotesList = { populateNotesList }

        selectedNote = { selectedNote }

        indexOfSelectedNote = { indexOfSelectedNote }

        turnOffNoteForDisplay = { turnOffNoteForDisplay }

        noteCreation = { noteCreation }

        displayState = { displayState }

        //incrementID = { incrementID }

        id = { id }/>
      
    </div>
  
  );
}

export default App;