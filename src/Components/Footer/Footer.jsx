import React from 'react'
import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskFilter from '../TaskFilter/TaskFilter';

export default function Footer() {
      // const [elemActive, setElementActive] = React.useState(0);
    


    
  return (
      <div>
        <footer className="footer">
          <NewTaskForm />
          <ul className="filters">
                <TaskFilter />
          </ul>
      </footer>
    </div>
  )
}
