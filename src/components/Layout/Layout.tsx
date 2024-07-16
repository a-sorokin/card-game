import styles from './Layout.module.scss';
import { Game } from 'features/game/components/Game/Game';

export const Layout = () => {
  return (
    <main className={styles.layout}>
      <Game />
    </main>
  );
};
