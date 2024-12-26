import "./styles/style.scss";
import TaskList from "./Components/TaskList/TaskList ";
import Header from "./Components/Header/Header";

export default function App() {
  // const todoData = [
  //   { label: "Drink coffee", important: false, id: 1 },
  //   { label: "Make new App", important: true, id: 3 },
  //   { label: "Come lunch", important: false, id: 2 },
  //   { label: "Come go home", important: false, id: 4 },
  //   { label: "Come lalala", important: false, id: 5 },
  //   { label: "Come bababa", important: false, id: 6 },
  //   { label: "Come dadada", important: false, id: 7 },
  // ];
  return (
    <div>
      <Header />

      <TaskList />
    </div>

    //  <section className="todoapp">
    //   <header className=" ">
    //     <h1>todossss</h1>
    //     <input className="new-todo" placeholder="What needs to be done?" autoFocus />
    //   </header>
    //   <section className="main">
    //     <ul className="todo-list">
    //       <li className="completed">
    //         <div className="view">
    //           <input className="toggle" type="checkbox" />
    //           <label>
    //             <span className="description">Completed task</span>
    //             <span className="created">created 17 seconds ago</span>
    //           </label>
    //           <button className="icon icon-edit"></button>
    //           <button className="icon icon-destroy"></button>
    //         </div>
    //       </li>
    //       <li className="editing">
    //         <div className="view">
    //           <input className="toggle" type="checkbox" />
    //           <label>
    //             <span className="desription">Editing task</span>
    //             <span className="created">created 5 minutes ago</span>
    //           </label>
    //           <button className="icon icon-edit"></button>
    //           <button className="icon icon-destroy"></button>
    //         </div>
    //         <input type="text" className="edit" value="Editing task" />
    //       </li>
    //       <li>
    //         <div className="view">
    //           <input className="toggle" type="checkbox" />
    //           <label>
    //             <span className="description">Active task</span>
    //             <span className="created">created 5 minutes ago</span>
    //           </label>
    //           <button className="icon icon-edit"></button>
    //           <button className="icon icon-destroy"></button>
    //         </div>
    //       </li>
    //     </ul>
    //     <footer className="footer">
    //       <span className="todo-count">1 items left</span>
    //       <ul className="filters">
    //         <li>
    //           <button className="selected">All</button>
    //         </li>
    //         <li>
    //           <button>Active</button>
    //         </li>
    //         <li>
    //           <button>Completed</button>
    //         </li>
    //       </ul>
    //       <button className="clear-completed">Clear completed</button>
    //     </footer>
    //   </section>
    // </section>
  );
}
