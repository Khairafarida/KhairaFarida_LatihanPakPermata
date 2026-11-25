import { PrismaClient } from "@prisma/client";

// Koneksi tunggal: dipakai ulang saat hot reload di mode development.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;