"use client"
import { Phone, MessageCircle } from "lucide-react" // ใช้ไอคอนจาก lucide-react

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Call Button */}
      <a
        href="tel:0623385663"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition"
      >
        <Phone size={24} />
      </a>

      {/* LINE Button */}
      <a
        href="https://line.me/R/ti/p/@435litlk"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  )
}
