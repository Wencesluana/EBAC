import { useState } from 'react';
import { useTodos } from '../context/TodoContext';

function TodoForm() {
    const [text, setText] = useState('');
    const { addTodo } = useTodos();

    function handleSubmit(e) {
        e.preventDefault();
        if (!text) return;

        addTodo(text);
        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Nova tarefa..."
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default TodoForm;