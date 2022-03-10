import "./CreateNote.css";

function CreateNote(props) {

  const handleCreateNoteFormSubmission = function(e) {

    e.preventDefault(); 

    const title = e.target.title.value;

    const note = e.target.note.value;

    e.target.title.value = "";

    e.target.note.value = "";

    const newEntry = {

      "id": props.id,
      
      "title": title,

      "content": note

    };

    props.incrementID();

    let storedData = localStorage.getItem("notes");

    storedData = JSON.parse(storedData);

    storedData.push(newEntry);

    localStorage.setItem("notes", JSON.stringify(storedData));

    props.populateNotesList();

    props.noteCreated();

  };

  return (

    <main id = "main">

      <form  
      
        onSubmit = { handleCreateNoteFormSubmission }

        id = "createNoteForm">
      
        <div>
       
          <label>Title:</label>

          <input 
          
            id = "titleInput" 
            
            type="text" 
            
            name="title"

            defaultValue = ""
            
          /> 
      
        </div>
      
        <div>
      
          <label>Content:</label>

          <textarea 
          
            id = "noteInput" 
            
            name = "note"
          
            defaultValue = "">
          
          </textarea>
      
        </div>
      
        <div>
      
          <input 
          
            type = "submit" 
            
            value = "Submit" 
            
            id = "submitNote"
            
          />

        </div>
      
      </form>

    </main>

  )

}

export default CreateNote;