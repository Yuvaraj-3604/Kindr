"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Search, Filter, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const categories = ["All", "Education", "Health", "Environment", "Crisis Relief", "Technology"]

const mockPrograms = [
  {
    id: 1,
    title: "Digital Literacy for All",
    category: "Education",
    description: "Providing tablets and internet access to underprivileged students in rural communities.",
    image: "/programs/digital-literacy.png",
    funded: 80,
    goal: 50000,
    raised: 40000,
  },
  {
    id: 2,
    title: "Clean Water Initiative",
    category: "Environment",
    description: "Building sustainable water filtration systems in coastal villages.",
    image: "/programs/clean-water.png",
    funded: 45,
    goal: 25000,
    raised: 11250,
  },
  {
    id: 3,
    title: "Urban Reforestation",
    category: "Environment",
    description: "Planting 10,000 native trees across metropolitan areas to combat heat islands.",
    image: "/programs/reforestation.png",
    funded: 62,
    goal: 15000,
    raised: 9300,
  },
  {
    id: 4,
    title: "Emergency Food Relief",
    category: "Crisis Relief",
    description: "Delivering nutritious meals to families displaced by recent natural disasters.",
    image: "/programs/food-relief.png",
    funded: 92,
    goal: 100000,
    raised: 92000,
  },
  {
    id: 5,
    title: "Maternal Health Support",
    category: "Health",
    description: "Providing prenatal care and supplies to mothers in underserved regions.",
    image: "/programs/maternal-health.png",
    funded: 30,
    goal: 35000,
    raised: 10500,
  },
  {
    id: 6,
    title: "Solar for Schools",
    category: "Technology",
    description: "Installing solar panels in public schools to reduce energy costs and promote green energy.",
    image: "/programs/solar-schools.png",
    funded: 15,
    goal: 60000,
    raised: 9000,
  }
]

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPrograms = mockPrograms.filter(p => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-slate-50 dark:bg-slate-950">
        <section className="py-16 bg-white dark:bg-slate-900 border-b border-border">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">Discover Programs</h1>
            
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search programs..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-2 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      selectedCategory === cat 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-border group hover:shadow-2xl hover:shadow-primary/5 transition-all"
                >
                  <div className="h-48 relative overflow-hidden">
                    <Image 
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-full text-xs font-bold text-primary shadow-sm">
                      {program.category}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">
                      {program.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <div className="space-y-1">
                          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Raised</p>
                          <p className="font-bold text-lg">${program.raised.toLocaleString('en-US')}</p>
                        </div>
                        <div className="text-right space-y-1">
                          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Goal</p>
                          <p className="font-semibold text-slate-600 dark:text-slate-300">${program.goal.toLocaleString('en-US')}</p>
                        </div>
                      </div>
                      
                      <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${program.funded}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-primary rounded-full"
                        ></motion.div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-primary">{program.funded}% Funded</span>
                        <Link 
                          href={`/programs/${program.id}`}
                          className="flex items-center gap-1 text-sm font-semibold hover:underline"
                        >
                          View Details <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border-t border-border">
                    <Link 
                      href="/donate" 
                      className="block w-full py-3 rounded-xl bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold text-center hover:opacity-90 transition-opacity"
                    >
                      Donate Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredPrograms.length === 0 && (
              <div className="text-center py-24">
                <p className="text-slate-500">No programs found matching your criteria.</p>
                <button 
                  onClick={() => {setSelectedCategory("All"); setSearchQuery("")}}
                  className="text-primary font-bold mt-4 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
