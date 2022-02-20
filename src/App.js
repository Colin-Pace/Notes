import './App.css';

import { useState } from "react";

function App() {

  const [cards, setCards] = useState([]);

  const handleFormSubmission = function(e) {

    e.preventDefault();

    const title = e.target.title.value;

    const story = e.target.story.value;

    e.target.title.value = "";

    e.target.story.value = "";

    const card = <div>

                   <h2>{ title }</h2>

                 </div>

    setCards(cards => [...cards, card]);

  }

  return ( 
  
    <div id = "app">
      
      <section id = "notesList">

        <h2>Notes list</h2>

        { cards }

      </section>

      <main id = "main">

        <h2>Main</h2>

        <form onSubmit = {handleFormSubmission}>
        
          <div>
        
            <label for="name">Title: </label>
        
            <input type="text" name="title" />
        
          </div>
        
          <div>
        
            <label for="email">Story: </label>
        
            <textarea 
            
              id = "story" 
              
              name = "story"
                              
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