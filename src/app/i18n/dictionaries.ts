export const dict = {
  th: {
    nav: { home: "หน้าแรก", attractions: "แหล่งท่องเที่ยว", contact: "ติดต่อ" },
    hero: {
      title: "บริการ เช่ารถ พร้อมคนขับมืออาชีพ",
      description: "เราเป็น ผู้นำด้านการเช่ารถพร้อมคนขับที่มีประสบการณ์และความเชี่ยวชาญ ที่นี่เราให้บริการเช่ารถตู้ VIPพร้อมคนขับที่เชี่ยวชาญทุกเส้นทาง เพื่อความสะดวกสบายและปลอดภัยในการเดินทางของคุณ",
      call: "📞 โทรเลย",
      line: "💬 ติดต่อเราใน LINE"
    },
    benefits: {
      title: "ทำไมต้องเลือกเรา?",
      items: [
        { title: "มืออาชีพ", desc: "ทีมงานคนขับมีประสบการณ์ และผ่านการอบรม" },
        { title: "ปลอดภัย", desc: "รถตรวจเช็คสภาพประจำ และมีประกัน" },
        { title: "สะดวกสบาย", desc: "รถตู้ VIP เบาะกว้าง แอร์เย็นสบาย" }
      ]
    },
    pricing: {
      title: "ราคาเริ่มต้นของเรา",
      daily: { title: "เช่ารถตู้รายวัน", desc: "พร้อมคนขับมืออาชีพ", price1: "เริ่มต้น 2,000฿ / วัน", note1: "**เฉพาะกรุงเทพเเละปริมณฑล**" },
      daily2: { title: "เช่ารถตู้รายวัน", desc: "พร้อมคนขับมืออาชีพ", price1: "เริ่มต้น 2,500฿ / วัน", note1: "**ออกต่างจังหวัดหรือระยะทาง 300 กิโลเมตรขึ้นไป**" },
      contact: "💬 ติดต่อเรา"
    },
    conditions: {
      title: "รายละเอียดการใช้บริการ",
      items: [
        "ผู้โดยสารควรจองล่วงหน้าอย่างน้อย 1 วัน",
        "การยกเลิกต้องแจ้งล่วงหน้าอย่างน้อย 12 ชั่วโมง",
        "ราคาอาจมีการเปลี่ยนแปลงตามระยะทางและเงื่อนไขเพิ่มเติม",
        "ค่าใช้จ่ายอื่น ๆ เช่น ค่าทางด่วน และค่าที่จอดรถ ลูกค้าเป็นผู้รับผิดชอบ"
      ]
    },
    reviews: { title: "ผลงานที่ผ่านมา", imgAlt: (i: number) => `ลูกค้า ${i}` },
    about: {
      title: "สถานที่ท่องเที่ยวยอดนิยม",
      desc: "เราแนะนำสถานที่ท่องเที่ยวที่น่าสนใจ พร้อมค่าเดินทางโดยรถตู้แบบคร่าว ๆ",
      note: "*ราคาประมาณการเช่ารถตู้จากกรุงเทพมหานคร ไปยังสถานที่ดังกล่าว",
      contact: "💬 ติดต่อเรา"
    },
    contact: {
      title: "📞 ติดต่อเรา",
      subtitle: "เราพร้อมให้บริการและตอบคำถามทุกข้อสงสัยของคุณ",
      infoTitle: "ข้อมูลการติดต่อ",
      addressTitle: "ที่อยู่",
      address1: "123 ถนนสุขุมวิท",
      address2: "วัฒนา กรุงเทพฯ 10110",
      phoneTitle: "โทรศัพท์",
      emailTitle: "อีเมล",
      hoursTitle: "เวลาทำการ",
      hours1: "จันทร์ - ศุกร์: 09:00 - 18:00",
      hours2: "เสาร์: 09:00 - 12:00",
      hours3: "อาทิตย์: ปิด",
      followTitle: "ติดตามเรา"
    }
  },
  en: {
    nav: { home: "Home", attractions: "Top attractions", contact: "Contact" },
    hero: {
      title: "Professional chauffeured van rental service",
      description: "We are the leading chauffeured car rental service with experience and expertise. Here we provide VIP van rental with drivers who are experts on every route, for your convenience and safety during travel.",
      call: "📞 Call now",
      line: "💬 Chat with us on LINE"
    },
    benefits: {
      title: "Why choose us?",
      items: [
        { title: "Professional", desc: "Experienced drivers with proper training" },
        { title: "Safe", desc: "Regular vehicle checks and insurance coverage" },
        { title: "Comfortable", desc: "VIP vans with spacious seats and cool A/C" }
      ]
    },
    pricing: {
      title: "Our starting prices",
      daily: { title: "Daily van rental", desc: "With professional driver", price1: "From 2,000฿ / day", note1: "**Bangkok and metro area only**" },
      daily2: { title: "Daily van rental", desc: "With professional driver", price1: "From 2,500฿ / day", note1: "**Upcountry or over 300 km**" },
      contact: "💬 Contact us"
    },
    conditions: {
      title: "Service terms",
      items: [
        "Please book at least 1 day in advance",
        "Cancellations must be made at least 12 hours in advance",
        "Prices may vary depending on distance and extra conditions",
        "Other costs like tolls and parking are paid by the customer"
      ]
    },
    reviews: { title: "Past work", imgAlt: (i: number) => `Customer ${i}` },
    about: {
      title: "Top attractions",
      desc: "We recommend great places with rough van travel costs",
      note: "*Estimated rental from Bangkok to the destination",
      contact: "💬 Contact us"
    },
    contact: {
      title: "📞 Contact us",
      subtitle: "We’re ready to help and answer your questions",
      infoTitle: "Contact information",
      addressTitle: "Address",
      address1: "123 Sukhumvit Road",
      address2: "Wattana, Bangkok 10110",
      phoneTitle: "Phone",
      emailTitle: "Email",
      hoursTitle: "Business hours",
      hours1: "Mon - Fri: 09:00 - 18:00",
      hours2: "Sat: 09:00 - 12:00",
      hours3: "Sun: Closed",
      followTitle: "Follow us"
    }
  }
} as const

export type SupportedLang = keyof typeof dict

