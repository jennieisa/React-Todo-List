import { useState } from 'react';

const Todo = ({title, description, done, index}) => {
    
    const [todoChecked, setTodoChecked] = useState(false);


    return (
        <li key={index} className={done? 'todoDone' : 'todoUndone'}>
            <p>{title}</p>
            {done && <p>{description}</p>}
            <input type='checkbox' defaultChecked={done && todoChecked} onChange={() => setTodoChecked(!todoChecked)}/>
        </li>
    )
}

export default Todo;