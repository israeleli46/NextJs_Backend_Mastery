import { prisma } from "@/lib/prisma";

type Params = { id: string };

type PageProps = { params: Params };

export default async function TodoApp(props: PageProps) {
  const todo = await prisma.todo.findFirst({ where: { id: props.params.id } });

  return (
    <div>
      Params :<pre>{JSON.stringify(todo, null, 2)}</pre>
    </div>
  );
}
