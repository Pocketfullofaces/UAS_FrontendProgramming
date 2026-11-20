import path from "node:path";

export function databaseUrl() {
  const url = process.env.DATABASE_URL ?? "file:./prisma/dev.db";

  if (url.startsWith("file:")) {
    return "file:" + path.resolve(url.slice(5)).replaceAll("\\", "/");
  }

  if (url.startsWith("libsql://") || url.startsWith("https://")) {
    return url;
  }

  throw new Error("DATABASE_URL harus memakai file:, libsql://, atau https://.");
}