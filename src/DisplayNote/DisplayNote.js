function DisplayNote(props) {

  return (

    <div>

      <h2>{ props.noteForDisplay.title }</h2>

      <p>{ props.noteForDisplay.content }</p>

    </div>

  )

}

export default DisplayNote;