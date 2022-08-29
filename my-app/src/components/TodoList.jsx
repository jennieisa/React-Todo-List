import Todo from './Todo'

const TodoList = ({todos}) => {

    return (
        <>
            <ul>
                {todos.map((todo, index) => <Todo title={todo.title} description={todo.description} done={todo.done} key={index} /> )}
            </ul>
        </>
    )
}

export default TodoList;