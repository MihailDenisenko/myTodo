import React from 'react'
import Footer from '../Footer'
import logo from './logo.jpg';

export default function Header () {
  return (
    <div>
    <header className="header">
      <img src={logo} width={"8%"} alt="" />
        <h1>Todo List</h1>
        <span className="todo-count">1 more todo, 3 done</span>
    </header>

    <Footer />
    
    </div>
  )
}
