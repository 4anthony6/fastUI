import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Landscape: Story = {
  args: {
    title: "Card text",
    caption: "This is a caption into the card",
    orientation: "landscape",
    imageUrl: "",
  },
};

export const Portrait: Story = {
  args: {
    title: "Card text",
    orientation: "portrait",
    caption: "This is a caption into the card",
    imageUrl: "",
  },
};

export const Square: Story = {
  args: {
    title: "Card text",
    orientation: "square",
    caption: "This is a caption into the card",
    imageUrl: "",
  },
};

export const BackgroundImage: Story = {
  args: {
    title: "Card text",
    orientation: "square",
    caption: "This is a caption into the card",
    imageUrl: "https://wallpaperaccess.com/full/859474.jpg",
  },
};
