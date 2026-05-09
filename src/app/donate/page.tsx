"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { CreditCard, Heart, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react"

const amounts = [25, 50, 100, 250, 500]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50)
  const [customAmount, setCustomAmount] = useState("")
  const [selectedProgram, setSelectedProgram] = useState("Digital Literacy for All")
  const [frequency, setFrequency] = useState("one-time")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const programs = [
    "Digital Literacy for All",
    "Clean Water Initiative",
    "Urban Reforestation",
    "Emergency Food Relief",
    "Maternal Health Support",
    "Solar for Schools"
  ]

  const handleDonate = () => {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-16 bg-slate-50 dark:bg-slate-950">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] border border-border shadow-2xl text-center max-w-md mx-4"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-extrabold mb-4">Thank You!</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">
              Your donation of <span className="font-bold text-slate-900 dark:text-white">${selectedAmount || customAmount}</span> to <span className="font-bold text-primary">{selectedProgram}</span> has been processed successfully. You&apos;re making a real difference.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full py-4 rounded-2xl bg-primary text-white font-bold hover:opacity-90 transition-opacity"
            >
              Back to Home
            </button>
          </motion.div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-slate-50 dark:bg-slate-950 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Left side: Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-extrabold mb-4">Your contribution matters.</h1>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  Join thousands of donors who are making a real impact. 100% of your donation (minus processing fees) goes directly to the program.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Secure Payment</h4>
                    <p className="text-xs text-slate-500 mt-1">Your data is encrypted and secure with industry-standard protocols.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-secondary/10 p-2 rounded-lg">
                    <Heart className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Tax Deductible</h4>
                    <p className="text-xs text-slate-500 mt-1">We are a registered 501(c)(3) nonprofit organization.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-border">
                <blockquote className="italic text-slate-600 dark:text-slate-300 text-sm mb-4">
                  &quot;I donate to Kindr because I can see exactly where my money is going and the impact it&apos;s having on real families.&quot;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-200"></div>
                  <div>
                    <p className="font-bold text-xs">Sarah Jenkins</p>
                    <p className="text-[10px] text-slate-400">Monthly Donor since 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Donation Form */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-border shadow-2xl shadow-primary/5">
                
                {/* Frequency Switch */}
                <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mb-8">
                  <button 
                    onClick={() => setFrequency("one-time")}
                    className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${frequency === "one-time" ? "bg-white dark:bg-slate-700 shadow-sm text-primary" : "text-slate-500"}`}
                  >
                    Give One-Time
                  </button>
                  <button 
                    onClick={() => setFrequency("monthly")}
                    className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${frequency === "monthly" ? "bg-white dark:bg-slate-700 shadow-sm text-primary" : "text-slate-500"}`}
                  >
                    Give Monthly
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-bold mb-4">Select a program</label>
                    <select 
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full px-4 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 focus:border-primary focus:outline-none transition-all font-medium appearance-none bg-white dark:bg-slate-900"
                    >
                      {programs.map(p => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-4">Choose an amount</label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {amounts.map(amount => (
                        <button
                          key={amount}
                          onClick={() => {setSelectedAmount(amount); setCustomAmount("")}}
                          className={`py-4 rounded-xl border-2 font-bold transition-all ${
                            selectedAmount === amount 
                            ? "border-primary bg-primary/5 text-primary" 
                            : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700"
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">$</span>
                      <input 
                        type="number" 
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value)
                          setSelectedAmount(null)
                        }}
                        className="w-full pl-8 pr-4 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 focus:border-primary focus:outline-none transition-all font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-4">Payment Details</label>
                    <div className="space-y-4">
                      <div className="relative">
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input 
                          type="text" 
                          placeholder="Card number"
                          className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 focus:border-primary focus:outline-none transition-all"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          placeholder="MM / YY"
                          className="w-full px-4 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 focus:border-primary focus:outline-none transition-all"
                        />
                        <input 
                          type="text" 
                          placeholder="CVC"
                          className="w-full px-4 py-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 focus:border-primary focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleDonate}
                    disabled={isSubmitting}
                    className="w-full py-5 rounded-2xl bg-primary text-white font-bold text-xl hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </span>
                    ) : (
                      <>Complete Donation <ArrowRight className="h-6 w-6" /></>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    By clicking complete, you agree to our terms and privacy policy.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
