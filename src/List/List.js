import "./List.css";

function List(props) {
  
  return (

    <section id = "notesList">

        <h2 id = "title">Notes list</h2>

        { 
        
          props.notes.map((note, index) => {

            return <div id = { index }>

                     <h2>{ note["title"] }</h2>

                   </div>

          })
        
        }

      </section>

  )

}

export default List;