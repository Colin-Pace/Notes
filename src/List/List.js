function List(props) {
  
  return (

    <section id = "notesList">

        <h2>Notes list</h2>

        { 
        
          props.notes.map(note => {

            return <div>

                     <h2>{ note["title"] }</h2>

                     <p>{ note["content"] }</p>

                   </div>

          })
        
        }

      </section>

  )

}

export default List;