import { PrismaClient } from "@prisma/client";

declare global {
  // Trick pour éviter plusieurs instances en dev avec Next.js (HMR)
  var prisma: PrismaClient | undefined;
}

const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query", "error", "warn"], // optionnel : logs utiles en dev
  });

// Si on est en dev, on attache à l'objet global pour réutiliser la même instance
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export async function initPrisma() {
  try {
    await prisma.$connect();
    console.log("✅ Prisma connecté à la base");
  } catch (err) {
    console.error("❌ Erreur connexion Prisma :", err);
    process.exit(1);
  }
}

export async function disconnectPrisma() {
  await prisma.$disconnect();
  console.log("🔌 Prisma déconnecté");
}

export default prisma;
