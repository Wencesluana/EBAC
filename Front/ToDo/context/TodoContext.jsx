import { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [filter, setFilter] = useState('all');

    function addTodo(text) {
        setTodos([...todos, { id: Date.now(), text, done: false }]);
    }

    function toggleTodo(id) {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <TodoContext.Provider
            value={{
                todos,
                addTodo,
                toggleTodo,
                removeTodo,
                filter,
                setFilter
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export function useTodos() {
    return useContext(TodoContext);
}