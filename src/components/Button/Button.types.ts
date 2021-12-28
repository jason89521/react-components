import React from 'react';

type ColorType = 'primary' | 'warning' | 'info';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'contained' | 'outlined';
  color?: ColorType;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface StyledProps {
  readonly padding: string;
  readonly border: string;
  readonly color: string;
  readonly backgroundColor: string;

  // hover
  readonly hoverBackgroundColor: string;

  // active
  readonly activeBackgroundColor: string;
}

export enum Color {
  transparent = 'transparent',
  white = '#ffffff',
  primary = '#55c57a',
  warning = '#ff7730',
  info = '#2998ff',
}

export enum Padding {
  small = '.25rem .5rem',
  medium = '.75rem 1.5rem',
  large = '1rem 2rem',
}
