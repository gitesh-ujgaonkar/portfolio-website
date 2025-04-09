"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=600" alt="AI Developer" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent inline-block">
              AI Developer & Web Specialist
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate AI developer with expertise in creating intelligent web applications. With a strong
              foundation in both artificial intelligence and web development, I bridge the gap between cutting-edge AI
              technology and user-friendly web experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              My journey in tech began with a fascination for how AI could transform the web. Today, I specialize in
              developing AI-powered solutions that solve real-world problems while maintaining beautiful, responsive,
              and accessible user interfaces.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-md">
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg mb-1">5+</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-md">
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg mb-1">50+</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-md">
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg mb-1">30+</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-md">
                <CardContent className="p-4">
                  <h4 className="font-bold text-lg mb-1">15+</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">AI Models Deployed</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

