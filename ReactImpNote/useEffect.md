# useEffect hook let us perform side effect in functional compenent.Like asynchronous fuction setTimeout,api fetching.

Side effects are operations that interact with the outside world, such as:

Asynchronous operations (e.g., data fetching, timers)
Directly modifying the DOM (use with caution for optimal performance)
Setting up or tearing down subscriptions or timers

# Initial Render: After the component is rendered for the first time, useEffect is executed.

# useEffect without a dependency array is a common pitfall that can lead to infinite loops and performance issues.

Why it happens:
Every render triggers useEffect: Without a dependency array, useEffect runs after every component re-render.
Potential infinite loop: If the effect itself causes a re-render (e.g., setting state), it creates a vicious cycle.
Performance impact: Unnecessary re-renders can degrade application performance.


# useEffect without dependency array: Runs on every render, regardless of UI changes.
State changes trigger re-renders: Even if the UI doesn't visually change, state updates cause a component re-render.
Infinite loops: This combination can easily lead to infinite loops if the useEffect modifies the state.

# Why State Changes Trigger Re-renders in React
While it might seem counterintuitive that a state change would trigger a re-render even if the UI isn't directly affected, it's essential to understand React's core principles:
React's Reconciliation Process
State Updates: When you call setState, React marks the component as "dirty."
Re-render: React then re-renders the component and its children to determine if any changes need to be made to the UI.
Virtual DOM: React creates a virtual representation of the UI, compares it to the previous version, and only updates the real DOM where necessary for efficiency.


---

# At the time of rerending compoenet is again called

Yes, the Component Function is Called Again on Re-render
When a React component re-renders, its entire function is called again. This includes any logic, calculations, or side effects within the component.