import { Todo as TodoType } from '../../api/todos';
import { useTheme } from '../theme/ThemeContext';
import { getTodos, postTodo } from '../../api/todos';

const Error = () => <p style={{ color: 'red' }}>Error fetching todos</p>;

export const Todos = () => {
  const theme = useTheme();
  const todos: TodoType[] = [{ todo: 'Buy chocolate', done: false }];
  const error = false;
  const onAddTodo = () => {
    console.log('Clicked Add');
  };

  return (
    <section>
      <h1 style={{ color: theme }}>React Bootcamp Todos</h1>
      <h2>Add todo</h2>
      <form>
        <input type="text" />{' '}
        <button type="button" onClick={onAddTodo}>
          Add
        </button>
      </form>
      <h2>Todos</h2>
      {error ? <Error /> : <code>{JSON.stringify(todos, null, 2)}</code>}
    </section>
  );
};
