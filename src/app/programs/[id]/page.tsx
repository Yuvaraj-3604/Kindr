"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Calendar, MapPin, Share2, Heart, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const mockPrograms = {
  "1": {
    title: "Digital Literacy for All",
    category: "Education",
    description: "Access to technology is no longer a luxury—it's a basic necessity for education and career advancement. This program aims to bridge the digital divide by providing tablets, reliable internet access, and comprehensive digital skills training to over 5,000 students in rural communities.",
    fullStory: "In many rural areas, students fall behind their urban counterparts because they lack the tools to participate in the digital economy. Our initiative doesn't just give out hardware; we provide a curriculum that covers everything from basic computer operations to coding and digital safety. We partner with local schools to ensure the technology is integrated into their daily learning, creating a sustainable ecosystem of digital education.",
    goal: 50000,
    raised: 40000,
    donors: 1240,
    location: "Global South",
    impact: [
      "5,000+ students with individual learning devices",
      "25 schools equipped with high-speed satellite internet",
      "100+ teachers trained in digital pedagogy",
      "Ongoing technical support for 3 years"
    ]
  },
  // Add other mocks if needed, or default to 1
}

export default function ProgramDetailPage() {
  const { id } = useParams()
  const program = mockPrograms[id as keyof typeof mockPrograms] || mockPrograms["1"]
  
  const fundedPercentage = Math.round((program.raised / program.goal) * 100)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumbs & Back */}
        <div className="bg-slate-50 dark:bg-slate-900/50 py-4 border-b border-border">
          <div className="container mx-auto px-4">
            <Link href="/programs" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to Programs
            </Link>
          </div>
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="space-y-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                    {program.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{program.title}</h1>
                  <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> {program.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> Started March 2026
                    </div>
                  </div>
                </div>

                <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    [Main Program Image]
                  </div>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4">The Story</h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {program.fullStory}
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-border">
                  <h3 className="text-xl font-bold mb-6">Key Impact Goals</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.impact.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-slate-600 dark:text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar / Donation Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="glass-card p-8 rounded-3xl border border-border shadow-2xl shadow-primary/5">
                    <div className="mb-8">
                      <div className="flex justify-between items-end mb-2">
                        <h3 className="text-3xl font-extrabold">${program.raised.toLocaleString('en-US')}</h3>
                        <span className="text-slate-500 text-sm font-medium">raised of ${program.goal.toLocaleString('en-US')}</span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${fundedPercentage}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(13,148,136,0.3)]"
                        ></motion.div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-bold text-primary">{fundedPercentage}% Funded</span>
                        <span className="font-medium text-slate-500">{program.donors.toLocaleString('en-US')} Donors</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Link 
                        href="/donate" 
                        className="block w-full py-4 rounded-2xl bg-primary text-white text-center font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20"
                      >
                        Donate Now
                      </Link>
                      <button className="w-full py-4 rounded-2xl border border-border font-bold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <Share2 className="h-5 w-5" /> Share Cause
                      </button>
                    </div>

                    <div className="mt-8 pt-8 border-t border-border">
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-8 w-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700"></div>
                          ))}
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                          Joined by 1,240 others this week
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-secondary/10 rounded-2xl border border-secondary/20">
                    <div className="flex gap-4">
                      <Heart className="h-6 w-6 text-secondary fill-current shrink-0" />
                      <div>
                        <h4 className="font-bold text-secondary-foreground text-sm">Recurring Impact</h4>
                        <p className="text-xs text-secondary-foreground/70 mt-1">
                          Set up a monthly gift to provide long-term stability for this program.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
