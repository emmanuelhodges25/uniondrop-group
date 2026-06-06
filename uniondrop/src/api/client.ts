const API_URL = "http://localhost:5000";

export async function apiGet(path: string) {
  const res = await fetch(`${API_URL}${path}`);
  return res.json();
}

export async function apiPost(path: string, data: unknown) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}