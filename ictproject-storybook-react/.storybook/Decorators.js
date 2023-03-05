import { BrowserRouter } from 'react-router-dom'

// ... other decorators

export const withRouter = (StoryFn) => (
  <BrowserRouter>
    <StoryFn />
  </BrowserRouter>
)

export const globalDecorators = [
  withRouter,
]