import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {}

// export async function PATCH(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { completed } = await request.json();

//     const todo = await prisma.todo.update({
//       where: { id: params.id },
//       data: { completed },
//     });

//     return NextResponse.json(todo);
//   } catch (error) {
//     console.error("Error updating todo:", error);
//     return NextResponse.json(
//       { error: "Failed to update todo" },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await prisma.todo.delete({
//       where: { id: params.id },
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Error deleting todo:", error);
//     return NextResponse.json(
//       { error: "Failed to delete todo" },
//       { status: 500 }
//     );
//   }
// }
