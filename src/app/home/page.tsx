"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ArrowRight, Users, Globe, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/hero_donation_impact_1778302510065.png" 
              alt="Volunteers working together"
              fill
              className="object-cover opacity-20 dark:opacity-10 grayscale"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                Empowering Communities
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                Change the world <br />
                <span className="text-gradient">one gift at a time.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Kindr connects you with vetted programs that drive real impact. Transparent, simple, and effective giving for everyone.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/programs" 
                  className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-primary/20"
                >
                  Discover Programs <ArrowRight className="h-5 w-5" />
                </Link>
                <Link 
                  href="/impact" 
                  className="w-full sm:w-auto bg-slate-100 dark:bg-slate-800 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  See Our Impact
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Vetted & Verified</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Every program on Kindr undergoes a rigorous vetting process to ensure maximum impact.
                </p>
              </div>
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Global Reach</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Support causes from local community gardens to international humanitarian aid.
                </p>
              </div>
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Community Driven</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Join a community of over 50,000 donors making a tangible difference every day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Programs (Mockup) */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Featured Programs</h2>
                <p className="text-slate-500 dark:text-slate-400">Urgent causes that need your support today.</p>
              </div>
              <Link href="/programs" className="text-primary font-semibold hover:underline flex items-center gap-1">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-300">
                  <div className="h-48 bg-slate-200 dark:bg-slate-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      [Program Image {i}]
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">Education</span>
                      <span className="text-xs font-medium text-slate-500">80% Funded</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Digital Literacy for All</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">
                      Providing tablets and internet access to underprivileged students in rural communities.
                    </p>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full mb-6 overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-[80%]"></div>
                    </div>
                    <Link 
                      href={`/programs/${i}`} 
                      className="block text-center py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-16">The Impact We&apos;ve Made</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-extrabold">$12.4M</div>
                <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-xs">Total Donated</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-extrabold">240+</div>
                <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-xs">Active Programs</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-extrabold">50K+</div>
                <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-xs">Active Donors</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-extrabold">12</div>
                <p className="text-primary-foreground/80 font-medium uppercase tracking-widest text-xs">Countries Reached</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
