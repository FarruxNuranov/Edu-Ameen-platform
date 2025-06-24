import { FaFilePdf, FaFileExcel } from "react-icons/fa";
import { news1, news3, playImage } from "../../../utils/getimage";


export const coursesData = [
  {
    id: 1,
    title: "HR Menejment Kursi",
    banner: playImage,
    author: { name: "Kathryn Murphy" },
    progress: { current: 1, total: 4 },
    unlocked: false, // если true — все серии будут открыты
    description: "Ushbu kurs orqali siz Python'da veb sahifalardan ma'lumotlarni avtomatik tarzda yig'ish texnikasini o'rganasiz.Ushbu kurs orqali siz Python'da veb sahifalardan ma'lumotlarni avtomatik tarzda yig'ish texnikasini o'rganasiz.Ushbu kurs orqali siz Python'da veb sahifalardan ma'lumotlarni avtomatik tarzda yig'ish texnikasini o'rganasiz.Ushbu kurs orqali siz Python'da veb sahifalardan ma'lumotlarni avtomatik tarzda yig'ish texnikasini o'rganasiz.Ushbu kurs orqali siz Python'da veb sahifalardan ma'lumotlarni avtomatik tarzda yig'ish texnikasini o'rganasiz.Ushbu kurs orqali siz Python'da veb sahifalardan ma'lumotlarni avtomatik tarzda yig'ish texnikasini o'rganasiz.Ushbu kurs orqali siz Python'da veb sahifalardan ma'lumotlarni avtomatik tarzda yig'ish texnikasini o'rganasiz.Ushbu kurs orqali siz Python'da veb sahifalardan ma'lumotlarni avtomatik tarzda yig'ish texnikasini o'rganasiz.Ushbu kurs orqali siz Python'da veb sahifalardan ma'lumotlarni avtomatik tarzda yig'ish texnikasini o'rganasiz.Ushbu kurs orqali siz Python'da veb sahifalardan ma'lumotlarni avtomatik tarzda yig'ish texnikasini o'rganasiz.Ushbu kurs orqali siz Python'da veb sahifalardan ma'lumotlarni avtomatik tarzda yig'ish texnikasini o'rganasiz.Ushbu kurs orqali siz Python'da veb sahifalardan ma'lumotlarni avtomatik tarzda yig'ish texnikasini o'rganasiz.",
    
        homeworks: [
      {
        id: "hw-1",
        title: "Crawling asoslari",
        banner: "/images/hw-crawling.png",
        status: "Tekshirilgan", // yoki "Topshirilmagan", "Topshirilmoqda"
        description: "Ushbu topshiriqda siz requests kutubxonasi yordamida sahifani chaqirishni amalda bajarasiz.",
        materials: [
          {
            name: "Requests qo‘llanmasi.pdf",
            icon: FaFilePdf,
            size: "150 KB",
            link: "/files/requests.pdf"
          },
          {
            name: "Kod namunalari.xlsx",
            icon: FaFileExcel,
            size: "90 KB",
            link: "/files/code.xlsx"
          }
        ],
        comments: [
          {
            name: "Jamila Akbarova",
            date: "2024-10-15",
            text: "Topshiriq aniq va amaliy bo‘ldi.",
            avatar: news3
          }
        ],
        tasks: [
          {
            question: "requests kutubxonasi yordamida sahifani qanday chaqirasiz?",
            answered: true
          },
          {
            question: "response.json() va response.text o‘rtasidagi farq nima?",
            answered: false
          }
        ]
      },
      {
        id: "hw-2",
        title: "Crawling asoslari",
        banner: "/images/hw-crawling.png",
        status: "Tekshirilgan", // yoki "Topshirilmagan", "Topshirilmoqda"
        description: "Ushbu topshiriqda siz requests kutubxonasi yordamida sahifani chaqirishni amalda bajarasiz.",
        materials: [
          {
            name: "Requests qo‘llanmasi.pdf",
            icon: FaFilePdf,
            size: "150 KB",
            link: "/files/requests.pdf"
          },
          {
            name: "Kod namunalari.xlsx",
            icon: FaFileExcel,
            size: "90 KB",
            link: "/files/code.xlsx"
          }
        ],
        comments: [
          {
            name: "Jamila Akbarova",
            date: "2024-10-15",
            text: "Topshiriq aniq va amaliy bo‘ldi.",
            avatar: news3
          }
        ],
        tasks: [
          {
            question: "requests kutubxonasi yordamida sahifani qanday chaqirasiz?",
            answered: true
          },
          {
            question: "response.json() va response.text o‘rtasidagi farq nima?",
            answered: false
          }
        ]
      },
      {
        id: "hw-3",
        title: "Crawling asoslari",
        banner: "/images/hw-crawling.png",
        status: "Tekshirilgan", // yoki "Topshirilmagan", "Topshirilmoqda"
        description: "Ushbu topshiriqda siz requests kutubxonasi yordamida sahifani chaqirishni amalda bajarasiz.",
        materials: [
          {
            name: "Requests qo‘llanmasi.pdf",
            icon: FaFilePdf,
            size: "150 KB",
            link: "/files/requests.pdf"
          },
          {
            name: "Kod namunalari.xlsx",
            icon: FaFileExcel,
            size: "90 KB",
            link: "/files/code.xlsx"
          }
        ],
        comments: [
          {
            name: "Jamila Akbarova",
            date: "2024-10-15",
            text: "Topshiriq aniq va amaliy bo‘ldi.",
            avatar: news3
          }
        ],
        tasks: [
          {
            question: "requests kutubxonasi yordamida sahifani qanday chaqirasiz?",
            answered: true
          },
          {
            question: "response.json() va response.text o‘rtasidagi farq nima?",
            answered: false
          }
        ]
      },
      {
        id: "hw-4",
        title: "BeautifulSoup bilan ishlash",
        banner: "/images/hw-beautifulsoup.png",
        status: "Topshirilmagan",
        description: "Siz ushbu vazifada sahifadan sarlavha va linklarni ajratib olasiz.",
        materials: [],
        comments: [],
        tasks: [
          {
            question: "Taglar orqali HTML elementlarni qanday aniqlaysiz?",
            answered: false
          }
        ]
      }
    ],

    materials: [
      {
        name: "Crawling qo‘llanmasi.pdf",
        icon: FaFilePdf,
        size: "180 KB",
        link: "/files/crawling.pdf"
      },
      {
        name: "Ma’lumotlar.xlsx",
        icon: FaFileExcel,
        size: "92 KB",
        link: "/files/data.xlsx"
      }
    ],

    comments: [
      {
        name: "Jamila Akbarova",
        date: "September 20, 2023",
        text: "Kurs juda foydali bo‘ldi. Tushunarli va amaliy misollar bilan boyitilgan!",
        avatar: news3
      },
      {
        name: "Hasanboy Tursunov",
        date: "September 22, 2023",
        text: "Men bu kursni tugatdim va hozir o‘zim bot yaratayapman. Rahmat!",
        avatar: news1
      },
      {
        name: "Jamila Akbarova",
        date: "September 20, 2023",
        text: "Kurs juda foydali bo‘ldi. Tushunarli va amaliy misollar bilan boyitilgan!",
        avatar: news3
      },
      {
        name: "Hasanboy Tursunov",
        date: "September 22, 2023",
        text: "Men bu kursni tugatdim va hozir o‘zim bot yaratayapman. Rahmat!",
        avatar: news1
      },
      {
        name: "Jamila Akbarova",
        date: "September 20, 2023",
        text: "Kurs juda foydali bo‘ldi. Tushunarli va amaliy misollar bilan boyitilgan!",
        avatar: news3
      },
      {
        name: "Hasanboy Tursunov",
        date: "September 22, 2023",
        text: "Men bu kursni tugatdim va hozir o‘zim bot yaratayapman. Rahmat!",
        avatar: news1
      },
      {
        name: "Jamila Akbarova",
        date: "September 20, 2023",
        text: "Kurs juda foydali bo‘ldi. Tushunarli va amaliy misollar bilan boyitilgan!",
        avatar: news3
      },
      {
        name: "Hasanboy Tursunov",
        date: "September 22, 2023",
        text: "Men bu kursni tugatdim va hozir o‘zim bot yaratayapman. Rahmat!",
        avatar: news1
      },
      {
        name: "Jamila Akbarova",
        date: "September 20, 2023",
        text: "Kurs juda foydali bo‘ldi. Tushunarli va amaliy misollar bilan boyitilgan!",
        avatar: news3
      },
      {
        name: "Hasanboy Tursunov",
        date: "September 22, 2023",
        text: "Men bu kursni tugatdim va hozir o‘zim bot yaratayapman. Rahmat!",
        avatar: news1
      },
      {
        name: "Jamila Akbarova",
        date: "September 20, 2023",
        text: "Kurs juda foydali bo‘ldi. Tushunarli va amaliy misollar bilan boyitilgan!",
        avatar: news3
      },
      {
        name: "Hasanboy Tursunov",
        date: "September 22, 2023",
        text: "Men bu kursni tugatdim va hozir o‘zim bot yaratayapman. Rahmat!",
        avatar: news1
      },
      {
        name: "Jamila Akbarova",
        date: "September 20, 2023",
        text: "Kurs juda foydali bo‘ldi. Tushunarli va amaliy misollar bilan boyitilgan!",
        avatar: news3
      },
      {
        name: "Hasanboy Tursunov",
        date: "September 22, 2023",
        text: "Men bu kursni tugatdim va hozir o‘zim bot yaratayapman. Rahmat!",
        avatar: news1
      },
      {
        name: "Jamila Akbarova",
        date: "September 20, 2023",
        text: "Kurs juda foydali bo‘ldi. Tushunarli va amaliy misollar bilan boyitilgan!",
        avatar: news3
      },
      {
        name: "Hasanboy Tursunov",
        date: "September 22, 2023",
        text: "Men bu kursni tugatdim va hozir o‘zim bot yaratayapman. Rahmat!",
        avatar: news1
      },
      {
        name: "Jamila Akbarova",
        date: "September 20, 2023",
        text: "Kurs juda foydali bo‘ldi. Tushunarli va amaliy misollar bilan boyitilgan!",
        avatar: news3
      },
      {
        name: "Hasanboy Tursunov",
        date: "September 22, 2023",
        text: "Men bu kursni tugatdim va hozir o‘zim bot yaratayapman. Rahmat!",
        avatar: news1
      },
    ],

    sections: [
      {
        title: "1. Python asoslari",
        locked: false,
        lessons: [
          { title: "1.1 Python nima?", completed: true, locked: false },
          { title: "1.2 O‘zgaruvchilar", completed:true, locked: false },
          { title: "1.3 Listlar va Tuple", completed: false, locked: false }
        ]
      },
      {
        title: "2. Web scrapingga kirish",
        locked: true,
        lessons: [
          { title: "2.1 requests kutubxonasi", completed: false, locked: true },
          { title: "2.2 BeautifulSoup bilan ishlash", completed: false, locked: true }
        ]
      },
      {
        title: "3. Amaliy mashg‘ulotlar",
        locked: true,
        lessons: [
          { title: "3.1 StackOverflow scraping", completed: false, locked: true },
          { title: "3.2 YouTube ma’lumotlari", completed: false, locked: true }
        ]
      }
    ]
  }
];




