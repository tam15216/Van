import { ReactNode } from "react"
import "./globals.css"
import Footer from "./component/footer" // ถ้ามี Footer แยกไฟล์
import FloatingButtons from "./component/FloatingButtons"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
            {children}
            <FloatingButtons /> {/* ปุ่มลอย */}
            <Footer/>
      </body>
    </html>
  )
}
