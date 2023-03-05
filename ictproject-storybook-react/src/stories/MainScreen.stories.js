import React from "react";
import { MainScreen } from "./MainScreen";

export default {
  title: "Pages/MainScreen",
  component: MainScreen,
  layout: "fullscreen",
};
const Template = (args) => <MainScreen {...args} />;
export const Default = Template.bind({});
