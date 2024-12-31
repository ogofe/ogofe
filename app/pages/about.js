"use client"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Coffee, Gamepad, Brain, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h1>

        {/* Profile Section */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 blur-lg opacity-75 w-48 h-48 mx-auto" />
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="relative w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-xl mb-8"
          />
        </div>

        {/* Bio Cards */}
        <div className="grid gap-6">
          <Card className="p-6 backdrop-blur-sm bg-white/80">
            <div className="flex items-start gap-4">
              <Code2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                I'm a 20 year old African Developer, born and raised in Nigeria. I am passionate about my work, 
                I pay attention to detail, and my main focus is taking complex solutions and making them easy 
                and intuitive for the average web user.
              </p>
            </div>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-white/80">
            <div className="flex items-start gap-4">
              <Gamepad className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                As a kid I developed an interest in computer games, soon enough I wanted to make my own, 
                which brought me to code. But it wasn't until June 2017 when I discovered Python - which was 
                interesting since its named after a circus - that I got serious about building my own solutions 
                to common day problems.
              </p>
            </div>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-white/80">
            <div className="flex items-start gap-4">
              <Brain className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                I am also an avid problem solver and a perfectionist. I find myself constantly trying to improve 
                a product or fix a problem, even when it's already working well enough.
              </p>
            </div>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="py-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            Skills & Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
              JavaScript
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
              React
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
              Python
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
              Web Development
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
              Problem Solving
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
              UI/UX Design
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
              Game Development
            </Badge>
          </div>
        </div>

        {/* Coffee Section */}
        <div className="text-center py-8">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Coffee className="w-5 h-5" />
            <p>Fueled by coffee and curiosity</p>
          </div>
        </div>
      </div>
    </div>
  )
}

