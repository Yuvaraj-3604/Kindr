"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BarChart3, Fingerprint, Search, TrendingUp, Users2, HeartHandshake } from "lucide-react"

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Our Impact, <br /><span className="text-primary">Measured.</span></h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                At Kindr, transparency isn&apos;t just a buzzword—it&apos;s our foundation. We track every dollar and measure every outcome to ensure your generosity changes lives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* High Level Stats */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">100% Transparency</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Every program provides monthly financial reports and progress updates accessible to all donors.
                </p>
              </div>
              <div className="space-y-4">
                <div className="h-12 w-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Fingerprint className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Direct Verification</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  We use independent on-the-ground auditors to verify project milestones and fund allocation.
                </p>
              </div>
              <div className="space-y-4">
                <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Search className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Impact Reports</h3>
                <p className="text-slate-500 dark:text-slate-400">
                  Detailed annual impact reports showcasing stories of change and data-driven results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-2xl font-medium text-slate-700 dark:text-slate-200 italic leading-relaxed">
                &quot;To revolutionize charitable giving by creating a seamless, transparent, and community-driven platform that connects hearts to causes, ensuring every gift makes a maximum, measurable impact.&quot;
              </p>
              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="h-1 w-12 bg-primary rounded-full"></div>
                <HeartHandshake className="h-8 w-8 text-primary" />
                <div className="h-1 w-12 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Visualization Mockup */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-12 border border-border shadow-2xl shadow-primary/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Allocation of Funds</h2>
                  <p className="text-slate-500 dark:text-slate-400 mb-8">
                    We keep our overhead low to ensure your donation goes where it&apos;s needed most.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-bold">
                        <span>Direct Program Support</span>
                        <span>88%</span>
                      </div>
                      <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[88%]"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-bold">
                        <span>Fundraising & Awareness</span>
                        <span>7%</span>
                      </div>
                      <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-secondary w-[7%]"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-bold">
                        <span>Administration</span>
                        <span>5%</span>
                      </div>
                      <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-400 w-[5%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl aspect-square relative overflow-hidden group">
                   <Image 
                    src="/impact-chart.png"
                    alt="Fund Allocation Chart"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stories of Change */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Stories of Change</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  category: "Education",
                  title: "How digital literacy changed Maria's future.",
                  description: "Maria used to walk 10km to access a computer. Now, with a tablet from Kindr, she's learning to code and dreams of becoming an engineer.",
                  image: "/stories/maria.png"
                },
                {
                  category: "Health",
                  title: "Clean water: A new chapter for the Aruna village.",
                  description: "With the installation of a solar-powered well, waterborne diseases have dropped by 90%, allowing children to return to school.",
                  image: "/stories/water.png"
                }
              ].map((story, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-border flex flex-col md:flex-row gap-8 items-center group overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 w-48 rounded-2xl relative overflow-hidden shrink-0">
                    <Image 
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="200px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Users2 className="h-4 w-4 text-primary" />
                      <span className="text-xs font-bold text-primary uppercase">{story.category}</span>
                    </div>
                    <h3 className="text-xl font-bold">{story.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {story.description}
                    </p>
                    <Link 
                      href={`/stories/${i === 0 ? 'maria-literacy' : 'aruna-water'}`} 
                      className="text-primary font-bold text-sm hover:underline inline-block"
                    >
                      Read Full Story
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
