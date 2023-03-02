// LoginForm.stories.js|jsx

import React from "react";

import { within, userEvent } from "@storybook/testing-library";

import { expect } from "@storybook/jest";

import { LoginForm } from "./LoginForm";
import "./Button.stories";

export default {
  title: "Component/LoginForm",
  component: LoginForm,
};

const Template = (args) => <LoginForm {...args} />;

export const EmptyForm = Template.bind({});

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByTestId("email"), "email@email.com");

  await userEvent.type(canvas.getByTestId("password"), "a-random-password");

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole("button"));

  // 👇 Assert DOM structure
  await expect(
    canvas.getByText(
      "Your account is ready and we should probably get you started!"
    )
  ).toBeInTheDocument();
};
