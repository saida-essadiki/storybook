import React from "react";
import { AboutScreen } from "./AboutScreen";

export default {
  tittle: "AboutScreen",
  component: AboutScreen,
  layout: "fullscreen",
};
const Template = (args) => <AboutScreen {...args} />;
export const Def = Template.bind({});

// export const Default = () => (
//   <>
//     <Banner />
//     <About />
//     <Footer />
//   </>
// );
// const Template = (args) => <AboutScreen {...args} />;
// export const Screen = Template.bind({});
