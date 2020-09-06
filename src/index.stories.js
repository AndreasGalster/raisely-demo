import "./index.ts";
import { html } from "lit-html";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () =>
  html` <compatability-checker></compatability-checker> `;
