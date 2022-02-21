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

      if (props.indexOfNoteForEdit === entryIndex) {

        return newEntry;

      }

    });

    localStorage.setItem("notes", JSON.stringify(updatedData));

    props.populateNotesList();

  };

  return (

    <div>

      <h2>Edit note</h2>

      <form onSubmit = { handleEditNoteFormSubmission }>
      
        <div>
      
          <label for="name">Title: </label>
      
          <input type="text" name="title" defaultValue = { props.noteForEdit.title }/>
      
        </div>
      
        <div>
      
          <label for="email">Note: </label>
      
          <textarea 
          
            id = "note" 
            
            name = "note"
                            
            rows = "15" 
            
            cols = "33"
          
            defaultValue = { props.noteForEdit.content }>
          
          </textarea>
      
        </div>
      
        <div>
      
          <input type="submit" value="Submit" />
      
        </div>
      
      </form>

    </div>

  )

}

export default EditNote;