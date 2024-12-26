import React from 'react'

export default function NewTaskForm() {

  const keyDown = (evnt) => {
    if (evnt.key === 'Enter') {
      let  val = evnt.target.value
      console.log(val)
      fetch("https://676d32bb0e299dd2ddfec4d5.mockapi.io/items", {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
         body: JSON.stringify({name:`${val}`})
      })
        .then((resp) => resp.json())
        .then(json => {
          console.log(json)
        }).catch(er => alert(er.name))
      
        evnt.target.value = ''
    }
  }
  return (

      <div>
      <input onKeyDown={keyDown}  className="new-todo" placeholder="Task to search" autoFocus />
      </div>
  )
}
