const Todo = ({title, description, done, index}) => {
    
    return (
        <li key={index} className={done? 'todoDone' : 'todoUndone'}>
            <p>{title}</p>
            {done && <p>{description}</p>}
        </li>
    )
}

export default Todo;