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
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-2">Lista de Tarefas</h1>
        <div className="overflow-auto max-h-[150px] overflow-y-auto">
          {todos
            .filter(
              (todo) =>
                !todo.isCompleted &&
                todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .map((todo) => (
              <div
                key={todo.id}
                className={`p-1 px-2 m-2 flex flex-row justify-between rounded-md items-start sm:items-center bg-[#696969] `} // padding and margin reduced
              >
                <div>
                  <p className="text-sm sm:text-base font-semibold">
                    {todo.text}
                  </p>
                  <p className="text-xs">{todo.category}</p>
                </div>
                <div className="mt-1 sm:mt-0">
                  <button
                    onClick={() => completeTodo(todo.id)}
                    className={`bg-[#708090] rounded-md px-2 py-1 mr-1 hover:bg-[#778899] `}
                  >
                    <FaCheck />
                  </button>
                  <button
                    onClick={() => removeTodo(todo.id)}
                    className="bg-[#708090] rounded-md px-2 py-1 hover:bg-[#778899]"
                  >
                    <FaRegTrashCan />
                  </button>
                </div>
              </div>
            ))}
        </div>
        <h2 className="m-2">Completed Tasks</h2>
        <div className="overflow-auto max-h-[180px] overflow-y-auto">
          {todos
            .filter(
              (todo) =>
                todo.isCompleted &&
                todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .map((todo) => (
              <div
                key={todo.id}
                className={`p-1 px-2 m-2 flex flex-row justify-between items-start sm:items-center ${
                  todo.isCompleted ? "bg-gray-400 text-gray-200 rounded-md" : ""
                }`}
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "",
                }}
              >
                <div>
                  <p className="text-sm sm:text-base font-semibold">
                    {todo.text}
                  </p>
                  <p className="text-xs">{todo.category}</p>
                </div>
                <div className="mt-1 sm:mt-0">
                  <button
                    onClick={() => completeTodo(todo.id)}
                    className={`bg-[#708090] rounded-md px-2 py-1 mr-1 hover:bg-[#778899]`}
                  >
                    <FaCheck />
                  </button>
                  <button
                    onClick={() => removeTodo(todo.id)}
                    className="bg-[#708090] rounded-md px-2 py-1 hover:bg-[#778899]"
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
