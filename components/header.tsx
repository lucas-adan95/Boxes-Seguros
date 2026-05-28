"use client"

import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

function BoxesLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Checkered flag icon */}
      <svg 
        viewBox="0 0 32 32" 
        className="h-10 w-10"
        aria-hidden="true"
      >
        {/* Checkered pattern */}
        <rect x="2" y="6" width="6" height="6" className="fill-accent" />
        <rect x="8" y="6" width="6" height="6" className="fill-primary-foreground" />
        <rect x="14" y="6" width="6" height="6" className="fill-accent" />
        <rect x="2" y="12" width="6" height="6" className="fill-primary-foreground" />
        <rect x="8" y="12" width="6" height="6" className="fill-accent" />
        <rect x="14" y="12" width="6" height="6" className="fill-primary-foreground" />
        <rect x="2" y="18" width="6" height="6" className="fill-accent" />
        <rect x="8" y="18" width="6" height="6" className="fill-primary-foreground" />
        <rect x="14" y="18" width="6" height="6" className="fill-accent" />
        {/* Speed lines */}
        <rect x="22" y="8" width="8" height="2" className="fill-accent" rx="1" />
        <rect x="24" y="13" width="6" height="2" className="fill-primary-foreground/70" rx="1" />
        <rect x="22" y="18" width="8" height="2" className="fill-accent" rx="1" />
      </svg>
      {/* Brand text */}
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-black italic tracking-tight text-primary-foreground">
          BOXES
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
          Seguros
        </span>
      </div>
    </div>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <BoxesLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link 
              href="#coberturas" 
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              Coberturas
            </Link>
            <Link 
              href="#beneficios" 
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              Beneficios
            </Link>
            <Link 
              href="#testimonios" 
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              Testimonios
            </Link>
            <Link 
              href="#cotizar" 
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              Cotizar
            </Link>
          </nav>

          {/* Phone Number */}
          <div className="hidden items-center gap-2 md:flex">
            <Phone className="h-5 w-5 text-accent" />
            <span className="text-lg font-bold text-primary-foreground">0800-888-BOXES</span>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-primary-foreground/10 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link 
                href="#coberturas" 
                className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Coberturas
              </Link>
              <Link 
                href="#beneficios" 
                className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Beneficios
              </Link>
              <Link 
                href="#testimonios" 
                className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonios
              </Link>
              <Link 
                href="#cotizar" 
                className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cotizar
              </Link>
              <div className="flex items-center gap-2 pt-2">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-lg font-bold text-primary-foreground">0800-888-BOXES</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
