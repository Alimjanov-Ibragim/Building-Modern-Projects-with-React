import React from 'react';
import {
  TodoItemContainer,
  TodoItemContainerWithWarning,
  ButtonsContainer,
  CompletedButton,
  RemoveButton
} from './TodoListItemStyled';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  const Container = todo.isCompleted
    ? TodoItemContainer
    : TodoItemContainerWithWarning;

  return (
    <Container createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <p>
        Created at:&nbsp;
        {new Date(todo.createdAt).toLocaleDateString()}
      </p>
      <ButtonsContainer>
        {todo.isCompleted ? null : (
          <CompletedButton onClick={() => onCompletedPressed(todo.id)}>
            Mark As Completed
          </CompletedButton>
        )}
        <RemoveButton remove onClick={() => onRemovePressed(todo.id)}>
          Remove
        </RemoveButton>
      </ButtonsContainer>
    </Container>
  );
};

export default TodoListItem;
