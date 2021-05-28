import { putTodo, Todo as TodoType } from '../../api/todos';
import { Checkbox } from '../../components/Checkbox';

export const Todo = ({
  todo,
  onChangeTodo,
}: {
  todo: TodoType;
  onChangeTodo: () => void;
}) => {
  const onChange = async () => {
    await putTodo({ ...todo, done: !todo.done });
    onChangeTodo();
  };
  return (
    <li>
      {todo.todo}{' '}
      <Checkbox checked={todo.done} onChange={onChange}>
        Done?
      </Checkbox>
    </li>
  );
};
