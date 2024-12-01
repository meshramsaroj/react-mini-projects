import React, { useState } from "react";
import "./Todos.css";
import AddTodo from "./Component/AddTodo";
import { getDate } from "./utils";
import TodoItem from "./Component/TodoItem";

const todoData = [
  {
    id: "1",
    text: "Todo text",
    date: getDate(),
  },
];

const TodosLayout = () => {
  const [todos, setTodos] = useState(todoData);
  const [activeTodo, setActiveTodo] = useState({});
  const [todoText, setTodoText] = useState("");

  return (
    <div className="todo-layout">
      <h2 className="text-2xl font-bold">Todo <span className="text-secondary">({todos.length})</span></h2>
      <AddTodo
        todos={todos}
        todoText={todoText}
        setTodoText={setTodoText}
        setTodos={setTodos}
        todoData={activeTodo}
        setTodoData={setActiveTodo}
      />
      <section className="todo-list-grid">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            setTodos={setTodos}
            setTodoText={setTodoText}
            todos={todos}
            setEditTodo={setActiveTodo}
            todoData={activeTodo}
          />
        ))}
      </section>
    </div>
  );
};

export default TodosLayout;
