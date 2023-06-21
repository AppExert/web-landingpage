# AppExert Landing page

Welcome to AppExert, Inc.! This is our website landing page project built using Next.js, a React framework for server-side rendering and static site generation. Our platform is a remote developer talent marketplace and hiring platform powered by GPT4.

## Project Overview

The project aims to create an engaging and responsive landing page for showcasing the services provided by AppExert, Inc. It leverages the power of Next.js to provide fast and optimized performance while offering a seamless development experience.

## Features

- Server-side rendering for improved performance and SEO.
- Static site generation for efficient caching and faster page loads.
- React components for building interactive UI elements.
- Styling with CSS modules for scoped styles.
- Responsive design for seamless viewing on different devices.
- Integration with Sanity.io headless CMS for content management.
- Integration with Calendly for scheduling appointments and meetings.
- Integration with the AppExert, Inc. API to fetch talent pool information and manage the pre-sign up flow.
- Customizable configuration options.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone [repository-url]`
2. Navigate to the project directory: `cd nextjs-landing-page`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit: `http://localhost:3000`

## Project Structure

The project structure follows the standard conventions of a Next.js project:

- `pages/`: Contains the page components representing different sections of the landing page.
- `components/`: Contains reusable React components used across the pages.
- `public/`: Contains static assets such as images, fonts, and icons.
- `styles/`: Contains CSS modules for styling the components.
- `utils/`: Contains utility functions or helper modules.

## Integration Details

- **Sanity.io**: The project integrates with Sanity.io, a headless CMS, for content management. You can configure the Sanity.io API and update the content models according to your requirements. Refer to the Sanity.io documentation for more details.

- **Calendly**: The project integrates with Calendly to facilitate appointment scheduling and meeting management. Update the Calendly integration settings with your Calendly account details to enable seamless scheduling functionalities.

- **AppExert, Inc. API**: The project fetches talent pool information and manages the pre-sign up flow using the AppExert, Inc. API. Configure the API integration by providing the necessary API credentials and endpoints. Refer to the API documentation for more information.

## Linting and Code Quality

To maintain consistent code quality, we use ESLint with the following configuration:

- `eslint-config-next`: Recommended ESLint configuration for Next.js projects.
- `eslint-plugin-react`: Additional ESLint rules for React.
- `eslint-plugin-react-hooks`: ESLint rules for enforcing best practices with React hooks.

We recommend running ESLint to check your code for any potential issues before committing. Use the following command:

```
npm run lint
```

## Guidance and Best Practices

To ensure a smooth development experience and maintain code consistency, please follow these best practices:

- Follow the Next.js conventions and guidelines for folder structure, naming conventions, and routing.
- Write modular and reusable React components.
- Use CSS modules for component-specific styling.
- Comment your code when necessary to improve code readability.
- Test your code thoroughly and write unit tests using a framework like Jest.
- Keep dependencies up to date and periodically review the project's
