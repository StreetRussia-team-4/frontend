import ReactPlayer from 'react-player/youtube';
import styles from './TeamVideoPage.module.scss';
import { teamVideo_URL } from '@/assets/mocks/constants';

export const TeamVideoPage: React.FC = () => {
  return (
    <div className={styles.teamVideo}>
      <h1>О КОМАНДЕ</h1>
      <div className={styles.videoContainer}>
        <ReactPlayer
          light
          url={teamVideo_URL}
          width="1000px"
          height="650px"
          controls={false}
          className={styles.reactPlayer}
        />
      </div>
    </div>
  );
};
