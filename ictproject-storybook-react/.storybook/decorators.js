import { BrowserRouter } from "react-router-dom";

export const withRouter = (StoryFn) => (
  <BrowserRouter>
    <StoryFn />
  </BrowserRouter>
);

export const globalDecorators = [withRouter];
