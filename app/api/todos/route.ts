import { prisma } from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function GET() {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });

  return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
  const { text, priority } = await request.json();

  const newTodo = await prisma.todo.create({
    data: { text, priority },
  });

  return Response.json({ data: newTodo });
}

// export async function GET(request: NextRequest) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const userId = searchParams.get("userId");

//     if (!userId) {
//       return NextResponse.json(
//         { error: "User ID is required" },
//         { status: 400 }
//       );
//     }

//     const todos = await prisma.todo.findMany({
//       where: { userId },
//       orderBy: { createdAt: "desc" },
//     });

//     return NextResponse.json(todos);
//   } catch (error) {
//     console.error("Error fetching todos:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch todos" },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(request: NextRequest) {
//   try {
//     const { text, priority, userId } = await request.json();

//     if (!text || !userId) {
//       return NextResponse.json(
//         { error: "Text and userId are required" },
//         { status: 400 }
//       );
//     }

//     const todo = await prisma.todo.create({
//       data: {
//         text,
//         priority: priority || "MEDIUM",
//         userId,
//       },
//     });

//     return NextResponse.json(todo);
//   } catch (error) {
//     console.error("Error creating todo:", error);
//     return NextResponse.json(
//       { error: "Failed to create todo" },
//       { status: 500 }
//     );
//   }
// }
