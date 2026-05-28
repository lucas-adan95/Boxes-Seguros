import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Flag, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-primary lg:min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/portada.png"
          alt="Auto de carreras"
          fill
          className="hidden object-cover object-center opacity-20 md:block"
          priority
        />
        <Image
          src="/images/portada-mobile.png"
          alt="Auto de carreras"
          fill
          className="object-cover object-center opacity-20 md:hidden"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/98 via-primary/90 to-primary/70" />
        {/* Racing stripes decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[600px] flex-col items-center justify-center px-4 py-20 text-center lg:min-h-[700px] lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2">
            <Flag className="h-5 w-5 text-accent" />
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">Bandera a cuadros</span>
          </div>
          
          <h1 className="mb-6 text-balance text-4xl font-black italic leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Entrá a Boxes.<br />
            <span className="text-accent">Cotizá, asegurá</span> y salí a la pista tranquilo.
          </h1>
          
          <p className="mb-8 text-pretty text-lg text-primary-foreground/80 md:text-xl">
            Tu vehículo merece la mejor protección. Cotizá en minutos, 
            obtené cobertura inmediata y disfrutá de asistencia 24/7 sin límites.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button 
              asChild
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="#cotizar">
                Cotizar Ahora
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="#coberturas">
                Ver Coberturas
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                <span className="text-lg font-bold text-accent">+</span>
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-primary-foreground">50.000</p>
                <p className="text-xs text-primary-foreground/70">Pilotos asegurados</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                <span className="text-lg font-bold text-accent">★</span>
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-primary-foreground">4.9/5</p>
                <p className="text-xs text-primary-foreground/70">Calificación promedio</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                <span className="text-lg font-bold text-accent">24h</span>
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-primary-foreground">24/7</p>
                <p className="text-xs text-primary-foreground/70">Pit stop disponible</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary-foreground/50" />
      </div>
    </section>
  )
}
