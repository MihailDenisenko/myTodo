import React from 'react'

export default function TaskFilter({ val, typeId, onClickk }) {

  const [elemActive, setElementActive] = React.useState(0);
  
  
  const btnsFotter = ['All', 'Active', 'Done'];
  const buttons = btnsFotter.map((btn, ind) => {
          return (
            <li key={ind}>
              <button onClick={() => setElementActive(ind)} id={ind} className={elemActive === ind ? 'selected' : ''}>{btn}</button>
              </li>
          )
        })
        

  return (
    <>
      {buttons}
      {/* <button onClick={() => setElementActive(ind)} id={ind} className={elemActive === ind ? 'selected' : ''}>{btn}</button> */}
      {/*  className={val==='All'?'selected':''*/}
    </>
)
}
