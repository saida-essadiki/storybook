/* import React from "react";
import Footer from "./Footer";
import { within, userEvent, fireEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest';
import {screen} from '@testing-library/dom'

export default {
    component: Footer,
    title: 'COMPONENTS/Footer'

}

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});

export const findFooter = Template.bind({});
findFooter.play = async ({}) => {
  
  const footer = await screen.getByText("Lets Keep in Touch!");
  await userEvent.hover(footer)
  
}

export const containRightLink = Template.bind({});
containRightLink.play = async ({}) => {
  const icons = await screen.getAllByRole('link')
  
  expect(icons[0]).toHaveAttribute('href', ('https://www.youtube.com'));
  expect(icons[1]).toHaveAttribute('href', ('https://www.facebook.com'));
  expect(icons[0]).toHaveAttribute('href', ('https://www.twitter.com'));
  expect(icons[3]).toHaveAttribute('href', ('https://www.instagram.com'));
}

export const linkOpening = Template.bind({});
linkOpening.play = async ({}) => {
  const icons = await screen.getAllByRole('link')
  
  await userEvent.click(icons[0], {delay:150});
  await userEvent.click(icons[1], {delay:150});
  await userEvent.click(icons[2], {delay:150});
  await userEvent.click(icons[3], {delay:150});
}


 */