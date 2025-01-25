import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    degree: "B.Sc. in Information Technology",
    institution: "Dr. SNS Rajalakshmi College of Arts and Science",
    location: "Coimbatore, India",
    duration: "Aug 2014 - May 2017",
    grade: "84%",
  },
  {
    degree: "HSC in Higher Secondary Certificate",
    institution: "PSG Sarvajana Higher Secondary School",
    location: "Coimbatore, India",
    duration: "Jun 2012 - May 2014",
    grade: "83%",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription>{edu.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{edu.location}</p>
                <p>{edu.duration}</p>
                <p>Grade: {edu.grade}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

