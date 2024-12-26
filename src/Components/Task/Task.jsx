import React from 'react'

export default function Task( {label, important=false, className} ) {
  // console.log(label)
  const [checked, setChecked] = React.useState(true);
  const [a, setA] = React.useState(17)
  const [abc, setabc]= React.useState('')
  
  function che() {
    // alert('hohoho')
    setChecked(!checked)
    setA(a + 1)
    // console.log(this.props)
    checked ? setabc(' completedActive') : setabc(' ')
// "description "
    }  
    return (
    
            <div className="view">
        <input className="toggle" type="checkbox"  onChange={che} />
              <label>
                <span className={'description'+abc}>{ label }</span>
                <span className="created  description">created {a} seconds ago</span>
              </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
          
  )
}
