import { RiSaveLine } from 'react-icons/ri'
import { FaPlus } from 'react-icons/fa'
import './TodoForm.css'

const TodoForm = ({ id, type, btnText, value, onSubmit, onChange }) => {
    return (
        <form id={`${id}-form`} onSubmit={(e) => onSubmit(e)}>
            <div>
                <input
                    id={`${id}-input`}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e)}
                    required />
                <span className='highlight'></span>
                <span className='bar'></span>
                <label className='todoForm-label' htmlFor={id}>
                    {id === 'todo-add' ? 'Todo: ' : ''}
                </label>
            </div>
            <button id={`${id}-btn`} className='form-submit-btn' type='submit'>
                {btnText === 'Add' ? (
                    <FaPlus className='btn-icon-save' />
                ) : (
                    <RiSaveLine className='btn-icon-add' />
                )}
            </button>
        </form>
    )
}

export default TodoForm;