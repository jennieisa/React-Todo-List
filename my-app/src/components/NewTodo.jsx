const NewTodo = () => {

    return (
        <form>
            <label htmlFor="titleTodo">Titel:</label>
            <input type="text" id="titleTodo"/>
            <label htmlFor="descTodo">Beskrivning:</label>
            <input type="text" id="descTodo" />
            <button>Lägg till</button>
        </form>
    )
}

export default NewTodo;