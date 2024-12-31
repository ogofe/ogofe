"use client"
import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Smartphone, Database, Cloud, Code2 } from 'lucide-react'

const skills = {
  web: {
    title: "Web Development & API Design",
    description: "As a Web Developer I'm tasked with handling the backend and frontend of applications. Designing and building efficient APIs for providing an easier flow of data between server and client side.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "REST API", "GraphQL"],
    icon: <Globe className="w-5 h-5" />
  },
  mobile: {
    title: "Mobile Development",
    description: "Creating responsive and intuitive mobile applications using modern frameworks and native development tools.",
    technologies: ["React Native", "Flutter", "iOS", "Android", "Mobile UI/UX", "App Store Deployment"],
    icon: <Smartphone className="w-5 h-5" />
  },
  blockchain: {
    title: "Decentralized Applications",
    description: "Building decentralized applications and smart contracts on various blockchain platforms.",
    technologies: ["Ethereum", "Solidity", "Web3.js", "Smart Contracts", "DeFi", "NFTs"],
    icon: <Database className="w-5 h-5" />
  },
  cloud: {
    title: "Deployment & Cloud Architecture",
    description: "Implementing and managing cloud infrastructure for scalable applications.",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "DevOps", "Microservices"],
    icon: <Cloud className="w-5 h-5" />
  }
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("web")

  return (
    <div className="min-h-screen p-8 pt-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          My Skills
        </h1>

        <Tabs defaultValue="web" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-transparent h-auto p-0">
            {Object.entries(skills).map(([key, { title, icon }]) => (
              <TabsTrigger
                key={key}
                value={key}
                className={`
                  flex items-center gap-2 p-4 rounded-lg border border-gray-200
                  data-[state=active]:bg-white data-[state=active]:shadow-md
                  transition-all duration-200
                `}
              >
                {icon}
                <span className="hidden sm:inline">{title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(skills).map(([key, { title, description, technologies }]) => (
            <TabsContent key={key} value={key} className="mt-6">
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-6 h-6 text-purple-600" />
                    <h2 className="text-2xl font-semibold">{title}</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {description}
                  </p>
                  <div className="pt-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Technologies & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="secondary" 
                          className="bg-purple-100 text-purple-800 hover:bg-purple-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Tech Stack Icons */}
        <div className="pt-12">
          <h3 className="text-xl font-semibold text-center mb-6">Languages and Tech Stacks I use</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <img src="/tech/python.svg" alt="Python" className="h-12 w-12" />
            <img src="/tech/javascript.svg" alt="JavaScript" className="h-12 w-12" />
            <img src="/tech/html5.svg" alt="HTML5" className="h-12 w-12" />
            <img src="/tech/css3.svg" alt="CSS3" className="h-12 w-12" />
            <img src="/tech/react.svg" alt="React" className="h-12 w-12" />
            <img src="/tech/mongodb.svg" alt="MongoDB" className="h-12 w-12" />
          </div>
        </div>
      </div>
    </div>
  )
}

