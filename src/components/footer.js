"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
return (
    <footer className="bg-gray-900 text-white py-12" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KrunCheeze</h3>
            <p className="mb-4">
              Serving gourmet grilled cheese sandwiches and mac & cheese from our food truck to satisfy your cheesy
              cravings!
            </p>
            <div className="flex space-x-4">
              <Link href="" className="hover:text-yellow-400 transition-colors">
                <Facebook />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com/krun.cheeze" className="hover:text-yellow-400 transition-colors">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>kruncheesefoodtruck@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1" />
                <span>Check our social media for current locations and events</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>11:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>11:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 PM - 6:00 PM</span>
              </li>
              <li className="mt-4 text-sm text-gray-400">*Hours may vary based on events and locations</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} KrunCheeze Food Truck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}