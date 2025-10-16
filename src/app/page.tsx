"use client"
import Nav from "./component/Nav"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav /> {/* Navbar */}

      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center py-12">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-6">
          บริการ เช่ารถ พร้อมคนขับมืออาชีพ
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto">
          เราเป็น <span className="font-semibold text-indigo-600">ผู้นำด้านการเช่ารถพร้อมคนขับ</span> 
          ที่มีประสบการณ์และความเชี่ยวชาญ ที่นี่เราให้บริการ 
          <span className="font-semibold text-indigo-600">เช่ารถตู้ VIP</span> 
          พร้อมคนขับที่เชี่ยวชาญทุกเส้นทาง เพื่อความสะดวกสบายและ 
          <span className="font-semibold text-green-600">ปลอดภัย</span> 
          ในการเดินทางของคุณ
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="tel:0623385663"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
          >
            📞 โทรเลย
          </a>
          <a
            href="https://line.me/R/ti/p/@435litlk" // <-- แก้เป็น LINE ID ของคุณ
            target="_blank" // เปิดใหม่ในแท็บ/แอป
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow hover:bg-green-600 transition"
          >
            💬 ติดต่อเราใน LINE
        </a>
        </div>
      </section>

      {/* จุดเด่น */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">ทำไมต้องเลือกเรา?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow">
            <div className="text-3xl mb-2">👨‍✈️</div>
            <h3 className="font-bold text-lg">มืออาชีพ</h3>
            <p className="text-gray-600">ทีมงานคนขับมีประสบการณ์ และผ่านการอบรม</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <div className="text-3xl mb-2">🛡️</div>
            <h3 className="font-bold text-lg">ปลอดภัย</h3>
            <p className="text-gray-600">รถตรวจเช็คสภาพประจำ และมีประกัน</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <div className="text-3xl mb-2">💺</div>
            <h3 className="font-bold text-lg">สะดวกสบาย</h3>
            <p className="text-gray-600">รถตู้ VIP เบาะกว้าง แอร์เย็นสบาย</p>
          </div>
        </div>
      </section>

      {/* แพ็กเกจและราคา */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">ราคาเริ่มต้นของเรา</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Plan */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-4">เช่ารถตู้รายวัน</h3>
            <p className="text-gray-600 mb-4">พร้อมคนขับมืออาชีพ</p>
            <p className="text-3xl font-bold text-indigo-600 mb-4">เริ่มต้น 2,000฿ / วัน</p>
            <p className="text-gray-600 mb-4">**เฉพาะกรุงเทพเเละปริมณฑล**</p>
            <a
              href="https://line.me/R/ti/p/@435litlk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 text-white rounded-xl font-semibold shadow hover:bg-green-600 transition"
            >
              💬 ติดต่อเรา
            </a>
          </div>

          {/* Standard Plan */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-4">เช่ารถตู้รายวัน</h3>
            <p className="text-gray-600 mb-4">พร้อมคนขับมืออาชีพ</p>
            <p className="text-3xl font-bold text-indigo-600 mb-4">เริ่มต้น 2,500฿ / วัน</p>
            <p className="text-gray-600 mb-4">**ออกต่างจังหวัดหรือระยะทาง 300 กิโลเมตรขึ้นไป**</p>
            <a
              href="https://line.me/R/ti/p/@435litlk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 text-white rounded-xl font-semibold shadow hover:bg-green-600 transition"
            >
              💬 ติดต่อเรา
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
            <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              รายละเอียดการใช้บริการ
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-600 text-left">
              <li>ผู้โดยสารควรจองล่วงหน้าอย่างน้อย 1 วัน</li>
              <li>การยกเลิกต้องแจ้งล่วงหน้าอย่างน้อย 12 ชั่วโมง</li>
              <li>ราคาอาจมีการเปลี่ยนแปลงตามระยะทางและเงื่อนไขเพิ่มเติม</li>
              <li>ค่าใช้จ่ายอื่น ๆ เช่น ค่าทางด่วน และค่าที่จอดรถ ลูกค้าเป็นผู้รับผิดชอบ</li>
            </ul>
          </div>
      </section>

      {/* รีวิวลูกค้า */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">ผลงานที่ผ่านมา</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Array.from({ length: 24 }, (_, i) => (
            <img
              key={i}
              src={`/customer/customer${i + 1}.jpg`} // เรียกจาก public
              alt={`ลูกค้า ${i + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          ))}
        </div>
      </section>

      
    </div>
  )
}
