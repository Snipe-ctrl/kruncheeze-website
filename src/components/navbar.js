"use client";

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-yellow-400 py-4 px-6 shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-black">KrunCheeze</span>
            </Link>
    
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-black font-medium hover:text-yellow-800 transition-colors">
                Home
              </Link>
              <Link href="/menu" className="text-black font-medium hover:text-yellow-800 transition-colors">
                Menu
              </Link>
              <Link href="#contact" className="text-black font-medium hover:text-yellow-800 transition-colors">
                Contact
              </Link>
            </nav>
    
            {/* Mobile Menu Button */}
            <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
    
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-2 px-6">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-black font-medium hover:text-yellow-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/menu"
                  className="text-black font-medium hover:text-yellow-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menu
                </Link>
                <Link
                  href="#contact"
                  className="text-black font-medium hover:text-yellow-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </header>
      )
}