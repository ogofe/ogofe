import { Github, Youtube, Mail, Facebook, Phone, Instagram, Twitter, Linkedin, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="relative h-[396px] w-[1584px] bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.02] [mask-image:linear-gradient(0deg,transparent,black)]" />
      
      {/* Content Container */}
      <div className="relative flex items-center justify-between px-24 py-12 h-full">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900">
              Hi, I'm Joel
            </h1>
            <p className="text-2xl text-gray-600">
              Fullstack Software Developer
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <Button variant="outline" size="icon" className="rounded-full">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </a>
            <a href="mailto:contact@example.com" className="transition-transform hover:scale-110">
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
            </a>
            <a href="tel:+1234567890" className="transition-transform hover:scale-110">
              <Button variant="outline" size="icon" className="rounded-full">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Button>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
              <Button variant="outline" size="icon" className="rounded-full">
                <FileText className="h-5 w-5" />
                <span className="sr-only">Resume</span>
              </Button>
            </a>
          </div>
          
          <p className="text-gray-600">
            Let's connect! Reach out via any of my social media channels.
          </p>
        </div>

        {/* Right Content - Profile Image */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 blur-lg opacity-75" />
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="relative h-64 w-64 rounded-full object-cover border-4 border-white shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}

