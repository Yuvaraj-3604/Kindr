"use client"

import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Heart, User, LogOut } from "lucide-react"
import { useState, useEffect } from "react"

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    // Check if user is "logged in" from localStorage
    const status = localStorage.getItem("kindr_auth")
    if (status === "true") {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("kindr_auth")
    setIsLoggedIn(false)
    setShowDropdown(false)
    window.location.reload()
  }

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={isLoggedIn ? "/home" : "/"} className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-primary fill-current" />
          <span className="text-xl font-bold tracking-tight">Kindr</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/programs" className="hover:text-primary transition-colors">Programs</Link>
          <Link href="/impact" className="hover:text-primary transition-colors">Impact & Mission</Link>
        </nav>
        
        <div className="flex items-center space-x-6">
          <ModeToggle />
          
          {isLoggedIn ? (
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 hover:bg-primary/20 transition-all"
              >
                <User className="h-5 w-5" />
              </button>
              
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-2xl border border-border shadow-xl p-2 animate-in fade-in zoom-in duration-200">
                  <div className="px-4 py-2 border-b border-border mb-2">
                    <p className="text-xs font-bold text-slate-500 uppercase">Account</p>
                    <p className="text-sm font-bold truncate">John Doe</p>
                  </div>
                  <Link 
                    href="#" 
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <User className="h-4 w-4" /> Profile
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  >
                    <LogOut className="h-4 w-4" /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link 
              href="/login" 
              className="hidden md:block text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
            >
              Sign In
            </Link>
          )}

          <Link 
            href="/donate" 
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold hover:scale-[1.05] active:scale-[0.95] transition-all shadow-lg shadow-primary/20"
          >
            Donate
          </Link>
        </div>
      </div>
    </header>
  )
}
