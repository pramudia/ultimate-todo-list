import Todo from '../todo/Todo'
import './TodoList.css'


const TodoList = ({ todos, removeTodo, completeTodo, toggleEditTodo, editTodo, editTodoId, onChange, onSubmit }) => {
    const renderTodos = () => {
        if (todos.length > 0) {
            return todos.map(todo => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        completeTodo={completeTodo}
                        toggleEditTodo={toggleEditTodo}
                        editTodo={editTodo}
                        editTodoId={editTodoId}
                        onChange={onChange}
                        onSubmit={onSubmit}
                    />
                )
            })
        }
        return <p className='errMessage'>There are no Todos!.</p>
    }
    return (
        <div className='todoList-container'>
            {renderTodos()}
        </div>
    )
}

export default TodoList;