"use client"
import Nav from "../component/Nav";
import { useLang } from "../i18n/LanguageProvider";
import { dict } from "../i18n/dictionaries";
const attractionsTH = [
  {
    name: "ดอยอินทนนท์",
    img: "/arttraction/attraction1.jpg",
    shortDesc: "“ดอยอินทนนท์” ที่เที่ยวเชียงใหม่สูงสุดแดนสยาม ที่บอกเลยว่าเที่ยวง่าย วันเดียวก็ยังไหว ซึ่งถ้าใครได้ไปก็ขอแนะนำให้ไปตามเก็บให้ครบทั้งพระธาตุสวย จุดชมวิวสวย ๆ นาขั้นบันได น้ำตก และอื่น ๆ อีกมากมาย",
    approxCarPrice: "เช่ารถตู้ประมาณ 1,200฿ / วัน ",
  },
  {
    name: "เกาะล้าน",
    img: "/arttraction/attraction2.jpg",
    shortDesc: "“เกาะล้าน” อีกหนึ่งสถานที่ท่องเที่ยวไทยใกล้กรุงเทพฯ เดินทางง่าย แถมยังมีน้ำทะเลใสแจ๋วอย่างไม่น่าเชื่อ นอกจากเล่นน้ำได้แล้ว เกาะล้านก็ยังมีกิจกรรมอื่น ๆ เช่น ดำน้ำ ตกหมึก ขับเจ็ตสกี ฯลฯ อีกด้วย",
    approxCarPrice: "เช่ารถตู้ประมาณ 800฿ / วัน",
  },
  {
    name: "เสม็ดนางชี",
    img: "/arttraction/attraction3.jpg",
    shortDesc: "“เสม็ดนางชี” เพิ่งเป็นที่รู้จักในหมู่นักท่องเที่ยวไม่นานนัก ความสวยงามของที่นี่ร่ำลือกันว่าเป็นจุดชมวิวพระอาทิตย์ขึ้นที่สวยที่สุดแห่งหนึ่งของจังหวัดพังงา และว่ากันว่าเป็นหนึ่งในสถานที่ท่องเที่ยวที่สวยที่สุดในประเทศไทยเลยก็ว่าได้ สัมผัสบรรยากาศภาพความสวยงามของพระอาทิตย์ที่แทรกตัวขึ้นจากด้านหลังหุบเขา ",
    approxCarPrice: "เช่ารถตู้ประมาณ 1,000฿ / วัน ",
  },
  {
    name: "สะพานข้ามแม่น้ำแคว",
    img: "/arttraction/attraction4.jpg",
    shortDesc: "“สะพานข้ามแม่น้ำแคว” ทางรถไฟที่ทอดตัวยาวข้ามแม่น้ำประมาณ 300 เมตร แลนด์มาร์คของเมืองกาญจน์ เป็นส่วนหนึ่งของเส้นทางรถไฟในช่วงสงครามโลกครั้งที่ 2 เพื่อให้ได้มาซึ่งทางรถไฟที่มีความยาวถึง 415 กิโลเมตร เริ่มต้นจากสถานีชุมทางหนองปลาดุก จังหวัดราชบุรี ไปสู่ปลายทางที่เมืองทันบูซายัค ประเทศเมียนมา ",
    approxCarPrice: "เช่ารถตู้ประมาณ 1,000฿ / วัน ",
  },
  {
    name: "เขาค้อ",
    img: "/arttraction/attraction5.jpg",
    shortDesc: " “เขาค้อ” เขาค้อนี่ถือเป็นที่เที่ยวไทยยอดนิยมที่หลาย ๆ คนนึกถึงเป็นชื่อแรกเลย ด้วยอากาศที่บริสุทธิ์ ความหนาวเย็น และบรรยากาศยามเช้า คงทำให้ใครหลายคนอยากมาสัมผัสที่นี่ แถมยังเดินทางจากกรุงเทพฯไม่นาน แค่ 2 ชั่วโมงนิด ๆ นอกจากนี้ยังมีสถานที่เที่ยวมากมาย ทั้งวัดพระธาตุผาซ่อนแก้ว, อนุสาวรีย์ผู้เสียสละเขาค้อ, ทุ่งกังหันลม มีใครหลายคนบอกว่านอนเขาค้อ 1 คืน อายุยืน 1 ปี ",
    approxCarPrice: "เช่ารถตู้ประมาณ 1,000฿ / วัน ",
  },
  {
    name: "ภูสอยดาว",
    img: "/arttraction/attraction6.jpg",
    shortDesc: " “ภูสอยดาว” เป็นที่เที่ยวสุดฮิตที่ชีวิตนี้ต้องไปให้ได้อย่างแน่นอน เพราะที่นี่ปกคลุมไปด้วยป่าและธรรมชาติที่สวยงาม และยังมีดอกไม้สวย ๆ ซึ่งเป็นจุดที่มีดอกหงอนนาคทุ่งใหญ่ที่สุดของประเทศไทยให้ดูอีก จุดไฮไลต์ของที่นี่ก็คือ จุดถ่ายรูปดาว และจุดถ่ายรูปทางช้างเผือก ที่เป็นที่มาของชื่อภูสอยดาว เพราะเราจะเห็นดาวชัดมากจากบริเวณจุดถ่ายรูป ใครที่เป็นสายรักธรรมชาติ ชอบอะไรที่แอดเวนเจอร์นิด ๆ ภูสอยดาวต้องเป็นที่เที่ยวที่คุณต้องมาสักครั้งในชีวิต",
    approxCarPrice: "เช่ารถตู้ประมาณ 1,000฿ / วัน ",
  },
  // เพิ่มข้อมูลสถานที่อื่น ๆ ...
];
const attractionsEN = [
  {
    name: "Doi Inthanon",
    img: "/arttraction/attraction1.jpg",
    shortDesc: "Thailand’s highest peak with easy day trips: pagodas, viewpoints, rice terraces, and waterfalls.",
    approxCarPrice: "Van rental approx. 1,200฿ / day",
  },
  {
    name: "Koh Larn",
    img: "/arttraction/attraction2.jpg",
    shortDesc: "A quick island getaway near Bangkok with crystal-clear waters, snorkeling, squid fishing, and jet skis.",
    approxCarPrice: "Van rental approx. 800฿ / day",
  },
  {
    name: "Samet Nangshe",
    img: "/arttraction/attraction3.jpg",
    shortDesc: "Famed sunrise viewpoint in Phang Nga with stunning karst landscapes—one of Thailand’s most beautiful.",
    approxCarPrice: "Van rental approx. 1,000฿ / day",
  },
  {
    name: "Bridge over the River Kwai",
    img: "/arttraction/attraction4.jpg",
    shortDesc: "Historic WWII railway bridge in Kanchanaburi spanning ~300m, part of the 415km Death Railway.",
    approxCarPrice: "Van rental approx. 1,000฿ / day",
  },
  {
    name: "Khao Kho",
    img: "/arttraction/attraction5.jpg",
    shortDesc: "Popular mountain escape with fresh air and cool mornings; visit temples, wind farms, and memorials.",
    approxCarPrice: "Van rental approx. 1,000฿ / day",
  },
  {
    name: "Phu Soi Dao",
    img: "/arttraction/attraction6.jpg",
    shortDesc: "Nature lover’s favorite with vast forests and purple flowers; great for stargazing and the Milky Way.",
    approxCarPrice: "Van rental approx. 1,000฿ / day",
  },
];

export default function Attractions() {
  const { lang } = useLang()
  const t = dict[lang]
  const attractions = lang === "th" ? attractionsTH : attractionsEN
  return (
    <div className="flex flex-col items-center text-center flex-1 min-h-screen">
      <Nav />
      <h1 className="py-6 text-3xl font-bold">{t.about.title}</h1>
      <p className="text-gray-700 mb-2 max-w-2xl px-4">{t.about.desc}</p>
      <p className="text-gray-500 text-sm mb-8 max-w-2xl px-4">{t.about.note}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl">
        {attractions.map((place, i) => (
          <div key={i} className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col justify-between">
            <div>
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-40 object-cover rounded-xl mb-3"
              />
              <h3 className="text-lg font-bold mb-1">{place.name}</h3>
              <p className="text-gray-600 mb-2">{place.shortDesc}</p>
              <p className="text-green-600 font-semibold mb-3">{place.approxCarPrice}</p>
            </div>
            <a
              href="https://line.me/R/ti/p/@435litlk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 text-white rounded-xl font-semibold shadow hover:bg-green-600 transition mt-3"
            >
              {t.about.contact}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
