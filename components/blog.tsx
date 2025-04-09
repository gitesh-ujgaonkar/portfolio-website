"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of AI in Web Development",
    excerpt:
      "Exploring how artificial intelligence is transforming the way we build and interact with web applications.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 15, 2023",
    readTime: "5 min read",
    link: "#",
  },
  {
    title: "Building Responsive UIs with React and Tailwind",
    excerpt: "A comprehensive guide to creating beautiful, responsive user interfaces using React and Tailwind CSS.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 22, 2023",
    readTime: "7 min read",
    link: "#",
  },
  {
    title: "Optimizing AI Models for Web Applications",
    excerpt: "Learn how to optimize machine learning models for deployment in web applications with minimal latency.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 10, 2023",
    readTime: "6 min read",
    link: "#",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Insights and tutorials on AI, web development, and emerging technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    <Link href={post.link}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{post.excerpt}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="mt-auto self-start hover:bg-purple-100 dark:hover:bg-purple-900/30"
                  >
                    <Link href={post.link} className="inline-flex items-center">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="#" className="inline-flex items-center">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

