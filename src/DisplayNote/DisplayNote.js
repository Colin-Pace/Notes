function DisplayNote(props) {

  return (

    <div>

      <h2>{ props.selectedNote.title }</h2>

      <p>{ props.selectedNote.content }</p>

    </div>

  )

}

export default DisplayNote;