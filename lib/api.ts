import { ApiResponse } from "@/types"

const API_URL = process.env.NEXT_PUBLIC_API_URL || ""

const fetcher = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const res = await fetch(`${API_URL}/${url}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  })

  if (!res.ok) throw new Error("Failed to fetch")

  return await res.json()
}

//auth
export const loginUser = async (data: { email: string; password: string }) =>
  fetcher("login", {
    method: "POST",
    body: JSON.stringify(data),
  })
