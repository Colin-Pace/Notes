function Display(props) {

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

    props.populateNotesList();

  };

  return (

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

  )
  
}

export default Display;