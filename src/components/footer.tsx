import Link from "next/link"
import { Heart, Github, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary fill-current" />
              <span className="text-xl font-bold tracking-tight">Kindr</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Making the world a better place through transparent, impactful, and seamless giving.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              <Github className="h-5 w-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/programs" className="hover:text-primary transition-colors">Discover Programs</Link></li>
              <li><Link href="/impact" className="hover:text-primary transition-colors">Impact & Mission</Link></li>
              <li><Link href="/donate" className="hover:text-primary transition-colors">Donate Now</Link></li>
              <li><Link href="/login" className="hover:text-primary transition-colors">Sign In</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Transparency Report</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Stay updated with our latest impact stories.</p>
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-white dark:bg-slate-800 border border-border rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Kindr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
