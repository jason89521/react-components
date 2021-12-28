import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '..';

export default {
  title: 'Button',
  components: Button,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      defaultValue: 'medium',
    },
    color: {
      options: ['primary', 'info'],
      control: { type: 'select' },
      defaultValue: 'primary',
    },
    variant: {
      options: ['text', 'outlined', 'contained'],
      control: { type: 'select' },
      defaultValue: 'text',
    },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>click me</Button>;

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: 'small',
};

export const InfoButton = Template.bind({});
InfoButton.args = {
  color: 'info',
};

export const ContainedButton = Template.bind({});
ContainedButton.args = {
  variant: 'contained',
};
