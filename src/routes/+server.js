// src/routes/api/domain-check/+server.js

import { checkDomain } from "domain-lookup";

export async function GET({ url }) {
  const domain = url.searchParams.get("domain");

  try {
    const result = await checkDomain(domain || "example.com");
    return new Response(JSON.stringify({ available: result }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500
    });
  }
}
