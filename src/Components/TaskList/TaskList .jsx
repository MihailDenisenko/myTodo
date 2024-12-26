import React from 'react'
import Task from '../Task/Task'

export default function TaskList( { toDos } ) {
    const [useItem, setUseItem] = React.useState('');

    const [items, setItems] = React.useState([]);

    // const classesTask = ["completed", "description", "editing"];
    // [{"name":"completed"},{"name":"description"},{"name":"editing"}]  

    React.useEffect(()=>{
        fetch('https://676d32bb0e299dd2ddfec4d5.mockapi.io/items/',
        //  {
            // method: "POST",
            // headers: { 'content-type': 'application/json' },
            // body: JSON.stringify({name: 'Hello World'})
        // }
    ).then(resp => {
                
       return resp.json()
        })
        .then((json) => {
            setItems(json)
            console.log(json)
        }).catch(er=> console.log(er))
    }, [])
    
    
    
        
    const elements = items.map((item, ind) => {
        
        // const classItem = `list-group-item ${item['name']}`
        // const classActive = `list-group-item active  ${item['name']}` //active
        

        //className={item === 'description' ? classActive : classItem}
        return (
            <li key={ind}  className={`list-group-item ${useItem}`}>
                {/* // <li className={`list-group-item ${item}`}> */}
                <Task label={item['name']}  />
            </li>
        )
    })
  return (
      <ul className="list-group todo-list">
          {elements}
      </ul>
  )
}
