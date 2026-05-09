"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { use } from "react"
import { ArrowLeft, Calendar, User, Share2, Heart } from "lucide-react"

const storyData = {
  "maria-literacy": {
    title: "How digital literacy changed Maria's future.",
    category: "Education",
    date: "May 12, 2026",
    author: "Elena Rodriguez",
    heroImage: "/stories/maria.png",
    content: [
      {
        type: "paragraph",
        text: "Maria used to walk 10km to access a computer. In her small village, technology was a distant luxury that few could afford. For years, her only source of information was a few outdated textbooks and the stories told by elders."
      },
      {
        type: "image",
        src: "/stories/coding.png",
        caption: "Maria mastering the basics of Python programming."
      },
      {
        type: "paragraph",
        text: "When Kindr's 'Digital Literacy for All' program arrived, Maria was one of the first to sign up. Armed with a modern tablet and a reliable internet connection, a whole new world opened up to her. She didn't just learn to browse the web; she learned to build it."
      },
      {
        type: "paragraph",
        text: "Today, Maria is a top student in her online coding bootcamp. She dreams of becoming a software engineer and building tools that will help her community thrive. Her journey is a testament to what happens when we bridge the digital divide."
      }
    ]
  },
  "aruna-water": {
    title: "Clean water: A new chapter for the Aruna village.",
    category: "Health",
    date: "April 28, 2026",
    author: "David Chen",
    heroImage: "/stories/water.png",
    content: [
      {
        type: "paragraph",
        text: "The Aruna village has struggled with water scarcity for generations. The nearest water source was a contaminated river miles away, leading to frequent outbreaks of waterborne diseases that disproportionately affected children."
      },
      {
        type: "image",
        src: "/stories/solar-well.png",
        caption: "The new solar-powered filtration system providing 5000 liters of clean water daily."
      },
      {
        type: "paragraph",
        text: "Kindr's Clean Water Initiative changed everything. By installing a solar-powered well and filtration system, we brought safe, potable water directly to the heart of the village. The impact was immediate: waterborne diseases dropped by 90% within the first three months."
      },
      {
        type: "paragraph",
        text: "With the time saved from long walks to the river, children are back in school, and the village has started a community garden, improving both health and nutrition. This is the power of clean water."
      }
    ]
  }
}

export default function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const story = storyData[slug as keyof typeof storyData]

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Story not found</h1>
            <Link href="/impact" className="text-primary hover:underline">Back to Impact</Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-white dark:bg-slate-950">
        {/* Article Header */}
        <div className="relative h-[60vh] w-full">
          <Image 
            src={story.heroImage}
            alt={story.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl"
              >
                <Link 
                  href="/impact" 
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to Impact
                </Link>
                <span className="block text-primary font-bold uppercase tracking-wider text-sm mb-4">
                  {story.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                  {story.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> {story.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" /> By {story.author}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-12 py-6 border-y border-border">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium">
                  <Share2 className="h-5 w-5" /> Share Story
                </button>
              </div>
              <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/10 text-primary font-bold hover:bg-primary/20 transition-all">
                <Heart className="h-5 w-5 fill-current" /> Support this Cause
              </button>
            </div>

            <div className="space-y-10">
              {story.content.map((block, i) => {
                if (block.type === "paragraph") {
                  return (
                    <p key={i} className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                      {block.text}
                    </p>
                  )
                }
                if (block.type === "image") {
                  return (
                    <figure key={i} className="space-y-3">
                      <div className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-border">
                        <Image 
                          src={block.src!}
                          alt={block.caption!}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="text-center text-sm text-slate-500 italic">
                        {block.caption}
                      </figcaption>
                    </figure>
                  )
                }
                return null
              })}
            </div>

            <div className="mt-20 p-10 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-border text-center">
              <h2 className="text-2xl font-bold mb-4">Want to help create more stories like this?</h2>
              <p className="text-slate-500 mb-8">
                Your contribution can bridge the gap and provide essential resources to those who need them most.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/donate" 
                  className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20"
                >
                  Donate to this Program
                </Link>
                <Link 
                  href="/programs" 
                  className="w-full sm:w-auto px-10 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl border border-border hover:bg-slate-50 transition-all"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
