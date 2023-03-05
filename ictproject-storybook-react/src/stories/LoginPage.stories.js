import React from "react";

import LoginPage from "./LoginPage";

export default {
  title: "Pages/LoginPage",
  component: LoginPage,

  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/6Os31I5hpZpvSwBvU8cChg/Web-app-prototype?node-id=2128%3A877&t=yiuUC0e1q5YUPpKk-4",
    },
  },
};

const Template = (args) => <LoginPage {...args} />;
export const Default = Template.bind({});
Default.args = {};
