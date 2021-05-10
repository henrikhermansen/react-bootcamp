import { stringify } from 'querystring';

const URI = 'http://localhost:3001/todos';

export interface Todo {
  id?: number;
  todo: string;
  done: boolean;
}

export const getTodos = async (): Promise<Todo[]> => {
  const data = await fetch(URI);
  return await data.json();
};

export const postTodo = async (todo: string): Promise<void> => {
  await fetch(URI, {
    method: 'POST',
    body: JSON.stringify({ todo, done: false }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const putTodo = async (todo: Todo): Promise<void> => {
  await fetch(`${URI}/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
