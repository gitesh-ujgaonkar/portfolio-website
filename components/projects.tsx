"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = ["All", "AI", "Web", "Mobile", "Data Science"]

const projects = [
  {
    title: "AI Content Generator",
    description:
      "A powerful content generation platform using GPT-4 to create blog posts, marketing copy, and social media content.",
    image: "/placeholder.svg?height=600&width=800",
    category: "AI",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Smart E-commerce Platform",
    description:
      "An e-commerce solution with AI-powered product recommendations and personalized shopping experiences.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Stripe", "TensorFlow.js"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Computer Vision App",
    description:
      "Mobile application that uses computer vision to identify objects and provide information in real-time.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Mobile",
    tags: ["React Native", "TensorFlow Lite", "Firebase", "Python"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with AI-powered insights and predictions.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Data Science",
    tags: ["D3.js", "Python", "Flask", "Pandas", "Scikit-learn"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "AI Chatbot Platform",
    description: "Customizable chatbot platform with natural language understanding and integration capabilities.",
    image: "/placeholder.svg?height=600&width=800",
    category: "AI",
    tags: ["React", "Node.js", "NLP", "WebSockets"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Responsive Web Application",
    description: "Modern web application with responsive design, animations, and seamless user experience.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web",
    tags: ["React", "Tailwind CSS", "Framer Motion", "GraphQL"],
    demoLink: "#",
    githubLink: "#",
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-8">
            Explore my latest work combining AI technology with modern web development.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <span className="inline-block px-2 py-1 text-xs font-semibold bg-purple-600 text-white rounded-md mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-white font-bold text-lg">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between mt-auto">
                    <Button asChild variant="ghost" size="sm">
                      <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" /> Demo
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" /> Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="#" className="inline-flex items-center">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

