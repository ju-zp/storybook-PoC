 import React from 'react';


 // Global decorator to apply the styles to all stories
 export const decorators = [
   Story => (
     <>
       <Story />
     </>
   ),
 ];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // Storybook a11y addon configuration
  a11y: {
    // the target DOM element
    element: '#root',
     // sets the execution mode for the addon
    manual: false,
  },
}
