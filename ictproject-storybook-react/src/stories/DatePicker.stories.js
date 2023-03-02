import { within, userEvent } from "@storybook/testing-library";
import { DatePicker } from "./DatePicker";

export default {
  title: "Component/DatePicker",
  component: DatePicker,
  argTypes: {},
};
const Template = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});

export const WithSelectedDate = Template.bind({});
WithSelectedDate.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const nextMonth = await canvas.getByLabelText("Go to next month");
  await userEvent.click(nextMonth);
  const dayElement = await canvas.getByText("8");
  await userEvent.click(dayElement);
};
