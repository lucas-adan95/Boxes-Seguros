import { 
  Clock, 
  Truck, 
  Headphones, 
  Shield, 
  CreditCard, 
  FileText 
} from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Cotización en 2 minutos",
    description: "Completá el formulario y recibí tu cotización al instante, sin papeleos ni esperas.",
  },
  {
    icon: Truck,
    title: "Grúa sin límite",
    description: "Servicio de grúa las 24 horas, los 365 días del año, sin límite de kilómetros.",
  },
  {
    icon: Headphones,
    title: "Asistencia 24/7",
    description: "Nuestro equipo de atención al cliente está disponible las 24 horas para ayudarte.",
  },
  {
    icon: Shield,
    title: "Cobertura inmediata",
    description: "Tu póliza entra en vigencia desde el momento que confirmás tu contratación.",
  },
  {
    icon: CreditCard,
    title: "Pago flexible",
    description: "Pagá con tarjeta de crédito, débito o transferencia. Hasta 12 cuotas sin interés.",
  },
  {
    icon: FileText,
    title: "Sin letra chica",
    description: "Contratos claros y transparentes. Sabés exactamente qué estás contratando.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            ¿Por qué elegirnos?
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Ventajas de asegurarte con Boxes
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Más de 15 años de experiencia nos respaldan. Entrá a Boxes y descubrí 
            por qué miles de conductores confían en nosotros.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div 
                key={index}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-accent/20">
                  <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
