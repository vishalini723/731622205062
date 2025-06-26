const API = "http://20.244.56.144/evaluation-service/logs";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2aXNoYXZpc2hhbGluaTcyM0BnbWFpbC5jb20iLCJleHAiOjE3NTA5NDA0ODYsImlhdCI6MTc1MDkzOTU4NiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImQzNDg4OTJmLTVhZTMtNDYzNC05Y2U5LWIyOWI4YTBjYjM1OCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InZpc2hhbGluaSIsInN1YiI6IjA0MWRiZGYxLWE4YmMtNGVmYi05ZWNkLTBkOTJlMjJmYzE1NiJ9LCJlbWFpbCI6InZpc2hhdmlzaGFsaW5pNzIzQGdtYWlsLmNvbSIsIm5hbWUiOiJ2aXNoYWxpbmkiLCJyb2xsTm8iOiI3MzE2MjIyMDUwNjIiLCJhY2Nlc3NDb2RlIjoiWXR2cHlKIiwiY2xpZW50SUQiOiIwNDFkYmRmMS1hOGJjLTRlZmItOWVjZC0wZDkyZTIyZmMxNTYiLCJjbGllbnRTZWNyZXQiOiJlV2hDbllQSlJ6dlR0R1dSIn0.9IqPyAO73JoyJxza__S-1mMkYoCA6gI265DQ4dh3cwU";

const vs = ["frontend", "backend"];
const vl = ["debug", "info", "warn", "error", "fatal"];
const vp = [
  "api", "component", "hook", "page", "state", "style",
  "auth", "config", "middleware", "utils"
];

export async function Log(s, l, p, m) {
  if (!vs.includes(s) || !vl.includes(l) || !vp.includes(p)) return;

  try {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TOKEN}`
      },
      body: JSON.stringify({ s, l, package: p, m })
    });

    const data = await res.json();
    if (!res.ok) console.error("Log failed:", data);
  } catch (err) {
    console.error("Log error:", err);
  }
}
