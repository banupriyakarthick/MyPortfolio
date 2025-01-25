import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"

const projects = [
  {
    title: "Dhofar Global",
    description:
      "Developed and maintained the Dhofar Global e-commerce platform using React and PHP Laravel, enhancing the site's performance and user experience.",
    startDate: new Date(2024, 0, 1), // January 1, 2024
    endDate: new Date(), // Current date
    technologies: ["React", "PHP Laravel", "PostgreSQL", "MySQL", "RESTful APIs"],
    link: "https://www.dhofarglobal.com/",
  },
  {
    title: "Careerx",
    description:
      "Built a robust platform using Node.js, Angular 7, and MySQL for grocery and food delivery with real-time order tracking.",
    startDate: new Date(2022, 11, 1), // December 1, 2022
    endDate: new Date(2023, 11, 31), // December 31, 2023
    technologies: ["Node.js", "Angular 7", "MySQL"],
    link: "#",
  },
  {
    title: "Choose Cubby",
    description:
      "Developed a scalable luggage storage platform for travelers using Node.js, Angular 7, and MySQL with booking, payment, and map-based navigation.",
    startDate: new Date(2021, 0, 1), // January 1, 2021
    endDate: new Date(2021, 11, 31), // December 31, 2021
    technologies: ["Node.js", "Angular 7", "MySQL"],
    link: "https://stasher.com/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  {format(project.startDate, "MMM yyyy")} - {format(project.endDate, "MMM yyyy")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

