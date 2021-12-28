import React from 'react';
import styled from 'styled-components';
import { ButtonProps, StyledProps, Color, Padding } from './Button.types';

class Button extends React.Component<ButtonProps> {
  static defaultProps: ButtonProps = {
    size: 'medium',
    variant: 'text',
    color: 'primary',
  };

  static produceStyledProps(props: ButtonProps): StyledProps {
    const { size, color, variant } = props;
    const returnProps = {
      padding: Padding.medium,
      color: Color.primary.main as string,
      border: 'none',
      backgroundColor: Color.transparent as string,
      hoverBackgroundColor: Color.transparent as string,
      activeBackgroundColor: Color.transparent as string,
    };

    if (size !== undefined) returnProps.padding = Padding[size];

    if (color === undefined || Color[color] === undefined) return returnProps;

    switch (variant) {
      case 'contained':
        returnProps.color = 'white';
        returnProps.backgroundColor = Color[color].main;
        returnProps.hoverBackgroundColor = Color[color].light;
        returnProps.activeBackgroundColor = Color[color].dark;
        break;
      case 'outlined':
        returnProps.border = `2px solid ${Color[color].main}`;
      default:
        returnProps.color = Color[color].main;
        returnProps.hoverBackgroundColor = Color[color].main + '20';
        returnProps.activeBackgroundColor = Color[color].main + '60';
        break;
    }

    return returnProps;
  }

  render() {
    const { children, disabled, onClick } = this.props;
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
