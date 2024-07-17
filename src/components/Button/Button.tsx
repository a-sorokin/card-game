import styles from './Button.module.scss';
import React, { FC, ReactElement } from 'react';
import clsx from 'clsx';

type TProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  children?: ReactElement | string | number;
  className?: string;
};

export const Button: FC<TProps> = ({ onClick, children, className }) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};
