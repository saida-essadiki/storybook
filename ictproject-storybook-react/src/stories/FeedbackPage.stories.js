/*import React from 'react';
import { FeedbackPage } from './FeedbackPage';

import { within, userEvent, fireEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest';

export default {
  title: 'STORIES/Feedback Page',
  layout: 'fullscreen',
  component: FeedbackPage

}

const Template = (args) => <FeedbackPage {...args} />
export const Default = Template.bind({});

export const Testing = Template.bind({});
Testing.play = async ({canvasElement, args}) => {
  const canvas = within(canvasElement)
  
  const banner = await canvas.getByText('Flexbox Banner');
  await userEvent.hover(banner)

  const feedback = await canvas.getByText('Feedback')
  await userEvent.hover(feedback);
  
  const footer1 = await canvas.getByText("Lets Keep in Touch!");
  await userEvent.hover(footer1)
  
}
  


  


 */