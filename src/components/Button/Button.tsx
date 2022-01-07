import React from 'react';
import styled from 'styled-components';
import { ButtonProps, StyledProps, Padding } from './Button.types';
import { COLOR, darken, lighten, alpha } from '../../utils/Color';

class Button extends React.Component<ButtonProps> {
  static produceStyledProps(props: ButtonProps): StyledProps {
    const { size = 'medium', color = 'primary', variant = 'text' } = props;
    const returnProps = {
      padding: Padding.medium,
      color: COLOR.primary as string,
      border: 'none',
      backgroundColor: COLOR.transparent as string,
      hoverBackgroundColor: COLOR.transparent as string,
      activeBackgroundColor: COLOR.transparent as string,
    };

    if (size !== undefined) returnProps.padding = Padding[size];

    if (color === undefined || COLOR[color] === undefined) return returnProps;

    switch (variant) {
      case 'contained':
        returnProps.color = 'white';
        returnProps.backgroundColor = COLOR[color];
        returnProps.hoverBackgroundColor = darken(COLOR[color], 0.25);
        returnProps.activeBackgroundColor = lighten(COLOR[color], 0.25);
        break;
      case 'outlined':
        returnProps.border = `2px solid ${COLOR[color]}`;
      default:
        returnProps.color = COLOR[color];
        returnProps.hoverBackgroundColor = alpha(COLOR[color], 0.2);
        returnProps.activeBackgroundColor = alpha(COLOR[color], 0.4);
        break;
    }

    return returnProps;
  }

  render() {
    const { children, disabled, classes, onClick } = this.props;
    const { padding, color, border, backgroundColor, hoverBackgroundColor, activeBackgroundColor } =
      Button.produceStyledProps(this.props);
    return (
      <StyledButton
        color={color}
        border={border}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        activeBackgroundColor={activeBackgroundColor}
        padding={padding}
        onClick={onClick}
        disabled={disabled}
        className={classes}
      >
        {children}
      </StyledButton>
    );
  }
}

const StyledButton = styled.button<StyledProps>`
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  text-transform: uppercase;
  transition: all 0.2s;
  font-weight: 700;

  // using props
  border: ${props => props.border};
  padding: ${props => props.padding};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};

  &:hover {
    background-color: ${props => props.hoverBackgroundColor};
  }

  &:active {
    background-color: ${props => props.activeBackgroundColor};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #dddddd77;
    color: #69696969;
    border: none;
  }
`;

export default Button;
