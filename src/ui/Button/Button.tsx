import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fontSize?: number;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  type,
  fontSize = 1.5,
}) => {
  const buttonStyle: React.CSSProperties = {
    fontSize: `${fontSize}rem`,
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      style={buttonStyle}
    >
      {text}
    </button>
  );
};
