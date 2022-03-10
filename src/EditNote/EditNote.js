import "./EditNote.css";

function EditNote(props) {

  const handleEditNoteFormSubmission = function(e) {

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

    let updatedData = storedData.map((entry, entryIndex) => {

      if (props.indexOfSelectedNote === entryIndex) {

        newEntry["id"] = entry["id"];

        return newEntry;

      } else {

        return entry;

      }

    });

    localStorage.setItem("notes", JSON.stringify(updatedData));

    props.populateNotesList();

  };

  return (

    <div id = "main">

      <form 
      
        onSubmit = { handleEditNoteFormSubmission }
      
        id = "editNoteForm"
      
      >
      
        <div>
      
          <input 

            id = "titleInput"
          
            type = "text" 
            
            name = "title" 
            
            defaultValue = { props.selectedNote.title }
            
          />
      
        </div>
      
        <div>
      
          <textarea 
          
            id = "noteInput" 
            
            name = "note"
          
            defaultValue = { props.selectedNote.content }>
          
          </textarea>
      
        </div>
      
        <div>
      
          <input 
          
            type = "submit" 
            
            value = "Submit" 
            
            id = "submitEdit"
            
          /> 
       
        </div>
      
      </form>

    </div>

  )

}

export default EditNote;