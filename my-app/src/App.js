import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList.jsx';

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

  const findElements = () => {
    let inputTitle = document.querySelector('#titleTodo'); 
    let inputDesc = document.querySelector('#descTodo');

    const inputs =[inputTitle.value, inputDesc.value];

    return inputs;
  }

  const addNewTodo = () => {

    const inputs = findElements();

    console.log(inputs)

    let newTodo = {
      title: inputs[0],
      desc: inputs[1],
      done: false
    }

    console.log(newTodo);

    setMyTodos([...myTodos, newTodo]);
  }

  const handleEvent = (e) => {
    e.preventDefault();
  }

  const markTodoAsDone = (index) => {
    const newTodo = [...myTodos];
    newTodo[index].done = true;
    setMyTodos(newTodo);
  }

  const markTodoAsUndone = (index) => {
    const newTodo = [...myTodos];
    newTodo[index].done = false;
    setMyTodos(newTodo);
  }


  console.log(myTodos);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Todos:</h3>
        <form>
            <label htmlFor="titleTodo">Titel:</label>
            <input type="text" id="titleTodo"/>
            <label htmlFor="descTodo">Beskrivning:</label>
            <input type="text" id="descTodo" />
            <button onClick={(e) => {handleEvent(e); addNewTodo();}} type="submit">
                Lägg till
            </button>
        </form>
        <TodoList todos={myTodos} markTodoAsDone={markTodoAsDone} markTodoAsUndone={markTodoAsUndone}/>
      </header>
    </div>
  );
}

export default App;
