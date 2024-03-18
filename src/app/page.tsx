"use client";
import { useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import Search from "@/components/Search";

export default function Home() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      category: "work",
      id: 1,
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      category: "personal",
      id: 2,
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      category: "work",
      id: 3,
      isCompleted: false,
    },
  ]);

  const addTodo = (text: string, category: string) => {
    const newTodos = [
      ...todos,
      { text, category, id: todos.length + 1, isCompleted: false },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id: number) => {
    const newTodos = [...todos.filter((todo) => todo.id !== id)];
    setTodos(newTodos);
  };

  const completeTodo = (id: number) => {
    const newTodos = [...todos];
    newTodos.map((todo) => {
      todo.id === id
        ? (todo.isCompleted = !todo.isCompleted)
        : todo.isCompleted;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}
