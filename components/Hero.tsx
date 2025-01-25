import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-10 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image src="/placeholder.svg" alt="Banupriya C" width={300} height={300} className="rounded-full mx-auto" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Banupriya C</h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">Full Stack Developer</h2>
          <p className="text-lg text-gray-700 mb-8">
            Passionate about building scalable web and mobile applications using React, Angular, and PHP Laravel. With
            4+ years of experience, I specialize in creating responsive, user-friendly interfaces and optimizing
            application performance.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/banu-priya-189414144" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

