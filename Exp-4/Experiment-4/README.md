Experiment 4 – State Management in React
Experiment Title

Implementing Local and Global State Management in a React Application

Aim

The objective of this experiment is to understand and implement state management in React by developing:

A counter using local state with React Hooks

A counter using global state with Redux

Experiment Number

Experiment – 4

Description of the Experiment

This experiment involves building a React application to clearly illustrate the difference between local state and global state management techniques.

The Local State Counter is created using the useState hook, where the state is limited to an individual component.

The Global State Counter is implemented using Redux, allowing state to be stored in a centralized store and accessed by multiple components through the Redux Provider.

Through this experiment, learners gain clarity on how state is managed at different levels of a React application and understand when to use local or global state.

Technologies Used

React JS

Redux

React-Redux

Vite

JavaScript (ES6)

HTML & CSS

Features Implemented

Counter operations: increment, decrement, and reset

Component-level state handling using useState

Centralized state management using Redux

Modular and well-structured React components

📁 Project Structure
src/
│── assets/
│
│── components/
│ └── context/
│   │── CounterGlobalContextAPI.jsx
│   ├── CounterGlobalContextParent.jsx
│   ├── CounterLocalState.jsx
│   └── CounterReduxParent.jsx
│
│── store/
│   ├── CounterReducer.jsx
│   └── Store.jsx
│
│── App.css
│── App.jsx
│── index.css
│── main.jsx

Learning Outcomes

After completing this experiment, the learner will be able to:

Understand the role of state in React applications

Distinguish between local and global state management

Use the useState hook for managing component-specific state

Create and configure a Redux store

Utilize the Provider to share global state across components

Apply Redux concepts in real-world React projects

Enhance scalability and maintainability of React applications

Deployment Details

The complete source code has been uploaded to GitHub for version control.

The application has been deployed successfully on Netlify and is accessible online.

Conclusion

This experiment effectively demonstrates state management in React using both local and global approaches. It provides hands-on experience with Redux and equips learners with the skills required to manage complex application states efficiently.

Submitted as part of React JS Laboratory – Experiment 4