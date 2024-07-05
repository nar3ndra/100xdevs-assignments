import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList.jsx'
import { display  } from './components/data.jsx'

function App() {

  return (
    <>
    <div className='App'>
        <TodoList/>
    </div>
    </>
  )
}

export default App
