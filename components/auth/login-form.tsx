"use client"

import { useState } from "react"
import { useLogin } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"

export default function LoginForm() {
  const login = useLogin()
  const [form, setForm] = useState({ email: "", password: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login.mutate(form)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md"
    >
      <h2 className="text-center text-xl font-bold">Login</h2>

      <input
        type="email"
        required
        value={form.email}
        placeholder="awesome@example.com"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        required
        value={form.password}
        placeholder="********"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      {login.isError && (
        <p className="text-sm text-red-500">{(login.error as Error).message}</p>
      )}

      <Button type="submit" disabled={login.isPending} className="w-full">
        {login.isPending ? "Loading..." : "Login"}
      </Button>
    </form>
  )
}
