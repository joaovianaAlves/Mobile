import React from "react";
import { useState } from "react";

interface TodoFormProps {
  addTodo: (text: string, category: string) => void;
}

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setCategory("");
    setValue("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Criar tarefa:</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Digite o Titulo"
          className="w-full p-2 border rounded"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Selecione</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Criar Tarefa
        </button>
      </form>
    </div>
  );
}
