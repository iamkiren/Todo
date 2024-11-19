import React from "react";
import List from "@mui/material/List";
import TodoItems from "./TodoItems";
import TodoForm from "./TodoForm";

export default function TodoList() {
  const getInitialData = () => JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodo] = React.useState(getInitialData);

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function removeTodo(id) {
    setTodo((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  }

  function toggleTodo(id) {
    setTodo((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  }

  const addTodo = (text) => {
    setTodo((prevTodos) => {
      return [...prevTodos, { text: text, id: 789, completed: false }];
    });
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => {
        return (
          <TodoItems
            todo={todo}
            key={todo.id}
            remove={() => removeTodo(todo.id)}
            toggleTodo={toggleTodo}
          />
        );
      })}
      <TodoForm addTodo={addTodo} />
    </List>
  );
}
