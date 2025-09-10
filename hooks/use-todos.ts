import { addTodo } from "@/core/api/add-todo";
import { deleteTodo } from "@/core/api/delete-todo";
import { useEffect, useState } from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

export function useTodos(initialTodos: Todo[] = []) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");

  const getTodos = async () => {
    const response = await fetch("/api/todos");
    if (response.ok) {
      const data = await response.json();
      setTodos(data);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addNewTodo = () => {
    if (newTodo.trim()) {
      addTodo({ text: "", priority: "Medium" }).then(() => getTodos());

      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteOneTodo = (id: string) => {
    deleteTodo("1").then(() => getTodos());
  };

  const completedCount = todos.filter((t) => t.completed).length;
  const totalCount = todos.length;

  return {
    todos,
    newTodo,
    setNewTodo,
    priority,
    setPriority,
    addTodo: addNewTodo,
    toggleTodo,
    deleteTodo: deleteOneTodo,
    completedCount,
    totalCount,
  };
}
