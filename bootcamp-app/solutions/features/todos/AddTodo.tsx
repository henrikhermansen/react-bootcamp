import { useState } from 'react';
import { postTodo } from '../../api/todos';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

interface AddTodoProps {
  onAddTodo: () => void;
}

export const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const addTodo = async () => {
    if (value) {
      setIsLoading(true);
      await postTodo(value);
      onAddTodo();
      setIsLoading(false);
      setValue('');
    }
  };

  return (
    <form>
      <label>
        New todo:
        <Input
          type="text"
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
          style={{ marginLeft: '1em' }}
        />
      </label>
      <Button
        disabled={isLoading}
        onClick={addTodo}
        style={{ marginLeft: '1em' }}
      >
        Add
      </Button>
    </form>
  );
};
