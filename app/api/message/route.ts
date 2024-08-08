import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // Parse the request body as JSON
  const data = await request.json();
  const { name, email, message } = data;

  if (!name || !email || !message) {
    return new Response("Missing fields", { status: 400 });
  }

  console.log(name, email, message);
  console.log(request.ip);
  console.log(request.headers.get('X-Forwarded-For'));
  console.log(request.geo);
  return new Response("OK");
}
