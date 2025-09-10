"use server";

export async function putTodo(data: string, id: string) {
  const resData = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: data,
  });

  return resData.json();
}
