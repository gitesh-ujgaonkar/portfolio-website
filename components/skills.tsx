"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, Globe, Layout, Sparkles, Cpu, LineChart } from "lucide-react"

const skills = [
  {
    category: "AI & Machine Learning",
    icon: <Brain className="h-8 w-8 text-purple-600" />,
    items: ["TensorFlow", "PyTorch", "Natural Language Processing", "Computer Vision", "Reinforcement Learning"],
  },
  {
    category: "Web Development",
    icon: <Globe className="h-8 w-8 text-pink-500" />,
    items: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL"],
  },
  {
    category: "UI/UX Design",
    icon: <Layout className="h-8 w-8 text-amber-500" />,
    items: ["Figma", "Responsive Design", "Animation", "Accessibility", "User Testing"],
  },
  {
    category: "Backend & Infrastructure",
    icon: <Database className="h-8 w-8 text-teal-500" />,
    items: ["AWS", "Docker", "Kubernetes", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Programming Languages",
    icon: <Code className="h-8 w-8 text-blue-500" />,
    items: ["JavaScript", "Python", "TypeScript", "Go", "Rust"],
  },
  {
    category: "AI Integration",
    icon: <Cpu className="h-8 w-8 text-indigo-500" />,
    items: ["OpenAI API", "Hugging Face", "LangChain", "Vector Databases", "Embeddings"],
  },
  {
    category: "Data Science",
    icon: <LineChart className="h-8 w-8 text-green-500" />,
    items: ["Data Visualization", "Statistical Analysis", "Pandas", "NumPy", "Jupyter"],
  },
  {
    category: "Emerging Tech",
    icon: <Sparkles className="h-8 w-8 text-yellow-500" />,
    items: ["Web3", "AR/VR", "Edge Computing", "IoT", "Generative AI"],
  },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            My diverse skill set allows me to build complete AI-powered web solutions from concept to deployment.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 p-2 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-lg">{skill.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

