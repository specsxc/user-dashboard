# User Dashboard

A simple user management dashboard built with React, TypeScript, and Vite. The app fetches data from the public API `https://gorest.co.in/public/v2/users`, allows searching users by name, filtering by status, and viewing details for a selected user.

## Features

- display a list of users
- search users by name
- filter by status: `All`, `Active`, `Inactive`
- open a user details view by clicking `View details`
- show user information such as name, email, gender, and status
- responsive layout using Tailwind CSS

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS
- ESLint

## Project Structure

```text
user-dashboard/
├── index.html
├── package.json
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── components/
│   │   ├── FilterUsers.tsx
│   │   ├── Header.tsx
│   │   ├── SearchUsers.tsx
│   │   ├── UserDetails.tsx
│   │   ├── UserItem.tsx
│   │   └── UsersList.tsx
│   ├── hooks/
│   │   └── useUsers.tsx
│   └── types/
│       └── types.ts
└── vite.config.ts
```

## Requirements

- Node.js 18+
- npm

## Installation

1. Install dependencies:

```bash
npm install
```

## Local Development

```bash
npm run dev
```

After starting the app, it is usually available at:

```text
http://localhost:5173
```

## Production Build

```bash
npm run build
```

The production build is generated in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## How It Works

- when the page loads, the `useUsers` hook fetches the user list from the GoRest API
- the retrieved data is stored in React state
- the user can type a name in the search field and the list is filtered dynamically
- status buttons narrow the visible list to active or inactive users
- clicking `View details` navigates to `/user/:userid`, where the selected user’s details are displayed

## Notes

- the app depends on the availability of the public external API
- if there is no data or a network error occurs, the app shows `User not found` or `Loading..`
- this is a simple example of a user dashboard and can be extended with pagination, sorting, or a custom API
