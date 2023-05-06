import React, { useState } from 'react';
import { Todo } from './types';
import TodoList from './components/TodoList';
import styled from 'styled-components';

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 24px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 0;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  & > input {
    padding: 0.5rem 1rem;
    border: none;
    border-bottom: 2px solid black;
    font-size: 1.2rem;
    margin-right: 1rem;
    width: 60%;
  }

  & > button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #2ecc71;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Walk the dog', completed: false },
    { id: 3, text: 'Do laundry', completed: false },
  ]);

  const [newTodo, setNewTodo] = useState<string>('');

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo: Todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodoItem = { id: newId, text: newTodo, completed: false };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };


  return (
    <TodoContainer>
      <Title>TODOLIST</Title>
      <Form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button type="submit">Add</button>
      </Form>
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
    </TodoContainer>
  );
};

export default App;