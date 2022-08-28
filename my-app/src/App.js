import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList.jsx';
import NewTodo from './components/NewTodo.jsx';

function App() {

  const [myTodos, setMyTodos] = useState(
    [
      {
        title: 'Städa',
        description: 'Städa hallen och badrummet',
        done: false
      },
      {
        title: 'Diska',
        description: 'Lorem ipsum',
        done: false
      },
      {
        title: 'Städa',
        description: 'Städa hallen och badrummet',
        done: true
      },
      {
        title: 'Städa',
        description: 'Städa hallen och badrummet',
        done: true
      },
      {
        title: 'Städa',
        description: 'Städa hallen och badrummet',
        done: true
      },
      {
        title: 'Städa',
        description: 'Städa hallen och badrummet',
        done: true
      },
      {
        title: 'Städa',
        description: 'Städa hallen och badrummet',
        done: true
      },
      {
        title: 'Städa',
        description: 'Städa hallen och badrummet',
        done: true
      },
      {
        title: 'Städa',
        description: 'Städa hallen och badrummet',
        done: true
      },
      {
        title: 'Städa',
        description: 'Städa hallen och badrummet',
        done: true
      }
    ]
  );

  console.log(myTodos);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Todos:</h3>
        <NewTodo addNewTodo={setMyTodos}/>
        <TodoList todos={myTodos}/>
      </header>
    </div>
  );
}

export default App;
