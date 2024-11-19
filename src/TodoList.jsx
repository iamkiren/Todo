import React from "react";
import List from "@mui/material/List";
import TodoItems from "./TodoItems";
import TodoForm from "./TodoForm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
      return [
        ...prevTodos,
        { text: text, id: crypto.randomUUID(), completed: false },
      ];
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 3,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        Todos
      </Typography>
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
    </Box>
  );
}
