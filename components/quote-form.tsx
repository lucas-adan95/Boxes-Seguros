"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, Loader2, Car, User } from "lucide-react"

const modelosPorMarca: Record<string, string[]> = {
  volkswagen: ["Polo", "Virtus", "T-Cross", "Amarok", "Taos", "Vento"],
  toyota: ["Corolla", "Corolla Cross", "Hilux", "Yaris", "SW4", "Camry"],
  ford: ["Ranger", "Territory", "Kuga", "F-150", "Bronco", "Maverick"],
  renault: ["Kangoo", "Captur", "Duster", "Kwid", "Logan", "Sandero"],
  chevrolet: ["Onix", "Tracker", "Spin", "S10", "Cruze", "Equinox"],
  peugeot: ["208", "2008", "3008", "5008", "Partner", "Expert"],
  fiat: ["Cronos", "Argo", "Toro", "Strada", "Mobi", "Pulse"],
  honda: ["Civic", "HR-V", "CR-V", "City", "Fit", "Accord"],
  nissan: ["Frontier", "Kicks", "Sentra", "Versa", "X-Trail", "March"],
  mercedes: ["Clase A", "Clase C", "Clase E", "GLA", "GLC", "Sprinter"],
}

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 30 }, (_, i) => currentYear - i)

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedMarca, setSelectedMarca] = useState("")
  const [modelos, setModelos] = useState<string[]>([])
  
  const [formData, setFormData] = useState({
    marca: "",
    modelo: "",
    anio: "",
    tipoUso: "",
    nombre: "",
    edad: "",
    localidad: "",
    email: "",
    telefono: "",
  })

  const handleMarcaChange = (value: string) => {
    setSelectedMarca(value)
    setFormData(prev => ({ ...prev, marca: value, modelo: "" }))
    if (value === "otra") {
      setModelos([])
    } else {
      setModelos(modelosPorMarca[value] || [])
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <section id="cotizar" className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl">
            <CardContent className="flex flex-col items-center py-16 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-card-foreground">
                ¡Solicitud enviada con éxito!
              </h3>
              <p className="mb-6 max-w-md text-muted-foreground">
                Gracias por confiar en Boxes Seguros. Un asesor se comunicará con vos 
                en las próximas horas para brindarte tu cotización personalizada.
              </p>
              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm text-muted-foreground">
                  También podés contactarnos al <strong className="text-foreground">0800-888-BOXES</strong>
                </p>
              </div>
              <Button 
                className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => {
                  setIsSuccess(false)
                  setFormData({
                    marca: "",
                    modelo: "",
                    anio: "",
                    tipoUso: "",
                    nombre: "",
                    edad: "",
                    localidad: "",
                    email: "",
                    telefono: "",
                  })
                  setSelectedMarca("")
                  setModelos([])
                }}
              >
                Realizar otra cotización
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="cotizar" className="bg-primary py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
            Cotizador Online
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Obtené tu cotización en minutos
          </h2>
          <p className="text-pretty text-lg text-primary-foreground/80">
            Completá el formulario y recibí una propuesta personalizada sin compromiso.
          </p>
        </div>

        <Card className="mx-auto max-w-3xl">
          <CardHeader>
            <CardTitle>Solicitar Cotización</CardTitle>
            <CardDescription>
              Completá todos los campos para recibir tu cotización personalizada.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Vehicle Data Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-border pb-2">
                  <Car className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Datos del Vehículo</h3>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="marca">Marca *</Label>
                    <Select value={formData.marca} onValueChange={handleMarcaChange}>
                      <SelectTrigger id="marca">
                        <SelectValue placeholder="Seleccionar marca" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="volkswagen">Volkswagen</SelectItem>
                        <SelectItem value="toyota">Toyota</SelectItem>
                        <SelectItem value="ford">Ford</SelectItem>
                        <SelectItem value="renault">Renault</SelectItem>
                        <SelectItem value="chevrolet">Chevrolet</SelectItem>
                        <SelectItem value="peugeot">Peugeot</SelectItem>
                        <SelectItem value="fiat">Fiat</SelectItem>
                        <SelectItem value="honda">Honda</SelectItem>
                        <SelectItem value="nissan">Nissan</SelectItem>
                        <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                        <SelectItem value="otra">Otra marca</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="modelo">Modelo *</Label>
                    {selectedMarca === "otra" ? (
                      <Input
                        id="modelo"
                        placeholder="Ingresá el modelo"
                        value={formData.modelo}
                        onChange={(e) => handleInputChange("modelo", e.target.value)}
                        required
                      />
                    ) : (
                      <Select 
                        value={formData.modelo} 
                        onValueChange={(value) => handleInputChange("modelo", value)}
                        disabled={!selectedMarca}
                      >
                        <SelectTrigger id="modelo">
                          <SelectValue placeholder={selectedMarca ? "Seleccionar modelo" : "Primero elegí una marca"} />
                        </SelectTrigger>
                        <SelectContent>
                          {modelos.map((modelo) => (
                            <SelectItem key={modelo} value={modelo.toLowerCase()}>
                              {modelo}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="anio">Año *</Label>
                    <Select value={formData.anio} onValueChange={(value) => handleInputChange("anio", value)}>
                      <SelectTrigger id="anio">
                        <SelectValue placeholder="Seleccionar año" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tipoUso">Tipo de uso *</Label>
                    <Select value={formData.tipoUso} onValueChange={(value) => handleInputChange("tipoUso", value)}>
                      <SelectTrigger id="tipoUso">
                        <SelectValue placeholder="Seleccionar tipo de uso" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="particular">Particular</SelectItem>
                        <SelectItem value="comercial">Comercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Driver Data Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-border pb-2">
                  <User className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Datos del Conductor</h3>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="nombre">Nombre completo *</Label>
                    <Input
                      id="nombre"
                      placeholder="Juan Pérez"
                      value={formData.nombre}
                      onChange={(e) => handleInputChange("nombre", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="edad">Edad *</Label>
                    <Input
                      id="edad"
                      type="number"
                      min={18}
                      max={99}
                      placeholder="35"
                      value={formData.edad}
                      onChange={(e) => handleInputChange("edad", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="localidad">Localidad *</Label>
                    <Input
                      id="localidad"
                      placeholder="Ciudad Autónoma de Buenos Aires"
                      value={formData.localidad}
                      onChange={(e) => handleInputChange("localidad", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="juan@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      placeholder="11 1234-5678"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange("telefono", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando solicitud...
                  </>
                ) : (
                  "Solicitar Cotización Ahora"
                )}
              </Button>
              
              <p className="text-center text-xs text-muted-foreground">
                Al enviar este formulario, aceptás nuestros términos y condiciones 
                y nuestra política de privacidad.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
