import project1 from '@image/project1.png';
import project2 from '@image/project2.png';
import project3 from '@image/project3.png';
import project4 from '@image/project4.png';
import project5 from '@image/project5.png';
import project6 from '@image/project6.png';
import project7 from '@image/project7.png';
import project8 from '@image/project8.png';

import imageEvent from '@image/image.png';
import imageEventTwo from '@image/smallImage.png';
import imageEventThree from '@image/smallImage2.png';
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
    image: imageEvent,
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
    startDate: '02.07.2024',
    endDate: '04.07.2024',
    direction: 'PARKOUR',
  },
  {
    id: 4,
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
    id: 5,
    image: imageEventThree,
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
    image: imageEventTwo,
    title: 'ФЕСТИВАЛЬ ГРАФФИТИ #FЛАКON',
    location: 'МОСКВА',
    description:
      'Молодёжный Центр проводит в Электростали открытый фестиваль граффити #FлакON. Будут учавствовать художники восточного Подмосковья, которые украсят 12 полотен подготовленных конструктивах.',
    startDate: '14.08.2024',
    endDate: '04.09.2024',
    direction: 'PARKOUR',
  },
  {
    id: 7,
    image: imageEventThree,
    title: 'ФЕСТИВАЛЬ Паркур_fest',
    location: 'ТУЛЬСКАЯ ОБЛ.',
    description:
      'В эту субботу своим двери откроет площадка «Экстрим» в Тульской обл. К открытию Фестиваля в зоне «Экстрим» будет выстроена полноценная полоса препятствий, ведь именно здесь два дня подряд будут соревноваться лучшие трейсеры нашей страны.',
    startDate: '02.07.2024',
    endDate: '04.07.2024',
    direction: 'PARKOUR',
  },
];

export const cardsForRegionTeam = [
  {
    id: 1,
    image: managerFour,
    name: 'Анастасия Янченко',
    description: 'Председатель',
    location: 'Ставропольский край',
  },
  {
    id: 2,
    image: managerFive,
    name: 'Илья Безуглов',
    description: 'Председатель',
    location: 'Тульская область',
  },
  {
    id: 3,
    image: managerSix,
    name: 'Александр Григорьев',
    description: 'Председатель',
    location: 'Томская область',
  },
  {
    id: 4,
    image: managerFour,
    name: 'Анастасия Янченко',
    description: 'Председатель',
    location: 'Ставропольский край',
  },
  {
    id: 5,
    image: managerFive,
    name: 'Илья Безуглов',
    description: 'Председатель',
    location: 'Тульская область',
  },
  {
    id: 6,
    image: managerSix,
    name: 'Александр Григорьев',
    description: 'Председатель',
    location: 'Томская область',
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
  },
  {
    id: 2,
    image: managerTwo,
    name: 'Вячеслав Груднев',
    description: 'Заместитель Председателя',
  },
  {
    id: 3,
    image: managerThree,
    name: 'Ксения Замерова',
    description: 'Заместитель Председателя',
  },
];
