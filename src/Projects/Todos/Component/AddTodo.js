import React, { useState } from "react";
import { getDate } from "../utils";

const AddTodo = ({
  todoText,
  setTodoText,
  todos,
  setTodos,
  todoData,
  setTodoData,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const isAdd = Object.keys(todoData).length > 0;

  const handleAddTodo = () => {
    if (todoText === "") {
      setErrorMessage("Text is required");
      return;
    }
    const data = {
      id: "todo-id" + Math.random() * 10,
      text: todoText,
      date: getDate(),
    };

    setTodos([...todos, data]);
    setErrorMessage("");
    setTodoText("");
  };

  const handleUpdateTodo = () => {
    const updatedTodo = todos?.map((t) => {
      if (t.id === todoData.id) {
        return { ...t, text: todoText };
      }
      return t;
    });

    setTodos(updatedTodo);
    setTodoData({});
    setTodoText("");
  };

  return (
    <section className="edit-todo">
      <div class={"input-group "}>
        <textarea
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter text"
          className={` ${errorMessage ? "border-danger" : ""}`}
        />
        <label for="todoText">Todo text</label>
        {errorMessage && <p className="text-danger m-0">{errorMessage}</p>}
      </div>
      {isAdd ? (
        <button onClick={handleUpdateTodo} className="btn-default">
          Update
        </button>
      ) : (
        <button onClick={handleAddTodo} className="btn-default">
          Add
        </button>
      )}
    </section>
  );
};

export default AddTodo;
