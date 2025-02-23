# Aurora Movies

This is a simple modern movie browsing application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Server-side pagination
- Movie cards with ratings and descriptions
- Fully tested components

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest & React Testing Library

## Getting Started

First, install the dependencies:

```
yarn
```

Then, run the development server:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/ - Pages
├── components/ - Components
├── utils/ # Reusable functions, constants and types
└── api/ # Api related utils
```

## Testing

To run the tests:

```
yarn test
```

## Motivation for Using Server-Side Rendering

The main motivation for using server-side rendering in this project is to improve the performance of the application. By rendering the movies on the server, we can reduce the amount of time it takes to load the page and improve the user experience as well as SEO.
