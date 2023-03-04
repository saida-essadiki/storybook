import React from "react";
import { FeedbackPage } from "./FeedbackPage";

import { within, userEvent, fireEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "STORIES/Feedback Page",
  layout: "fullscreen",
  component: FeedbackPage,
};

const Template = (args) => <FeedbackPage {...args} />;
export const Default = Template.bind({});
