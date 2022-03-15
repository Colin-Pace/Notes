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

          <input 
          
            id = "titleInput" 
            
            type="text" 
            
            name="title"

            placeholder = "Title"
            
          /> 
      
        </div>
      
        <div>

          <textarea 
          
            id = "noteInput" 
            
            name = "note"
          
            placeholder = "Content">
          
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