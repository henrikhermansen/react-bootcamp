import { putTodo, Todo as TodoType } from '../../api/todos';
import { Checkbox } from '../../components/Checkbox';
import { ListItem } from '../../components/ListItem';

interface TodoProps {
  todo: TodoType;
  onToggleTodo: () => void;
}

export const Todo = ({ todo, onToggleTodo }: TodoProps) => {
  const toggleTodo = async () => {
    await putTodo({ ...todo, done: !todo.done });
    onToggleTodo();
  };

  return (
    <ListItem>
      <span>{todo.todo}</span>
      <Checkbox checked={todo.done} onChange={toggleTodo}>
        Done?
      </Checkbox>
    </ListItem>
  );
};
