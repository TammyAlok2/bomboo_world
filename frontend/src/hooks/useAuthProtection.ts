'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { isProtectedRoute } from '@/lib/routeConfig'

export const useAuthProtection = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isChecking, setIsChecking] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    const isTokenAvailable = !!token

    setIsAuthenticated(isTokenAvailable)

    // Check if current route is protected
    if (isProtectedRoute(pathname) && !isTokenAvailable) {
      router.push("/signin")
    }

    setIsChecking(false)
  }, [pathname, router])

  return { isChecking, isAuthenticated }
}
