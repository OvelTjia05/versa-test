"use client"

import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import { loginUser } from "@/lib/api"

export const useLogin = () => {
  const router = useRouter()
  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      console.log("Login success")
      router.push("/")
    },
  })
}
