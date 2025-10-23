import { ReactNode } from "react"
import "./globals.css"
import Footer from "./component/footer" // ถ้ามี Footer แยกไฟล์
import FloatingButtons from "./component/FloatingButtons"
import { LanguageProvider } from "./i18n/LanguageProvider"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
            <LanguageProvider>
              {children}
              <FloatingButtons /> {/* ปุ่มลอย */}
              <Footer/>
            </LanguageProvider>
      </body>
    </html>
  )
}
