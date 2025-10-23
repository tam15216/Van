"use client"
import Nav from "./component/Nav"
import { useLang } from "./i18n/LanguageProvider"
import { dict } from "./i18n/dictionaries"
export default function Home() {
  const { lang } = useLang()
  const t = dict[lang]
  return (
    <div className="flex flex-col min-h-screen">
      <Nav /> {/* Navbar */}

      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center py-12">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-6">
          {t.hero.title}
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto">
          {t.hero.description}
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="tel:0623385663"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
          >
            {t.hero.call}
          </a>
          <a
            href="https://line.me/R/ti/p/@435litlk" // <-- แก้เป็น LINE ID ของคุณ
            target="_blank" // เปิดใหม่ในแท็บ/แอป
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow hover:bg-green-600 transition"
          >
            {t.hero.line}
        </a>
        </div>
      </section>

      {/* จุดเด่น */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">{t.benefits.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow">
            <div className="text-3xl mb-2">👨‍✈️</div>
            <h3 className="font-bold text-lg">{t.benefits.items[0].title}</h3>
            <p className="text-gray-600">{t.benefits.items[0].desc}</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <div className="text-3xl mb-2">🛡️</div>
            <h3 className="font-bold text-lg">{t.benefits.items[1].title}</h3>
            <p className="text-gray-600">{t.benefits.items[1].desc}</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <div className="text-3xl mb-2">💺</div>
            <h3 className="font-bold text-lg">{t.benefits.items[2].title}</h3>
            <p className="text-gray-600">{t.benefits.items[2].desc}</p>
          </div>
        </div>
      </section>

      {/* แพ็กเกจและราคา */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">{t.pricing.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Plan */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-4">{t.pricing.daily.title}</h3>
            <p className="text-gray-600 mb-4">{t.pricing.daily.desc}</p>
            <p className="text-3xl font-bold text-indigo-600 mb-4">{t.pricing.daily.price1}</p>
            <p className="text-gray-600 mb-4">{t.pricing.daily.note1}</p>
            <a
              href="https://line.me/R/ti/p/@435litlk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 text-white rounded-xl font-semibold shadow hover:bg-green-600 transition"
            >
              {t.pricing.contact}
            </a>
          </div>

          {/* Standard Plan */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-4">{t.pricing.daily2.title}</h3>
            <p className="text-gray-600 mb-4">{t.pricing.daily2.desc}</p>
            <p className="text-3xl font-bold text-indigo-600 mb-4">{t.pricing.daily2.price1}</p>
            <p className="text-gray-600 mb-4">{t.pricing.daily2.note1}</p>
            <a
              href="https://line.me/R/ti/p/@435litlk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 text-white rounded-xl font-semibold shadow hover:bg-green-600 transition"
            >
              {t.pricing.contact}
            </a>
          </div>
        </div>
      </section>
      
      {/* อัตราค่าบริการ กรุงเทพ พัทยา */}
      <section className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
              VIP Van <span className='text-blue-600'>Service</span> Rates
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="p-6 bg-white rounded-2xl shadow-md border hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-gray-800">Bangkok → Pattaya</h3>
                <p className="text-gray-500">10 Hours</p>
                <p className="text-2xl font-bold text-blue-600 mt-2">฿3,500</p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-white rounded-2xl shadow-md border hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-gray-800">
                  Bangkok → Pattaya → Bangkok
                </h3>
                <p className="text-gray-500">10 Hours</p>
                <p className="text-2xl font-bold text-blue-600 mt-2">฿4,200</p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-white rounded-2xl shadow-md border hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-gray-800">Bangkok City Tour</h3>
                <p className="text-gray-500">10 Hours</p>
                <p className="text-2xl font-bold text-blue-600 mt-2">฿3,000</p>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-white rounded-2xl shadow-md border hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-gray-800">Pattaya City Tour</h3>
                <p className="text-gray-500">10 Hours</p>
                <p className="text-2xl font-bold text-blue-600 mt-2">฿3,000</p>
              </div>

              {/* Card 5 */}
              <div className="p-6 bg-white rounded-2xl shadow-md border hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-gray-800">Pattaya → BKK Airport</h3>
                <p className="text-gray-500">-</p>
                <p className="text-2xl font-bold text-blue-600 mt-2">฿2,000</p>
              </div>

              {/* Card 6 */}
              <div className="p-6 bg-white rounded-2xl shadow-md border hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-gray-800">Pattaya → DMK Airport</h3>
                <p className="text-gray-500">-</p>
                <p className="text-2xl font-bold text-blue-600 mt-2">฿2,500</p>
              </div>

              {/* Card 7 */}
              <div className="p-6 bg-white rounded-2xl shadow-md border hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-gray-800">Bangkok → BKK Airport</h3>
                <p className="text-gray-500">-</p>
                <p className="text-2xl font-bold text-blue-600 mt-2">฿1,000</p>
              </div>

              {/* Card 8 */}
              <div className="p-6 bg-white rounded-2xl shadow-md border hover:shadow-xl transition">
                <h3 className="text-lg font-semibold text-gray-800">Bangkok → DMK Airport</h3>
                <p className="text-gray-500">-</p>
                <p className="text-2xl font-bold text-blue-600 mt-2">฿1,000</p>
              </div>
            </div>
        </section>

          {/* เงื่อนไขในการใช้บริการ */}
      <section className="container mx-auto px-4 py-12">
          <div className="mt-12 max-w-3xl mx-auto bg-gray-50 rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">{t.conditions.title}</h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-600 text-left">
              <li>{t.conditions.items[0]}</li>
              <li>{t.conditions.items[1]}</li>
              <li>{t.conditions.items[2]}</li>
              <li>{t.conditions.items[3]}</li>
            </ul>
          </div>
      </section>

      {/* รีวิวลูกค้า */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">{t.reviews.title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Array.from({ length: 24 }, (_, i) => (
            <img
              key={i}
              src={`/customer/customer${i + 1}.jpg`} // เรียกจาก public
              alt={t.reviews.imgAlt(i + 1)}
              className="w-full h-full object-cover rounded-lg"
            />
          ))}
        </div>
      </section>

      
    </div>
  )
}
