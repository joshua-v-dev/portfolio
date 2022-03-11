// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

// import  ButtonProps   from '../../src/components/MultiComp/Button';
import  Button  from '../../src/components/MultiComp/Button';

export default typeof Button === 'function' ? {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof  Button>: {};  
//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
// export const Primary: ComponentStory<typeof Button> = () => <Button primary>Button</Button>;
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};