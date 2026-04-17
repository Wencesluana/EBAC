import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';

function App() {
    return (
        <TodoProvider>
            <h1>Todo List</h1>
            <TodoForm />
            <TodoFilters />
            <TodoList />
        </TodoProvider>
    );
}

export default App;