'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { isProtectedRoute } from '@/lib/routeConfig'

export default function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const token = localStorage.getItem("token")
    
    // If route is protected and no token, redirect to signin
    if (isProtectedRoute(pathname) && !token) {
      router.push("/signin")
    }
  }, [pathname, router])

  return <>{children}</>
}
