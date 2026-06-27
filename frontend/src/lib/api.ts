/**
 * Thin client for the arcflow Spring Boot backend.
 * Point it at the API with NEXT_PUBLIC_API_URL (see .env.example).
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8090";

export async function apiFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`Request to ${path} failed: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

export type HealthResponse = {
  service: string;
  status: string;
  timestamp: string;
};

/** Ping the backend's status endpoint. */
export function getHealth(): Promise<HealthResponse> {
  return apiFetch<HealthResponse>("/api/health");
}
