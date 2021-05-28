import { useState } from 'react';
import { postTodo } from '../../api/todos';

interface AddTodoProps {
  onAddTodo: () => void;
}

export const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [input, setInput] = useState('');

  const addTodo = async () => {
    if (input) {
      await postTodo(input);
      setInput('');
      onAddTodo();
    }
  };

  return (
    <form>
      <input
        type="text"
        value={input}
        onChange={({ target: { value } }) => setInput(value)}
      />{' '}
      <button type="button" onClick={addTodo}>
        Add
      </button>
    </form>
  );
};
