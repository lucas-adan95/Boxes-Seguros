"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Shield, Car, Umbrella } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const coverages = [
  {
    id: "rc",
    title: "Responsabilidad Civil",
    description: "La cobertura básica obligatoria para circular",
    icon: Shield,
    price: "Desde $15.000/mes",
    popular: false,
    features: [
      "Cobertura de responsabilidad civil hasta $20.000.000",
      "Defensa penal y civil",
      "Asistencia legal 24/7",
      "Cobertura para pasajeros",
    ],
    notIncluded: [
      "Robo total o parcial",
      "Daños propios",
      "Granizo y fenómenos climáticos",
    ],
  },
  {
    id: "tc",
    title: "Terceros Completo",
    description: "Protección ampliada con cobertura ante robo e incendio",
    icon: Car,
    price: "Desde $25.000/mes",
    popular: true,
    features: [
      "Todo lo de Responsabilidad Civil",
      "Robo total del vehículo",
      "Incendio total",
      "Robo parcial (ruedas, espejos, etc.)",
      "Asistencia mecánica 24/7",
      "Grúa sin límite de kilómetros",
    ],
    notIncluded: [
      "Daños propios por accidente",
      "Granizo y fenómenos climáticos",
    ],
  },
  {
    id: "tr",
    title: "Todo Riesgo",
    description: "La máxima protección para tu vehículo",
    icon: Umbrella,
    price: "Desde $40.000/mes",
    popular: false,
    features: [
      "Todo lo de Terceros Completo",
      "Daños propios por accidente",
      "Granizo y fenómenos climáticos",
      "Cristales y lunetas",
      "Cerraduras",
      "Auto sustituto por 15 días",
      "Auxilio mecánico premium",
    ],
    notIncluded: [],
  },
]

export function CoveragesSection() {
  const [selectedCoverage, setSelectedCoverage] = useState<string | null>(null)

  return (
    <section id="coberturas" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Nuestras Coberturas
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Elegí la cobertura perfecta para vos
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Ofrecemos diferentes niveles de protección para que encuentres 
            exactamente lo que necesitás para tu tranquilidad.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coverages.map((coverage) => {
            const Icon = coverage.icon
            const isSelected = selectedCoverage === coverage.id
            
            return (
              <Card 
                key={coverage.id}
                className={cn(
                  "relative cursor-pointer transition-all duration-300 hover:shadow-xl",
                  isSelected && "ring-2 ring-accent",
                  coverage.popular && "border-accent"
                )}
                onClick={() => setSelectedCoverage(isSelected ? null : coverage.id)}
              >
                {coverage.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground">
                      Más elegido
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{coverage.title}</CardTitle>
                  <CardDescription className="text-sm">{coverage.description}</CardDescription>
                  <p className="mt-2 text-2xl font-bold text-accent">{coverage.price}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground">Incluye:</p>
                    <ul className="space-y-2">
                      {coverage.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {coverage.notIncluded.length > 0 && (
                      <>
                        <p className="mt-4 text-sm font-medium text-foreground">No incluye:</p>
                        <ul className="space-y-2">
                          {coverage.notIncluded.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <span className="mt-0.5 h-4 w-4 shrink-0 text-center text-muted-foreground">−</span>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  
                  <Button 
                    asChild
                    className={cn(
                      "mt-6 w-full",
                      coverage.popular 
                        ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                  >
                    <Link href="#cotizar">
                      Cotizar Este Plan
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
