import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    location: "Buenos Aires",
    rating: 5,
    text: "Excelente atención. Tuve un accidente y me resolvieron todo en menos de 48 horas. La grúa llegó en 20 minutos. Súper recomendados.",
    date: "Hace 2 semanas",
  },
  {
    name: "Carlos Rodríguez",
    location: "Córdoba",
    rating: 5,
    text: "Llevo 3 años con Boxes y nunca tuve un problema. Los precios son muy competitivos y la atención al cliente es impecable.",
    date: "Hace 1 mes",
  },
  {
    name: "Laura Martínez",
    location: "Rosario",
    rating: 5,
    text: "Me robaron el auto y el trámite fue súper rápido. En 15 días ya tenía el dinero en mi cuenta. Muy profesionales.",
    date: "Hace 3 semanas",
  },
  {
    name: "Diego Fernández",
    location: "Mendoza",
    rating: 5,
    text: "La cotización online es muy fácil de hacer. En 5 minutos ya tenía mi póliza lista. Muy satisfecho con el servicio.",
    date: "Hace 1 semana",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Testimonios
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Miles de conductores ya confían en Boxes para proteger sus vehículos. 
            Conocé sus experiencias.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 rounded-xl border border-border bg-card p-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">+50.000</p>
            <p className="text-sm text-muted-foreground">Clientes activos</p>
          </div>
          <div className="hidden h-12 w-px bg-border sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">15 años</p>
            <p className="text-sm text-muted-foreground">De experiencia</p>
          </div>
          <div className="hidden h-12 w-px bg-border sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">98%</p>
            <p className="text-sm text-muted-foreground">Clientes satisfechos</p>
          </div>
          <div className="hidden h-12 w-px bg-border sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">4.9/5</p>
            <p className="text-sm text-muted-foreground">Calificación promedio</p>
          </div>
        </div>
      </div>
    </section>
  )
}
