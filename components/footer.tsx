import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

function BoxesLogoFooter() {
  return (
    <div className="flex items-center gap-2">
      {/* Checkered flag icon */}
      <svg 
        viewBox="0 0 32 32" 
        className="h-10 w-10"
        aria-hidden="true"
      >
        {/* Checkered pattern */}
        <rect x="2" y="6" width="6" height="6" className="fill-accent" />
        <rect x="8" y="6" width="6" height="6" className="fill-background/90" />
        <rect x="14" y="6" width="6" height="6" className="fill-accent" />
        <rect x="2" y="12" width="6" height="6" className="fill-background/90" />
        <rect x="8" y="12" width="6" height="6" className="fill-accent" />
        <rect x="14" y="12" width="6" height="6" className="fill-background/90" />
        <rect x="2" y="18" width="6" height="6" className="fill-accent" />
        <rect x="8" y="18" width="6" height="6" className="fill-background/90" />
        <rect x="14" y="18" width="6" height="6" className="fill-accent" />
        {/* Speed lines */}
        <rect x="22" y="8" width="8" height="2" className="fill-accent" rx="1" />
        <rect x="24" y="13" width="6" height="2" className="fill-background/50" rx="1" />
        <rect x="22" y="18" width="8" height="2" className="fill-accent" rx="1" />
      </svg>
      {/* Brand text */}
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-black italic tracking-tight text-background">
          BOXES
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
          Seguros
        </span>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-4">
            <BoxesLogoFooter />
            <p className="text-sm text-background/70">
              Entrá a Boxes y protegé tu vehículo con los mejores seguros del mercado. 
              Más de 15 años cuidando lo que te mueve.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-background">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#coberturas" className="text-sm text-background/70 transition-colors hover:text-background">
                  Coberturas
                </Link>
              </li>
              <li>
                <Link href="#beneficios" className="text-sm text-background/70 transition-colors hover:text-background">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="text-sm text-background/70 transition-colors hover:text-background">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#cotizar" className="text-sm text-background/70 transition-colors hover:text-background">
                  Cotizar Seguro
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-background">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm text-background/70">0800-888-BOXES</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm text-background/70">contacto@boxesseguros.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-background/70">
                  Av. Corrientes 1234, Piso 8<br />
                  Ciudad Autónoma de Buenos Aires
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 font-semibold text-background">Horario de Atención</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Lunes a Viernes: 9:00 - 18:00</li>
              <li>Sábados: 9:00 - 13:00</li>
              <li className="pt-2 font-medium text-accent">
                Pit stop de emergencias 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Boxes Seguros. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-background/50">
              <Link href="#" className="transition-colors hover:text-background">
                Términos y Condiciones
              </Link>
              <Link href="#" className="transition-colors hover:text-background">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
