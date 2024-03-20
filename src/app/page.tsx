"use client";
import { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { Preferences } from "@capacitor/preferences";

export default function Home() {
  const get = async (): Promise<
    {
      text: string;
      category: string;
      id: number;
      isCompleted: boolean;
    }[]
  > => {
    const { value } = await Preferences.get({ key: "todos" });
    return value ? JSON.parse(value) : [];
  };

  const [todos, setTodos] = useState<
    { text: string; category: string; id: number; isCompleted: boolean }[]
  >([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const initialTodos = await get();
      setTodos(initialTodos);
    };

    fetchTodos();
  }, []);

  const save = async (todos: any) => {
    await Preferences.set({ key: "todos", value: JSON.stringify(todos) });
  };

  useEffect(() => {
    save(todos);
  }, [todos]);

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
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="mx-auto max-w-96 flex flex-col justify-between bg-[#2F4F4F] text-[#F5F5F5]">
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}
