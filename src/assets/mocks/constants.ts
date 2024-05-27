import project1 from '@image/project1.png';
import project2 from '@image/project2.png';
import project3 from '@image/project3.png';
import project4 from '@image/project4.png';
import project5 from '@image/project5.png';
import project6 from '@image/project6.png';
import project7 from '@image/project7.png';
import project8 from '@image/project8.png';
import streetCall from '@image/street-call-event.png';
import breakingEvent from '@image/breaking-event.png';
import microfonEvent from '@image/microfon-event.png';
import imageEventBig from '@image/events-big-image.png';
import imageEvent from '@image/image.png';
import imageEventTwo from '@image/smallImage.png';
import imageEventThree from '@image/smallImage2.png';
import eventMoscow from '@image/evnt-moscow.png';
import eventMoscow2 from '@image/event-moscow2.png';
import imageDetailProject from '@image/project-detail-pic.png';
import completedProjectOne from '@image/completed-one.png';
import completedProjectTwo from '@image/completed-two.png';
import completedProjectThree from '@image/completed-three.png';
import managerOne from '@image/manager.png';
import managerTwo from '@image/manager2.png';
import managerThree from '@image/manager3.png';
import managerFour from '@image/manager4.png';
import managerFive from '@image/manager5.png';
import managerSix from '@image/manager6.png';
import managerSeven from '@image/manager7.png';
import managerEight from '@image/manager8.png';
import news from '@image/new.png';
import newsTwo from '@image/new2.png';
import newsThree from '@image/new3.png';
import article from '@image/article.png';
import articleTwo from '@image/article2.png';
import articleThree from '@image/article3.png';
import interview from '@image/interview.png';
import interviewTwo from '@image/interview2.png';
import interviewThree from '@image/interview3.png';
import advice from '@image/advice.png';
import adviceTwo from '@image/advice2.png';
import adviceThree from '@image/advice3.png';

// import PicOne from '@image/street-art--pic.png';
// import PicTwo from '@image/street--art-pic2.png';

import { Project } from '@/type/type';

// export const API_HOST = import.meta.env.VITE_API_HOST;
// export const API_ROUTE = import.meta.env.VITE_API_ROUTE;
// export const API_URL = `${API_HOST}${API_ROUTE}`;

export const API_HOST = 'http://213.189.221.212';
export const API_ROUTE = '/api/v1';
export const API_URL = `${API_HOST}${API_ROUTE}`;

export const teamVideo_URL = 'https://youtu.be/Ks0eHBSNFwA?si=CipNTAfpXajOKZw0';

export const projectDetail: Project = {
  id: 0,
  current_status: 'current',
  name: 'PARKOUR—ПЛОЩАДКА',
  description: `Паркур – спорт, включающий бег, прыжки, элементы скалолазания. Люди, развлекающие себя преодолением препятствий из бетона или дерева, учатся рассчитывать свои силы, развивают координацию движений, крепость тела и духа. Чтобы молодое поколение не бегало по строительным объектам, устанавливаются специальные сооружения по плану паркур площадки.
  Площадка будет представлять собой конструкцию из металла, дерева, прочного пластика, соединенные между собой хомутами. Скамейки, навесы делаются из влагостойких материалов, не поддающихся погодным явлениям. Схема паркур площадки рассчитана не только с точки зрения удобства, сложности выполнения трюков, но и безопасности, прочности, а также, по возможности, вандалоустойчивости.
  Для маленьких спортсменов будет предусмотрена детская паркур-площадка. Она  отличаются меньшим размером, наличием большого количества перекладин, поддерживающих элементов, а также яркими расцветками оборудования.`,
  region: {
    id: 1,
    name: 'СМОЛЕНСКАЯ ОБЛ.',
  },
  partners: [],
  preview: imageDetailProject,
  start_date: '0000-00-00',
  end_date: '0000-00-00',
  funds_raised: 0,
  goal: 0,
};

export const cardsForProjets = [
  {
    id: 1,
    image: project1,
    current_status: 'current',
    title: 'SCATEBOARDING ПЛОЩАДКА',
    location: 'РЯЗАНСКАЯ ОБЛ.',
    description: 'Планируем поставить рампы, разгонки и перила.',
    startDate: '24.01.2024',
    endDate: '24.03.2025',
    fundsRaised: 320000,
    goal: 780000,
  },
  {
    id: 2,
    image: project2,
    current_status: 'current',
    title: 'PARCOUR-ПЛОЩАДКА',
    location: 'СМОЛЕНСКАЯ ОБЛ.',
    description: 'Будем устанавливать шары, угловые рельсы, пирамиды, полосы.',
    startDate: '01.05.2024',
    endDate: '01.06.2025',
    fundsRaised: 240100,
    goal: 650000,
  },
  {
    id: 3,
    image: project3,
    current_status: 'current',
    title: 'ПЛОЩАДКА ДЛЯ BMX',
    location: 'ТАМБОВСКАЯ ОБЛ.',
    description: 'Поставим вулкан, спайны, вертволл, хипы, волл райд.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
    fundsRaised: 120500,
    goal: 980500,
  },
  {
    id: 4,
    image: project4,
    current_status: 'current',
    title: 'ПЛОЩАДКА ДЛЯ BMX',
    location: 'ТАМБОВСКАЯ ОБЛ.',
    description: 'Поставим вулкан, спайны, вертволл, хипы, волл райд.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
    fundsRaised: 120500,
    goal: 980500,
  },
  {
    id: 5,
    image: project5,
    current_status: 'current',
    title: 'PARKOUR-ПЛОЩАДКА',
    location: 'РЕСПУБЛИКА КОМИ',
    description:
      'Устанавливаем коробки, пирамиды, скамейки, стены, платформы, полосы, брусы-балансиры',
    startDate: '01.05.2024',
    endDate: '01.06.2025',
    fundsRaised: 240080,
    goal: 650500,
  },
  {
    id: 6,
    image: project6,
    current_status: 'current',
    title: 'СКЕЙТ-ПАРК И ЗОНА ОТДЫХА',
    location: 'ВЛАДИМИРСКАЯ ОБЛ.',
    description: 'Поставим рампы и бассейны, а так же шатер со скамейками',
    startDate: '01.05.2024',
    endDate: '01.06.2025',
    fundsRaised: 120000,
    goal: 980500,
  },
  {
    id: 7,
    image: project7,
    current_status: 'current',
    title: 'ПЕРВЫЙ ТУЛЬСКИЙ СКАЛАДРОМ',
    location: 'ТУЛЬСКАЯ ОБЛ.',
    description: 'Строим 3 конструкции для скалодрома разной сложности',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
    fundsRaised: 320040,
    goal: 780500,
  },
  {
    id: 8,
    image: project8,
    current_status: 'current',
    title: 'РАЗГОННЫЕ КОНСТРУКЦИИ',
    location: 'САРАТОВСКАЯ ОБЛ.',
    description: 'Обновляем разгонные конструкции для Саратовского скейт-парка',
    startDate: '01.05.2025',
    endDate: '01.06.2025',
    fundsRaised: 240100,
    goal: 650000,
  },
  {
    id: 9,
    image: project8,
    current_status: 'current',
    title: 'РАМПА',
    location: 'МОСКВА',
    description:
      'Возводим новую, более эргономичную конструкцию для скейтеров  в самом сердце Москвы',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
    fundsRaised: 120030,
    goal: 980400,
  },
  {
    id: 10,
    image: project7,
    current_status: 'future',
    title: 'СКЕЙТПАРК',
    location: 'ПЕРМСКИЙ КРАЙ',
    description: 'Будем устанавливать рампы, фанбоксы, разгонки, рейлы.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
  },
  {
    id: 11,
    image: project5,
    current_status: 'future',
    title: 'WORK OUT ПЛОЩАДКА',
    location: 'ТВЕРСКАЯ ОБЛ.',
    description: 'Планируем поставить змейку, брусья, турники, перекладины.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
  },
  {
    id: 12,
    image: project3,
    current_status: 'future',
    title: 'SCATEBOARDING ПЛОЩАДКА',
    location: 'РЯЗАНСКАЯ ОБЛ.',
    description: 'Планируем поставить рампы, разгонки и перила.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
  },
  {
    id: 13,
    image: managerSix,
    current_status: 'future',
    title: 'SCATEBOARDING ПЛОЩАДКА',
    location: 'РЯЗАНСКАЯ ОБЛ.',
    description: 'Планируем поставить рампы, разгонки и перила.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
  },
  {
    id: 14,
    image: completedProjectOne,
    current_status: 'done',
    title: 'SCATEBOARDING ПЛОЩАДКА',
    location: 'РЯЗАНСКАЯ ОБЛ.',
    description: 'Планируем поставить рампы, разгонки и перила.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
  },
  {
    id: 15,
    image: completedProjectTwo,
    current_status: 'done',
    title: 'SCATEBOARDING ПЛОЩАДКА',
    location: 'РЯЗАНСКАЯ ОБЛ.',
    description: 'Планируем поставить рампы, разгонки и перила.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
  },
  {
    id: 16,
    image: completedProjectThree,
    current_status: 'done',
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
    image: imageEventBig,
    title: 'BLACK MOVES VOL.19',
    location: 'РЯЗАНСКАЯ ОБЛ.',
    description:
      'На территории спортивного комплекса "Знамя"  прошло первое крупнейшее соревнование в России среди скейтеров. Участниками соревнований станут подростки и молодые люди, которые не так давно стартанули в данных направлениях экстремального спорта.',
    startDate: '24.02.2024',
    direction: 'SKATEBOARDING',
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
    direction: 'STREET ART',
  },
  {
    id: 3,
    image: imageEventThree,
    title: 'ФЕСТИВАЛЬ Паркур_fest',
    location: 'ТУЛЬСКАЯ ОБЛ.',
    description:
      'В эту субботу своим двери откроет площадка «Экстрим» в Тульской обл. К открытию Фестиваля в зоне «Экстрим» будет выстроена полноценная полоса препятствий, ведь именно здесь два дня подряд будут соревноваться лучшие трейсеры нашей страны.',
    startDate: '30.05.2024',
    endDate: '04.07.2024',
    direction: 'PARKOUR',
  },
  {
    id: 31,
    image: eventMoscow2,
    title: 'GRAND MOSCOW SKATE TOUR',
    location: 'МОСКВА',
    description:
      'В Парке Горького впервые пройдет Grand Skate Tour 2024 – мероприятие, воплощающее олимпийский дух и объединяющее скейтбордистов всего мира.',
    startDate: '23.06.2024',
    direction: 'PARKOUR',
  },
  {
    id: 32,
    image: eventMoscow,
    title: 'WORK OUT KIDS',
    location: 'МОСКВА',
    description:
      'Это будет увлекательное и полезное мероприятие, где каждый сможет проявить свою силу, гибкость и выносливость. Мы подготовили интересные задания и конкурсы, которые помогут вам улучшить свои навыки и весело провести время. Приходите и покажите всё, на что способны!',
    startDate: '30.07.2024',
    direction: 'PARKOUR',
  },

  {
    id: 4,
    image: streetCall,
    title: 'ВЫЗОВ УЛИЦ',
    location: 'ПЕРМСКИЙ КРАЙ',
    description:
      'Пройдут первые на всю историю Пермского края соревнования по BMX! Это будет захватывающее зрелище, где участники покажут своё мастерство и бесстрашие. Приходите и поддержите спортсменов, вы точно не пожалеете! Победители получат  денежные призы.',
    startDate: '14.08.2024',
    endDate: '04.09.2024',
    direction: 'STREET ART',
  },
  {
    id: 5,
    image: imageEvent,
    title: 'ФЕСТИВАЛЬ Паркур_fest',
    location: 'ТУЛЬСКАЯ ОБЛ.',
    description:
      'В эту субботу своим двери откроет площадка «Экстрим» в Тульской обл. К открытию Фестиваля в зоне «Экстрим» будет выстроена полноценная полоса препятствий, ведь именно здесь два дня подряд будут соревноваться лучшие трейсеры нашей страны.',
    startDate: '02.07.2024',
    endDate: '04.07.2024',
    direction: 'PARKOUR',
  },
  {
    id: 6,
    image: microfonEvent,
    title: 'МИКРОФОН 1.0',
    location: 'САРАТОВСКАЯ ОБЛ.',
    description:
      'На ежегодном фестивале электронной музыки пройдет соревнование по реп-баттлам. Участники покажут свои навыки в речитативе, импровизации и подаче материала. Судьи будут оценивать технику исполнения, оригинальность текстов и общую энергетику выступления. Ждем вам и ваших друзей.',
    startDate: '14.08.2024',
    endDate: '04.09.2024',
    direction: 'PARKOUR',
  },
  {
    id: 7,
    image: breakingEvent,
    title: 'ФТСАРР БРЕЙКИНГ',
    location: 'ВЛАДИМИРСКАЯ ОБЛ.',
    description:
      'Состоятся соревнования по брейк-дансу! Это будет яркое и энергичное событие, где участники продемонстрируют своё мастерство и талант. Приходите поддержать танцоров и насладиться их выступлениями! К участию допускаются дети и взрослые! Не стесняйтесь-проявите себя!',
    startDate: '02.07.2024',
    endDate: '04.07.2024',
    direction: 'BREAKING',
  },
];

export const cardsForRegionTeam = [
  {
    id: 1,
    image: managerFour,
    name: 'Анастасия Янченко',
    description: 'Председатель',
    location: 'Ставропольский край',
    link: 'https://vk.com/n.gladunova',
  },
  {
    id: 2,
    image: managerFive,
    name: 'Илья Безуглов',
    description: 'Председатель',
    location: 'Тульская область',
    link: 'https://vk.com/deadtracer',
  },
  {
    id: 3,
    image: managerSix,
    name: 'Александр Григорьев',
    description: 'Председатель',
    location: 'Томская область',
    link: 'https://vk.com/takteek',
  },
  {
    id: 4,
    image: managerSeven,
    name: 'Алла Жукова',
    description: 'Председатель',
    location: 'Ростовская область',
    link: 'https://vk.com/raraavis69',
  },
  {
    id: 5,
    image: managerEight,
    name: 'Мария Коробейникова',
    description: 'Председатель',
    location: 'Ямало-Ненецкий автономный округ',
    link: 'https://vk.com/korobeynikovamaria',
  },
];

export const documents = [
  {
    title: 'Протокол 1 от 5.10.2021 - учредительное собрание',
    type: 'внутренние',
    date: '05.10.2021',
    downloadLink: '#',
  },
  {
    title: 'Манифест Ценностей Организации',
    type: 'внутренние',
    date: '01.05.2023',
    downloadLink: '#',
  },
];

export const cardsForFederalTeam = [
  {
    id: 1,
    image: managerOne,
    name: 'Валентин Работенко',
    description: 'Председатель',
    link: 'https://vk.com/rvorigin',
  },
  {
    id: 2,
    image: managerTwo,
    name: 'Вячеслав Груднев',
    description: 'Заместитель Председателя',
    link: 'https://vk.com/v.grudnev',
  },
  {
    id: 3,
    image: managerThree,
    name: 'Ксения Замерова',
    description: 'Заместитель Председателя',
    link: 'https://vk.com/kszamerova',
  },
];

export const cardsForNews = [
  {
    id: 1,
    image: news,
    title:
      'ВОЛЖАНЕ РАЗРИСОВЫВАЛИ СТЕНЫ ГРАФФИТИ И ПОКАЗЫВАЛИ «КАРТИНЫ НЕ ДЛЯ ВСЕХ»',
    author: 'Марина Чарова',
  },
  {
    id: 1,
    image: newsTwo,
    title: 'ПЕРВЫЙ ФЕСТИВАЛЬ УЛИЧНОЙ КУЛЬТУРЫ ВО ВЛАДИВОСТОКЕ',
    author: 'Рауль Генрих',
  },
  {
    id: 1,
    image: newsThree,
    title: 'ФЕСТИВАЛЬ УЛИЧНЫХ КУЛЬТУР В СТАВРОПОЛЕ',
    author: 'Павел Лысогор',
  },
];

export const cardsForArticle = [
  {
    id: 1,
    image: article,
    title:
      'ВОЛЖАНЕ РАЗРИСОВЫВАЛИ СТЕНЫ ГРАФФИТИ И ПОКАЗЫВАЛИ «КАРТИНЫ НЕ ДЛЯ ВСЕХ»',
    author: 'Марина Чарова',
  },
  {
    id: 1,
    image: articleTwo,
    title: 'ПЕРВЫЙ ФЕСТИВАЛЬ УЛИЧНОЙ КУЛЬТУРЫ ВО ВЛАДИВОСТОКЕ',
    author: 'Рауль Генрих',
  },
  {
    id: 1,
    image: articleThree,
    title: 'ФЕСТИВАЛЬ УЛИЧНЫХ КУЛЬТУР В СТАВРОПОЛЕ',
    author: 'Павел Лысогор',
  },
];

export const cardsForInterview = [
  {
    id: 1,
    image: interview,
    title:
      'ВОЛЖАНЕ РАЗРИСОВЫВАЛИ СТЕНЫ ГРАФФИТИ И ПОКАЗЫВАЛИ «КАРТИНЫ НЕ ДЛЯ ВСЕХ»',
    author: 'Марина Чарова',
  },
  {
    id: 1,
    image: interviewTwo,
    title: 'ПЕРВЫЙ ФЕСТИВАЛЬ УЛИЧНОЙ КУЛЬТУРЫ ВО ВЛАДИВОСТОКЕ',
    author: 'Рауль Генрих',
  },
  {
    id: 1,
    image: interviewThree,
    title: 'ФЕСТИВАЛЬ УЛИЧНЫХ КУЛЬТУР В СТАВРОПОЛЕ',
    author: 'Павел Лысогор',
  },
];

export const cardsForAdvice = [
  {
    id: 1,
    image: advice,
    title:
      'ВОЛЖАНЕ РАЗРИСОВЫВАЛИ СТЕНЫ ГРАФФИТИ И ПОКАЗЫВАЛИ «КАРТИНЫ НЕ ДЛЯ ВСЕХ»',
    author: 'Марина Чарова',
  },
  {
    id: 1,
    image: adviceTwo,
    title: 'ПЕРВЫЙ ФЕСТИВАЛЬ УЛИЧНОЙ КУЛЬТУРЫ ВО ВЛАДИВОСТОКЕ',
    author: 'Рауль Генрих',
  },
  {
    id: 1,
    image: adviceThree,
    title: 'ФЕСТИВАЛЬ УЛИЧНЫХ КУЛЬТУР В СТАВРОПОЛЕ',
    author: 'Павел Лысогор',
  },
];

export const streetArt = {
  subtitle: 'STREET ART',
  paragraphs: [
    'Стрит-арт - это разновидность современного уличного искусства. Вплоть широкого заблуждения, что граффити является единственным проявлением стрит-арта. Однако, это не так, граффити является лишь одним из видов уличного искусства, но далеко не единственным.',
    'Разделение на стили можно наблюдать в основном среди граффити: writing, bombing, tagging, bubble-letters, throw-up, character, wild-style, 3D-style. Стрит-арт своеобразный способ выразить себя и свое творчество, а также самоутвердиться в обществе.',
  ],
  images: ['@image/street-art--pic.png', '@image/street--art-pic2.png'],
  videoUrl: 'https://www.youtube.com/watch?v=WZR_pnSyt5A',
};
