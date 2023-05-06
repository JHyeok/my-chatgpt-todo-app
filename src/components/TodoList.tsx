import React from 'react';
import styled from 'styled-components';
import { Todo } from '../types';

const TodoListContainer = styled.div`
  margin-top: 1rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 90%;
  max-width: 500px;
`;

const TodoCheckbox = styled.input`
  margin-right: 1rem;
  cursor: pointer;
`;

const TodoItem = styled.div<{ completed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
  color: ${({ completed }) => (completed ? "#aaa" : "inherit")};
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};

  &:last-child {
    border-bottom: none;
  }
`;

const TodoText = styled.span`
  flex-grow: 1;
  text-align: left;
`;

const TodoButton = styled.button`
  margin-left: 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #f44336;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #d32f2f;
  }
`;

type TodoListProps = {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo, onToggleTodo }: TodoListProps) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id} completed={todo.completed}>
          <TodoCheckbox type="checkbox" onChange={() => onToggleTodo(todo.id)} checked={todo.completed} />
          <TodoText>{todo.text}</TodoText>
          <TodoButton onClick={() => onDeleteTodo(todo.id)}>Delete</TodoButton>
        </TodoItem>
      ))}
    </TodoListContainer>
  );
}

export default TodoList;