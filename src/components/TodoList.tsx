import React from "react";
import Search from "./Search";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

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
      <div className="p-6 overflow-auto ">
        <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
        <div className="max-h-[500px] bg-[#696969] rounded-lg">
          {todos
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .map((todo) => (
              <div
                key={todo.id}
                className={` p-2 sm:p-4 mb-2 flex flex-col sm:flex-row justify-between items-start sm:items-center ${
                  todo.isCompleted ? "bg-gray-400 text-gray-200" : ""
                }`}
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "",
                }}
              >
                <div>
                  <p className="font-semibold">{todo.text}</p>
                  <p className="text-xs sm:text-sm">{todo.category}</p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <button
                    onClick={() => completeTodo(todo.id)}
                    className={`bg-[#708090] rounded-md px-4 py-2 mr-2 hover:bg-[#778899] ${
                      todo.isCompleted ? "bg-green-800" : ""
                    }`}
                  >
                    <FaCheck />
                  </button>
                  <button
                    onClick={() => removeTodo(todo.id)}
                    className="bg-[#708090] rounded-md px-4 py-2 hover:bg-[#778899]"
                  >
                    <FaRegTrashCan />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
