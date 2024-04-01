import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { createClient } from "@supabase/supabase-js";
const app = new Hono();
const SUPABASE_URL = "https://eqncpdwlkhpuemqxutxa.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxbmNwZHdsa2hwdWVtcXh1dHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0MjczNzMsImV4cCI6MjAyNTAwMzM3M30.qkTqz4qCHE1z9ekQ19COZJ_as5q1eU4P1YNqIrZeYOk";

const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
console.log(db);
app.get("/", async (c) => {
  const getData = await db.from("message").select("message");
  return c.json({
    data: getData,
  });
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port: 8787,
});
