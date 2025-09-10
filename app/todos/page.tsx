import TodosView from "@/components/ui/todos/view";
import { prisma } from "@/lib/prisma";

export default async function TodoApp() {
  const todos = await prisma.todo.findMany();

  console.log("todos", todos);

  return <TodosView />;
}
