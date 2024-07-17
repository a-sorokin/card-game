import styles from './Layout.module.scss';
import { Game } from 'features/game';

export const Layout = () => {
  return (
    <main className={styles.layout}>
      <Game />
    </main>
  );
};
