import imageOne from '@image/eventOne.png';
import imageTwo from '@image/eventTwo.png';
import imageThree from '@image/eventThree.png';
import imageProject from '@image/image-project.png';
import imageProjectTwo from '@image/image-project2.png';
import imageEvent from '@image/image.png';
import imageEventTwo from '@image/smallImage.png';
import imageEventThree from '@image/smallImage2.png';

// export const API_HOST = import.meta.env.VITE_API_HOST;
// export const API_ROUTE = import.meta.env.VITE_API_ROUTE;
// export const API_URL = `${API_HOST}${API_ROUTE}`;

export const API_HOST = 'http://213.189.221.212';
export const API_ROUTE = '/api/v1';
export const API_URL = `${API_HOST}${API_ROUTE}`;

export const cardsForProjets = [
  {
    id: 1,
    image: imageOne,
    current_status: 'current',
    title: 'SCATEBOARDING ПЛОЩАДКА',
    location: 'РЯЗАНСКАЯ ОБЛ.',
    description: 'Планируем поставить рампы, разгонки и перила.',
    startDate: '24.01.2024',
    endDate: '24.03.2025',
    fundsRaised: 6000,
    goal: 38000,
  },
  {
    id: 2,
    image: imageTwo,
    current_status: 'current',
    title: 'SCATEBOARDING ПЛОЩАДКА',
    location: 'РЯЗАНСКАЯ ОБЛ.',
    description: 'Планируем поставить рампы, разгонки и перила.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
    fundsRaised: 16000,
    goal: 100000,
  },
  {
    id: 3,
    image: imageThree,
    current_status: 'current',
    title: 'SCATEBOARDING ПЛОЩАДКА',
    location: 'РЯЗАНСКАЯ ОБЛ.',
    description: 'Планируем поставить рампы, разгонки и перила.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
    fundsRaised: 20000,
    goal: 50400,
  },
  {
    id: 4,
    image: imageThree,
    current_status: 'current',
    title: 'SCATEBOARDING ПЛОЩАДКА',
    location: 'РЯЗАНСКАЯ ОБЛ.',
    description: 'Планируем поставить рампы, разгонки и перила.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
    fundsRaised: 40000,
    goal: 50500,
  },
  {
    id: 5,
    image: imageProject,
    current_status: 'future',
    title: 'СКЕЙТПАРК',
    location: 'ПЕРМСКИЙ КРАЙ',
    description: 'Будем устанавливать рампы, фанбоксы, разгонки, рейлы.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
  },
  {
    id: 6,
    image: imageProjectTwo,
    current_status: 'future',
    title: 'WORK OUT ПЛОЩАДКА',
    location: 'ТВЕРСКАЯ ОБЛ.',
    description: 'Планируем поставить змейку, брусья, турники, перекладины.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
  },
  {
    id: 7,
    image: imageProject,
    current_status: 'future',
    title: 'SCATEBOARDING ПЛОЩАДКА',
    location: 'РЯЗАНСКАЯ ОБЛ.',
    description: 'Планируем поставить рампы, разгонки и перила.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
  },
  {
    id: 8,
    image: imageProjectTwo,
    current_status: 'future',
    title: 'SCATEBOARDING ПЛОЩАДКА',
    location: 'РЯЗАНСКАЯ ОБЛ.',
    description: 'Планируем поставить рампы, разгонки и перила.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
  },
];

export const cardsForEvents = [
  {
    id: 1,
    image: imageEvent,
    title: 'BLACK MOVES VOL.19',
    location: 'РЯЗАНСКАЯ ОБЛ.',
    description:
      'На территории спортивного комплекса "Знамя"  пройдет первое крупнейшее соревнование в России среди скейтеров. Участниками соревнований станут подростки и молодые люди, которые не так давно стартанули в данных направлениях экстремального спорта.',
    startDate: '24.06.2024',
    endDate: '25.06.2024',
  },
  {
    id: 2,
    image: imageEventTwo,
    title: 'ФЕСТИВАЛЬ ГРАФФИТИ #FЛАКON',
    location: 'МОСКВА',
    description:
      'Молодёжный Центр проводит в Электростали открытый фестиваль граффити #FлакON. Будут учавствовать художники восточного Подмосковья, которые украсят 12 полотен подготовленных конструктивах.',
    startDate: '14.08.2024',
    endDate: '04.09.2024',
  },
  {
    id: 3,
    image: imageEventThree,
    title: 'ФЕСТИВАЛЬ Паркур_fest',
    location: 'ТУЛЬСКАЯ ОБЛ.',
    description:
      'В эту субботу своим двери откроет площадка «Экстрим» в Тульской обл. К открытию Фестиваля в зоне «Экстрим» будет выстроена полноценная полоса препятствий, ведь именно здесь два дня подряд будут соревноваться лучшие трейсеры нашей страны.',
    startDate: '02.07.2024',
    endDate: '04.07.2024',
  },
];
