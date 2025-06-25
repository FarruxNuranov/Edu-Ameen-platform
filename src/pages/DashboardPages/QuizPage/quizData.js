export const quizzes = [
  {
    id: 1,
    title: "Kompaniyada uchraydigan muammolarga HR beradigan yechimlar",
    time: "15:00",
    questions: [
      {
        id: 1,
        text: "1. HRning vazifalari qaysi variantda to‘g‘ri keltirilgan?",
        options: [
          "Hodimning samaradorligini oshirish",
          "Hodimlarga oylik maoshlarni hisoblab oylik berish",
          "Kompaniya tizimini yaratish",
          "Barcha javoblar to‘g‘ri",
        ],
      },
      {
        id: 2,
        text: "2. HR rejalashtirish nima uchun kerak?",
        options: [
          "Kadrlar bozoridan so‘zma-so‘z",
          "Moliyaviy hisobot uchun kerak",
          "Mehnat bozoridagi tahlil uchun",
          "Missiya va qadriyatlarni kitob qilish",
        ],
      },
      // Примерно таких добавим до 15
      ...Array.from({ length: 13 }, (_, i) => ({
        id: i + 3,
        text: `${i + 3}. HRning vazifalari qaysi variantda to‘g‘ri keltirilgan?`,
        options: [
          "Hodimning samaradorligini oshirish",
          "Hodimlarga oylik maoshlarni hisoblab oylik berish",
          "Kompaniya tizimini yaratish",
          "Barcha javoblar to‘g‘ri",
        ],
      })),
    ],
  },
  {
    id: 2,
    title: "Ishdagi stressni boshqarish",
    time: "15:00",
    questions: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      text: `${i + 1}. Stressni kamaytirish uchun nima qilish kerak?`,
      options: [
        "Nafas mashqlari bajarish",
        "Kofe ichish",
        "Ko‘proq ish yukini olish",
        "Hech narsa qilmaslik",
      ],
    })),
  },
];
