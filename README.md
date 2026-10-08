# Hush Lush Hospitality Dashboard

A responsive restaurant ordering interface. The application recreates the provided authentication and restaurant menu designs with a focus on clean UI, responsive layouts, reusable components, and smooth user interactions.

## Features

The application includes a complete mock authentication flow with email/password validation, persistent sessions, protected routes, guest access, and logout. The restaurant experience includes category-based menu browsing, debounced dish search, cart management, table selection, and a simulated order flow with loading, empty, error, and success states. The interface is fully responsive across mobile, tablet, and desktop, with subtle transitions and micro-interactions throughout.

## Technology

Built with React 19, TypeScript, Vite, Tailwind CSS, React Router DOM, React Context API, and Lucide React.

## Authentication

Authentication is implemented through a mock service since no backend API was provided. Sessions are persisted locally using `localStorage`, with authentication logic separated from the presentation layer through `AuthContext`.

**Username:** `user@test.com`  
**Password:** `password123`

Users can also select **Sign as Guest** to access the application without credentials.

## Project Structure

The project follows a component-based structure with separate areas for authentication, menu, common UI, pages, contexts, configuration, and services, keeping the application modular and easy to maintain.

## Known Limitations

Authentication, restaurant data, and order placement are simulated locally. Social login and payment functionality are not connected to external services.

## Links

**Live Demo:** `https://hushlush.vercel.app`
