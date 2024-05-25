// import React from 'react';
// import styles from './CardTeam.module.scss';

// const baseUrl = 'https://streetrussia-team-4.github.io/frontend/#/about-us/';

export interface CardTeamProps {
  data: CardTeamData;
  region?: string;
  federal: boolean;
}

export interface CardTeamData {
  id: number;
  image: string | HTMLImageElement;
  name: string;
  description: string;
  location: string;
}

// export const CardEvent: React.FC<CardTeamProps> = ({
//   data,
//   region,
//   federal,
// }) => {
//   const { id, image, name, description, location } = data;

//   return (
//     <li>
//       <a>
//         <img></img>
//         <h4></h4>
//         <div>
//           <div></div>
//           <p></p>
//         </div>
//       </a>
//     </li>
//   );
// };
