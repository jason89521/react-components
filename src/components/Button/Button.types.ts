import React from 'react';

type ColorType = 'primary' | 'info';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'contained' | 'outlined';
  color?: ColorType;
  disabled?: boolean;
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

export enum Padding {
  small = '.5rem 1rem',
  medium = '.75rem 1.5rem',
  large = '1rem 2rem',
}

export const Color = {
  transparent: 'transparent',
  primary: '#55c57a',
  info: '#438cfa',
} as const;
