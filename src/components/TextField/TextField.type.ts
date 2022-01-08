import React from 'react';

export interface TextFieldProps {
  id?:string;
  label?: string;
  multiline?: boolean;
  rows?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface TextFieldState {
  value: string;
}
