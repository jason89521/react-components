import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '..';

export default {
  title: 'Button',
  components: Button,
  argTypes: {
    variant: { control: 'select', options: ['text', 'outlined', 'contained'] },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>click me</Button>;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
Small.argTypes = {
  size: { control: 'select', options: ['small', 'medium', 'large'] },
};

export const Info = Template.bind({});
Info.args = {
  color: 'info',
};
Info.argTypes = {
  color: { control: 'select', options: ['primary', 'info', 'success', 'error', 'warning'] },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
