import styles from './Back.module.scss';

const verticalLines = new Array(17).fill(0);
const horizontalLines = new Array(23).fill(0);

export const Back = () => {
  return (
    <div className={styles.back}>
      <div className={styles.lines}>
        {verticalLines.map((_, index) => (
          <div key={`backLine.${index}`} className={styles.verticalLine} />
        ))}
      </div>

      <div className={styles.horizontalLines}>
        {horizontalLines.map((_, index) => (
          <div key={`backLineHorizontal.${index}`} className={styles.horizontalLine} />
        ))}
      </div>
    </div>
  );
};
