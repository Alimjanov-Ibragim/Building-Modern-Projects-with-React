import styled from 'styled-components';

export const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

export const TodoItemContainerWithWarning = styled(TodoItemContainer)`
  border-bottom: ${props =>
    new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
      ? 'none'
      : '2px solid red'};
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
`;

export const CompletedButton = styled(Button)`
  background-color: #22ee22;
`;

export const RemoveButton = styled(Button)`
  background-color: #ee2222;
  margin-left: 8px;
`;
