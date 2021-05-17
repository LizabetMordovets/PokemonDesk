import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color: 'yellow' | 'green';
  fullWidth?: boolean;
  size: 'normal' | 'small';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, color = 'green', size = 'normal', fullWidth }) => {
  return (
    <button
      type="button"
      className={cn(s.root, {
        [s.colorYellow]: color === 'yellow',
        [s.small]: size === 'small',
        [s.fullWidth]: fullWidth,
      })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
