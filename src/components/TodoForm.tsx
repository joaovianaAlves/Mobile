import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (text: string, category: string) => void;
}

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim() || !category) return; // Trim value before checking if it's empty
    addTodo(value.trim(), category); // Trim value before passing it to addTodo
    setCategory("");
    setValue("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Criar tarefa:</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="todoInput" className="sr-only">
          Digite o Título:
        </label>
        <input
          id="todoInput"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Digite o Título"
          className="w-full p-2 rounded bg-[#696969] focus:outline-none focus:ring-2 focus:ring-blue-500"
          required // Mark the input as required for better validation
        />
        <label htmlFor="categorySelect" className="sr-only">
          Selecione a categoria:
        </label>
        <select
          id="categorySelect"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded bg-[#696969] focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecione</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button
          type="submit"
          className="w-full p-2 bg-[#708090] text-[#F4EEE0] rounded-md hover:bg-[#778899] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Criar Tarefa
        </button>
      </form>
    </div>
  );
}
