import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Git from './components/Git';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='git' element={<Git />} />
    </Route>
  )
);

// createRoutesFromElements method creates an array like below then we pass that to createBrowserRouter
// const routes = [
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "git",
//         element: <Git />,
//       },
//     ],
//   },
// ];

// const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);




// Here's a detailed explanation of the three approaches for handling routing in React:

// 1. BrowserRouter + Routes + Route
// This is the traditional, JSX-based routing approach, where routing is defined within the component tree using <Routes> and <Route>.

// Example:
// jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} /> {/* Default route */}
//         <Route path="about" element={<About />} />
//         <Route path="git" element={<Git />} />
//       </Route>
//     </Routes>
//   </Router>
// );

// export default App;
// Pros:
// Simple and Declarative: It’s intuitive for beginners as you directly define your routes in JSX.

// Inline Nesting: Child routes can be defined inline using nested <Route> elements.

// Works well for small to medium apps without many advanced features.

// Cons:
// Redundant Boilerplate: As the app grows, managing large numbers of <Route> components can become verbose.

// No centralized route definition.

// 2. createBrowserRouter + createRoutesFromElements + RouterProvider
// This approach defines routes using createRoutesFromElements, which converts JSX-based routes into an object structure while still allowing you to define routes within JSX.

// Example:
// jsx
// import React from "react";
// import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="git" element={<Git />} />
//     </Route>
//   )
// );

// const App = () => <RouterProvider router={router} />;

// export default App;
// Pros:
// Combines JSX and Flexibility: Provides the benefits of centralized route creation while keeping the JSX-based readability.

// Easier Transition: Familiar to developers migrating from BrowserRouter + Routes since it still uses JSX.

// Cons:
// Slightly more complex than the BrowserRouter + Routes + Route approach.

// Still involves JSX for defining routes, so it isn’t a fully centralized route configuration.

// 3. Defining Routes as an Array
// This is the newest and most advanced approach, introduced in React Router v6.4+. Here, the routes are completely defined as a JavaScript array of objects. You pass this array directly to createBrowserRouter.

// Example:
// jsx
// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const routes = [
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { index: true, element: <Home /> }, // Default child for "/"
//       { path: 'about', element: <About /> },
//       { path: 'git', element: <Git /> },
//     ],
//   },
// ];

// const router = createBrowserRouter(routes);

// const App = () => <RouterProvider router={router} />;

// export default App;
// Pros:
// Fully Centralized Route Definition:

// All routes are defined in a single configuration object, improving readability and maintainability.

// Supports Advanced Features:

// Easily integrates with loaders, actions, and error handling.

// Dynamic Routing:

// You can dynamically generate or manipulate the route array (e.g., based on user roles or permissions).

// Scalability:

// Ideal for large applications with complex route hierarchies.

// Cons:
// May feel unfamiliar to developers coming from JSX-based routing.

// Slightly harder to debug since the routes are not as visually connected to the component tree.

// Which Approach is Best?
// It depends on your use case and application complexity:

// When to Use BrowserRouter + Routes + Route:
// For small to medium apps.

// When simplicity is preferred over advanced features.

// When you're working on a quick prototype or don’t need centralized configuration.

// When to Use createBrowserRouter + createRoutesFromElements:
// For teams transitioning from the traditional JSX-based routing.

// When you want a balance between flexibility and JSX readability.

// For apps with moderate complexity where centralization isn’t a priority.

// When to Use createBrowserRouter + routes array:
// For large-scale apps with complex routing needs.

// When you need route-based features like loaders, actions, or error handling.

// For projects requiring scalability, centralized routing, and dynamic route generation.

// My Recommendation:
// If you're building a small app, stick to BrowserRouter + Routes for its simplicity. For medium to large apps, the routes array approach provides the most flexibility and scalability, especially if you plan to use advanced features like loaders and data fetching. It is the best long-term choice for modern React applications! Let me know which direction you're leaning toward. 🚀




// **********************

// In the industry, the routing approach often depends on the scale, complexity, and needs of the application. Let me evaluate the most commonly used routing strategies and their pros and cons, along with which ones are more prevalent in practice.

// 1. BrowserRouter + Routes + Route
// Advantages:
// Simplicity: Very easy to set up and understand, making it ideal for beginners.

// Declarative: Routes are defined inline in JSX, which works well for straightforward apps.

// Support for Nested Routes: You can structure nested routes with the help of <Outlet>.

// Good for Small to Medium Apps: Works efficiently in applications with a limited number of routes.

// Disadvantages:
// Lack of Centralization: Routes are scattered throughout the app, which makes managing large apps challenging.

// Limited Advanced Features: Does not support features like loaders, actions, and error boundaries (introduced in React Router v6.4+).

// Verbose for Large Apps: As the app grows, JSX for routing can become cluttered and harder to maintain.

// Usage in the Industry:
// Commonly Used in Small Projects: Ideal for simpler, single-page applications, quick prototypes, or MVPs (minimum viable products).

// Examples: Portfolio websites, simple dashboards, or small e-commerce projects.

// 2. createBrowserRouter + createRoutesFromElements + RouterProvider
// Advantages:
// Advanced Features: Introduced with React Router v6.4+, supports loaders (for data fetching), actions (for mutations), and error handling.

// Familiar Syntax: Uses JSX to define routes, which is a smooth transition for developers accustomed to BrowserRouter.

// Flexibility: Routes are created declaratively, enabling the use of modern features while retaining JSX readability.

// Disadvantages:
// Increased Complexity: Slightly harder to set up compared to BrowserRouter + Routes, especially for beginners.

// Partial Centralization: While routes are defined declaratively, management is still split between JSX and logic.

// Usage in the Industry:
// Growing Adoption for Mid-Sized Projects: Often used in apps that need modern routing features but don't require centralized configuration.

// Examples: Medium-scale CRMs, e-commerce platforms, and SaaS applications with moderate routing complexity.

// 3. Centralized Route Object (createBrowserRouter with routes array)
// Advantages:
// Fully Centralized: All route configurations are contained in a single array, making it easier to manage for large-scale apps.

// Scalable: Well-suited for enterprise apps with complex nested routes, role-based access, or dynamic route generation.

// Support for Modern Features:

// Loaders: Route-based data fetching.

// Actions: Handling route-based data mutations.

// Error Boundaries: Robust error handling for specific routes.

// Dynamic Routing: Routes can be programmatically modified based on user roles, permissions, or settings.

// Disadvantages:
// Higher Complexity: Requires familiarity with the modern React Router API and concepts like loaders, actions, and error elements.

// Overkill for Small Apps: The centralized structure can feel unnecessarily complex for simpler projects.

// Usage in the Industry:
// Dominant in Large-Scale Apps: Preferred for enterprise applications where scalability and centralized management are priorities.

// Examples: Large e-commerce websites, enterprise SaaS apps, or content-heavy platforms like blogs or forums.

// 4. MemoryRouter
// Advantages:
// Lightweight: Does not depend on browser history or modify the URL, making it great for isolated scenarios.

// Perfect for Testing: Ideal for unit testing React components with routing.

// Disadvantages:
// Not Usable in Production: Since it doesn’t interact with the browser’s history, it’s unsuitable for real-world apps.

// Usage in the Industry:
// Testing Environments Only: Commonly used in unit and integration testing for apps that rely on routing.

// Examples: Test suites for components using jest or react-testing-library.

// 5. StaticRouter
// Advantages:
// SEO-Friendly: Works with SSR (server-side rendering), enabling better search engine optimization.

// Pre-Rendered Content: Delivers static HTML pages for faster initial load times.

// Great for Frameworks: Often used in SSR-capable frameworks like Next.js..

// Disadvantages:
// Requires Server Setup: Needs a server capable of handling requests and serving pre-rendered pages.

// Limited to SSR: Not useful for client-only applications.

// Usage in the Industry:
// Common for SSR Apps: Widely used in SEO-critical applications.

// Examples: Blogs, news websites, or e-commerce platforms where SEO and performance are key priorities.

// 6. HashRouter
// Advantages:
// No Server-Side Setup: Can handle routes without requiring server-side support for path rewriting.

// Compatible with Static Hosting: Works well for SPAs deployed on platforms like GitHub Pages.

// Disadvantages:
// Unfriendly URLs: Hash fragments (/#/route) are not considered elegant or user-friendly.

// Limited SEO: Hash-based URLs are harder for search engines to index.

// Usage in the Industry:
// Used for Static Deployments: Useful for apps hosted on environments where server configuration is not possible.

// Examples: Personal portfolio websites or static documentation sites.

// 7. Custom Routers
// Advantages:
// Full Control: Allows developers to create entirely customized routing behavior.

// Highly Flexible: Useful in apps requiring unique routing mechanics or integration with third-party libraries.

// Disadvantages:
// Requires Expertise: Setting up and maintaining a custom router can be time-consuming and error-prone.

// Not Standardized: Harder to onboard new developers or transition codebases.

// Usage in the Industry:
// Niche Scenarios: Rarely used but can be found in apps requiring unique URL schemes or tightly integrated routing systems.

// Most Commonly Used in the Industry
// Approach	Common Usage
// BrowserRouter	Small apps, prototypes, or non-enterprise projects.
// createBrowserRouter	Growing in popularity for mid-sized apps that need modern features like loaders and error handling.
// Centralized Route Object	The most widely used for large-scale apps due to its scalability, flexibility, and support for advanced features.
// MemoryRouter	Almost exclusively used for testing components.
// StaticRouter	Frequently used in server-side rendered applications where SEO is critical.
// HashRouter	Used for SPAs deployed to static hosting platforms like GitHub Pages (less common in production-grade apps due to SEO concerns).
// Custom Routers	Rarely used; seen in apps with custom or highly specialized routing requirements.
// Final Recommendation
// Use BrowserRouter for simple applications, prototypes, or MVPs where minimal configuration is needed.

// Use createBrowserRouter + routes object for enterprise-scale, dynamic, or data-driven apps as this approach is the industry standard for large projects.

// Use StaticRouter for server-side rendered apps with SEO requirements.

// Use HashRouter only when deploying to static hosting environments without server-side support.

// If you're building for scalability and modern features, createBrowserRouter with loaders and centralized route configuration is the most future-proof choice. Let me know if you'd like more specific guidance! 🚀