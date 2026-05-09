"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Lock, User, ArrowRight, Github, Chrome, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

interface AuthFormProps {
  onSuccess: () => void;
}

export function AuthForm({ onSuccess }: AuthFormProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleToggle = () => {
    setIsLogin(!isLogin)
    setMessage(null)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    if (isLogin) {
      // For development: allow any credentials to proceed to the dashboard
      localStorage.setItem("kindr_auth", "true")
      onSuccess()
    } else {
      setMessage({ type: 'success', text: "Account created! You can now sign in." })
      setIsLogin(true)
      setIsLoading(false)
    }
  }

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true)
    setMessage({ type: 'success', text: `Connecting to ${provider}...` })
    
    // Simulate social auth provider delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    localStorage.setItem("kindr_auth", "true")
    onSuccess()
  }

  const fillDemo = () => {
    setFormData({
      name: "Demo User",
      email: "demo@kindr.org",
      password: "password123"
    })
    setMessage({ type: 'success', text: "Demo credentials filled!" })
    setTimeout(() => setMessage(null), 2000)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <motion.h1 
          key={isLogin ? "login-title" : "signup-title"}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2"
        >
          {isLogin ? "Welcome back" : "Create account"}
        </motion.h1>
        <p className="text-slate-500 dark:text-slate-400">
          {isLogin ? "Enter your credentials to access your account" : "Join our community of givers today"}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {message && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`mb-6 p-4 rounded-xl text-sm font-medium border ${
              message.type === 'success' 
                ? 'bg-emerald-50 border-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400' 
                : 'bg-rose-50 border-rose-100 text-rose-700 dark:bg-rose-500/10 dark:border-rose-500/20 dark:text-rose-400'
            }`}
          >
            {message.text}
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
          </motion.div>
        )}

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>

        {isLogin && (
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer" />
              <span className="text-slate-500 group-hover:text-slate-700 transition-colors">Remember me</span>
            </label>
            <button type="button" className="text-primary font-semibold hover:underline decoration-2 underline-offset-4">
              Forgot password?
            </button>
          </div>
        )}

        <div className="pt-2 space-y-3">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-4 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary/90 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>{isLogin ? "Sign in" : "Create account"} <ArrowRight className="h-5 w-5" /></>
            )}
          </button>

          {isLogin && (
            <button
              type="button"
              onClick={fillDemo}
              className="w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all"
            >
              Try with Demo Account
            </button>
          )}
        </div>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-slate-50 dark:bg-slate-950 px-4 text-slate-500 font-medium">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button 
          type="button"
          disabled={isLoading}
          onClick={() => handleSocialLogin("Google")}
          className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-semibold text-sm disabled:opacity-50"
        >
          <Chrome className="h-5 w-5 text-slate-700 dark:text-slate-300" />
          Google
        </button>
        <button 
          type="button"
          disabled={isLoading}
          onClick={() => handleSocialLogin("GitHub")}
          className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-semibold text-sm disabled:opacity-50"
        >
          <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
          GitHub
        </button>
      </div>

      <p className="text-center mt-10 text-slate-500 dark:text-slate-400 text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={handleToggle}
          className="text-primary font-bold hover:underline decoration-2 underline-offset-4"
        >
          {isLogin ? "Sign up" : "Sign in"}
        </button>
      </p>
    </div>
  )
}
