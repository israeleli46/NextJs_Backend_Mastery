"use server";

import { ApiService } from "@/lib/api-service";
import { Todo } from "@prisma/client";

const apiService = new ApiService("/api");

export async function addTodo(data: Todo) {
  return await apiService.post<Todo>("/todos", data);
}
