import Nav from "../component/Nav" // ถ้ามี Navbar แยกไฟล์
export default function Contact() {
  return (
    <div className="items-center text-center flex-1 min-h-screen">
      <Nav /> {/* ใส่ navbar ถ้ามี */}
      <h1 className="py-2">📞 Contact Page</h1>
      <p>นี่คือหน้าติดต่อเรา</p>
    </div>
  )
}
