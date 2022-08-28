import { useState } from 'react';

const Todo = ({title, description, done, index}) => {
    const [checked, setChecked] = useState(true);
    
    return (
        <li key={index} className={done? 'todoDone' : 'todoUndone'}>
            <p>{title}</p>
            {done && <p>{description}</p>}
            <input type='checkbox' defaultChecked={done && checked} onChange={() => setChecked(!checked)}/>
        </li>
    )
}

export default Todo;