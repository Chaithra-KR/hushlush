# Hush Lush Hospitality Dashboard

A responsive restaurant ordering interface built as part of the Junior Full Stack Developer technical assessment.

The application recreates the provided login/authentication and restaurant menu designs while adding functional authentication, guest access, menu interactions, cart management, table selection, responsive navigation, and micro-interactions.

## Features

### Authentication
- Responsive login screen based on the provided design
- Email validation
- Password validation
- Invalid credential handling
- Loading state during authentication
- Mock authentication service
- Persistent session using localStorage
- Protected application routes
- Automatic redirect for unauthenticated users
- Logout functionality

### Guest Access
- "Sign as Guest" flow
- Guest session persistence
- Guest users can access the restaurant application without credentials

### Restaurant Menu
- Responsive restaurant menu layout
- Food category filtering
- Dish search
- Debounced search interaction
- Empty search results state
- Reusable product cards
- Add-to-cart interactions

### Cart & Ordering
- Add/remove items
- Quantity management
- Cart item count
- Cart drawer
- Order total calculation
- Place order interaction
- Loading state while placing an order
- Order success state
- Empty cart state

### Table Selection
- Table selection modal
- Indoor/outdoor table sections
- PAX selection
- Selected table displayed in the header

### Responsive UI
- Mobile, tablet, and desktop layouts
- Responsive navigation
- Mobile search interaction
- Responsive cart access
- Hover and active states
- Subtle transitions and micro-interactions

### Additional
- 404 / Not Found page
- Loading, error, empty, and success states
- Reusable React components
- Context-based state management
- Organized component structure

---

## Technology Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- React Context API
- Lucide React
- ESLint
- Vitest / React Testing Library *(if added)*

---

## Authentication

No backend API was provided for the assessment, so authentication is implemented using a mock authentication service.

The authentication logic is separated from the presentation layer and exposed to the application through `AuthContext`.

Sessions are persisted locally using `localStorage`.

### Test Credentials

**Username:** `user@test.com`

**Password:** `password123`

Alternatively, users can select **Sign as Guest** to access the application without credentials.
