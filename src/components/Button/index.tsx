import { FC, ComponentProps, ReactNode } from 'react';
import styles from './button.module.scss';

import clsx from 'clsx';

type ButtonType = 'contained' | 'outlined';

type ButtonProps = ComponentProps<'button'> & {
  variant: ButtonType;
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ variant, children, disabled }) => {
  const css = clsx(
    styles.button,
    variant === 'contained' && styles.contained,
    variant === 'outlined' && styles.outlined,
  );
  return (
    <button className={css} disabled={disabled}>
      {children}
    </button>
  );
};
