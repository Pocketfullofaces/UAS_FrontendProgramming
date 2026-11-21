import "dotenv/config";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "@/generated/prisma/client";
import { databaseUrl } from "./database-url";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const url = databaseUrl();
const clientConfig = {
  url,
  authToken: process.env.TURSO_AUTH_TOKEN,
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: new PrismaLibSql(clientConfig),
  });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;