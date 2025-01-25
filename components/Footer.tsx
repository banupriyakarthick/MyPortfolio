import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} Banupriya C. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/in/banu-priya-189414144" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

