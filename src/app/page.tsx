"use client"

import { AuthForm } from "@/components/auth/auth-form"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShieldCheck, Zap, Globe } from "lucide-react"

export default function LoginPage() {
  const handleSuccess = () => {
    window.location.href = "/programs"
  }

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Left Side: Visual/Brand (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/login-hero.png"
            alt="Kindr Community"
            fill
            sizes="50vw"
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-primary/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full p-16 flex flex-col justify-between">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-12"
            >
              <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary fill-primary" />
              </div>
              <span className="text-3xl font-black text-white tracking-tighter">Kindr.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-xl"
            >
              <h2 className="text-5xl font-bold text-white leading-[1.1] mb-6">
                Changing lives through the power of <span className="text-white/70 italic">collective kindness.</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Join over 50,000 donors worldwide who are making a real difference in local communities every single day.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-8"
          >
            {[
              { icon: Globe, label: "Global Reach", detail: "Active in 120+ countries" },
              { icon: ShieldCheck, label: "100% Secure", detail: "Verified impact programs" },
              { icon: Zap, label: "Instant Impact", detail: "Real-time donation tracking" },
              { icon: Heart, label: "Pure Giving", detail: "0% platform fees for donors" },
            ].map((feature, i) => (
              <div key={i} className="flex gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{feature.label}</h3>
                  <p className="text-white/60 text-xs">{feature.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-24 -right-24 h-96 w-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -left-12 h-64 w-64 bg-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Right Side: Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 relative">
        {/* Mobile Header (Hidden on Desktop) */}
        <div className="lg:hidden absolute top-8 left-8 flex items-center gap-2">
           <Heart className="h-6 w-6 text-primary fill-primary" />
           <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">Kindr.</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <AuthForm onSuccess={handleSuccess} />
        </motion.div>

        {/* Footer info for form side */}
        <div className="mt-12 text-slate-400 text-xs text-center max-w-xs">
          By continuing, you agree to Kindr&apos;s <Link href="#" className="underline hover:text-slate-600 transition-colors">Terms of Service</Link> and <Link href="#" className="underline hover:text-slate-600 transition-colors">Privacy Policy</Link>.
        </div>
      </div>
    </div>
  )
}
