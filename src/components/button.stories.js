import React from "react";
import { Button } from "./button";

export default {
  component: Button,
  title: "Components/Button",
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  fullWidth: false,
  disabled: false,
  isLoading: false,
  children: "Button",
};

export const Normal = Template.bind({});

Normal.args = {
  primary: false,
  fullWidth: false,
  disabled: false,
  children: "Button",
};
