import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TodoItem = ({
  todo,
  setTodoText,
  setTodos,
  todoData,
  todos,
  setEditTodo,
}) => {
  const handleDelete = (id) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodo);
  };

  const handleEdit = (todoData) => {
    setEditTodo(todoData);
    setTodoText(todoData.text);
  };

  return (
    <div
      key={todo.id}
      className={
        `todo-card ${todoData && todoData.id === todo.id ? "active" : ""}`
      }
    >
      <div className="todo-content">
        <span className="text-secondary text-sm">Date: {todo.date}</span>
        <span className="todo-massage">{todo.text}</span>
      </div>
      <div className="action-button">
        <button onClick={() => handleDelete(todo.id)} className="btn-delete">
          <FontAwesomeIcon size="lg" icon={faTrash} />
        </button>
        <button onClick={() => handleEdit(todo)} className="btn-edit">
          <FontAwesomeIcon size="lg" icon={faEdit} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
