import { useEffect, useState } from 'react';
import { getTodos, Todo as TodoType } from '../../api/todos';
import { UnorderedList } from '../../components/UnorderedList';
import { useTheme } from '../theme/ThemeContext';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';

export const Todos = () => {
  const theme = useTheme();
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [error, setError] = useState(false);

  const fetchTodos = async () => {
    try {
      setTodos(await getTodos());
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <section>
      <h1 style={{ color: theme }}>React Bootcamp Todos</h1>
      <h2>Add todo</h2>
      <AddTodo onAddTodo={fetchTodos} />
      <h2>Todos</h2>
      {error ? (
        <p style={{ color: 'red' }}>Error fetching todos</p>
      ) : (
        <UnorderedList>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} onToggleTodo={fetchTodos} />
          ))}
        </UnorderedList>
      )}
    </section>
  );
};
