import styles from './Button.module.scss';
import React, { FC, ReactElement } from 'react';

type TProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: ReactElement | string | number;
};

export const Button: FC<TProps> = ({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
