import React from "react";
import Search from "./Search";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  category: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

export default function TodoList({
  todos,
  removeTodo,
  completeTodo,
}: TodoListProps) {
  const [search, setSearch] = useState("");
  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <div className="p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
        <div className="overflow-auto max-h-[300px]">
          {todos
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .map((todo) => (
              <div
                key={todo.id}
                className="border p-2 sm:p-4 rounded mb-2 flex flex-col sm:flex-row justify-between items-start sm:items-center"
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "",
                }}
              >
                <div>
                  <p className="font-semibold">{todo.text}</p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {todo.category}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <button
                    onClick={() => completeTodo(todo.id)}
                    className="bg-blue-500 text-white rounded px-2 py-1 mr-2 hover:bg-blue-700"
                  >
                    Completar
                  </button>
                  <button
                    onClick={() => removeTodo(todo.id)}
                    className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-700"
                  >
                    Deletar
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
