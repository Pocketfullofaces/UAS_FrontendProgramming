import { NextResponse } from "next/server";
import { ZodError } from "zod";

export class ApiError extends Error {
  constructor(
    message: string,
    public status = 400,
  ) {
    super(message);
  }
}
export async function requestBody(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || new URL(origin).host !== request.headers.get("host"))
    throw new ApiError("Permintaan harus berasal dari website ini.", 403);
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    throw new ApiError("Format permintaan harus JSON.", 415);
  const body = await request.text();
  if (body.length > 16000) throw new ApiError("Permintaan terlalu besar.", 413);
  try {
    return JSON.parse(body) as unknown;
  } catch {
    throw new ApiError("Data JSON tidak valid.");
  }
}
export function apiError(error: unknown) {
  if (error instanceof ApiError)
    return NextResponse.json(
      { error: error.message },
      { status: error.status },
    );
  if (error instanceof ZodError)
    return NextResponse.json(
      { error: "Data tidak valid. Periksa kembali isian formulir." },
      { status: 400 },
    );
  console.error(
    "OFFBEAT database request failed:",
    error instanceof Error ? error.message : "Unknown error",
  );
  return NextResponse.json(
    { error: "Data belum berhasil disimpan atau dimuat. Coba lagi." },
    { status: 503 },
  );
}