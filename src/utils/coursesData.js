import { courses1 } from "./getimage";

// src/utils/coursesData.js
export const coursesData = [
  {
    id: '1',
    title: 'HR Kursi',
    banner: courses1, // замените на свой URL-баннера
    date: 'MAR 13 2020',
    rating: 4.7,
    description: `
      Vel nihil cumque quos dolorem culpa. 
      Deleniti officiis et quisquam voluptates 
      Asperiores error eum saepe qui omnis at velit [...]
    `,
    author: {
      name: "Kozimxon To’rayev",
      role: "O‘qituvchi",
      avatar: 'https://via.placeholder.com/40' // или путь к вашему аватару
    },
    modules: [
      { id: '1.1', title: 'Kompaniya missiyasi, qadriyatlari' },
      { id: '1.2', title: 'HR Rejalashtirish' },
      { id: '1.3', title: 'Ishga olish va adaptatsiya tizimi' },
      { id: '1.4', title: 'Maosh, imtiyozlar va KPI tizimi' },
      { id: '1.1', title: 'Kompaniya missiyasi, qadriyatlari' },
      { id: '1.2', title: 'HR Rejalashtirish' },
      { id: '1.3', title: 'Ishga olish va adaptatsiya tizimi' },
      { id: '1.4', title: 'Maosh, imtiyozlar va KPI tizimi' },
      { id: '1.1', title: 'Kompaniya missiyasi, qadriyatlari' },
      { id: '1.2', title: 'HR Rejalashtirish' },
      { id: '1.3', title: 'Ishga olish va adaptatsiya tizimi' },
      { id: '1.4', title: 'Maosh, imtiyozlar va KPI tizimi' },
      { id: '1.1', title: 'Kompaniya missiyasi, qadriyatlari' },
      { id: '1.2', title: 'HR Rejalashtirish' },
      { id: '1.3', title: 'Ishga olish va adaptatsiya tizimi' },
      { id: '1.4', title: 'Maosh, imtiyozlar va KPI tizimi' },
      // …другие уроки
    ],
    stats: {
      students: 15,
      duration: '5 soat',
      lectures: 5,
      videos: 5
    }
  },

  {
    id: '2',
    title: 'Human Resource Management',
    banner: courses1,
    date: 'APR 02 2021',
    description: `Vel nihil cumque quos dolorem culpa. Deleniti officiis et et quisquam voluptas. Asperiores error eum saepe qui omnis at velit […]  Vel nihil cumque quos dolorem culpa. Deleniti officiis et et quisquam voluptas. Asperiores error eum saepe qui omnis at velit […]`,
    rating: 4.7,
    author: {
      name: "Kozimxon To’rayev",
      role: "O‘qituvchi",
      avatar: 'https://via.placeholder.com/40'
    },
    modules: [
      { id: '2.1', title: 'Module A' },
      { id: '2.2', title: 'Module B' },
    ],
    stats: {
      students: 32,
      duration: '3 soat',
      lectures: 8,
      videos: 8
    }
  },

  // …другие курсы
];
