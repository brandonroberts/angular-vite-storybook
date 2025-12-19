import type { Meta, StoryObj } from '@analogjs/storybook-angular';
import { SrButton } from '../components/sr-button/src/lib/sr-button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<SrButton> = {
  title: 'Example/SrButton',
  component: SrButton,
  tags: ['autodocs'],
  render: (args) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<SrButton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};