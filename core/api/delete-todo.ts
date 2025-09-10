"use server";

export async function deleteTodo(id: string) {
  const resData = await fetch(`/api/todos/${id}`, {
    method: "DELETE",
  });

  return resData.json();
}
