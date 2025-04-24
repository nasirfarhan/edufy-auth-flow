
export const BOSS_IMAGES = {
  unblooded: "/lovable-uploads/09755a29-43de-4bd7-bdea-45701d6d99aa.png",
  warborn: "/lovable-uploads/10c5fbb6-6431-4c3a-b775-23ed5c79d6bf.png",
  doomseeker: "/lovable-uploads/1f9c3910-a0fd-409a-9026-dd69f79e32a9.png",
  deathless: "/lovable-uploads/fc71c858-df5f-4e97-9548-f0bd085839b8.png",
  thriceForged: "/lovable-uploads/f40d0af0-5cd6-42e4-aafa-bf1f850e1513.png",
  playerAvatar: "/lovable-uploads/b73f4aa3-7813-4bd1-a1fb-d9f8c4e9d14d.png",
  playerCharacter: "/lovable-uploads/0d2cdc65-3535-4199-83c5-ffdc16d24efd.png"
};

// App Development task contents
export const APP_DEV_TASKS = [
  // Tier 1 - Unblooded
  [
    {
      title: "HTML Basics",
      content: "Learn the fundamentals of HTML, including tags, attributes, and document structure.",
      question: {
        text: "What tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: 1
      }
    },
    {
      title: "CSS Styling",
      content: "Understand how to style HTML elements using CSS selectors, properties, and values.",
      question: {
        text: "Which CSS property is used to change the text color?",
        options: ["text-color", "font-color", "color", "text-style"],
        correctAnswer: 2
      }
    },
    {
      title: "JavaScript Fundamentals",
      content: "Master the basics of JavaScript, including variables, data types, and functions.",
      question: {
        text: "Which keyword is used to declare a variable in modern JavaScript?",
        options: ["var", "const", "let", "All of the above"],
        correctAnswer: 3
      }
    },
    {
      title: "Responsive Design",
      content: "Learn how to create websites that look good on all devices using media queries.",
      question: {
        text: "What CSS feature is primarily used to create responsive designs?",
        options: ["Media Queries", "Flexbox", "Grid", "Animations"],
        correctAnswer: 0
      }
    },
    {
      title: "UI/UX Principles",
      content: "Understand the fundamentals of designing user interfaces that are both functional and appealing.",
      question: {
        text: "What does UI stand for in web development?",
        options: ["User Interaction", "User Interface", "User Inheritance", "User Integration"],
        correctAnswer: 1
      }
    },
    {
      title: "Git Basics",
      content: "Learn how to use Git for version control and collaboration.",
      question: {
        text: "Which Git command is used to create a new branch?",
        options: ["git branch", "git checkout", "git create", "git init"],
        correctAnswer: 0
      }
    },
    {
      title: "React Introduction",
      content: "Get started with React, understanding components, props, and state management.",
      question: {
        text: "What function is used to update state in React functional components?",
        options: ["this.setState()", "useState()", "setState()", "updateState()"],
        correctAnswer: 1
      }
    },
    {
      title: "Component Structure",
      content: "Learn how to organize React components effectively for reusability and maintenance.",
      question: {
        text: "Which of the following is a best practice for React component organization?",
        options: ["Put all components in one file", "Create a separate file for each component", "Only use class components", "Avoid using props"],
        correctAnswer: 1
      }
    },
    {
      title: "Props & State",
      content: "Master the difference between props and state in React components.",
      question: {
        text: "Which of these is immutable in React components?",
        options: ["State", "Props", "Variables", "Components"],
        correctAnswer: 1
      }
    }
  ],
  // Tier 2 - Warborn
  [
    {
      title: "Hooks Introduction",
      content: "Learn about React hooks for state and side effects in functional components.",
      question: {
        text: "Which hook replaces componentDidMount, componentDidUpdate, and componentWillUnmount?",
        options: ["useState", "useContext", "useEffect", "useReducer"],
        correctAnswer: 2
      }
    },
    {
      title: "Context API",
      content: "Understand how to manage global state using React Context API.",
      question: {
        text: "What is the main purpose of React Context API?",
        options: ["To replace Redux", "To avoid prop drilling", "To optimize performance", "To create UI components"],
        correctAnswer: 1
      }
    },
    {
      title: "Custom Hooks",
      content: "Learn to create reusable logic with custom React hooks.",
      question: {
        text: "What naming convention should custom hooks follow?",
        options: ["start with 'create'", "start with 'use'", "end with 'Hook'", "start with 'hook'"],
        correctAnswer: 1
      }
    },
    {
      title: "Handling Events",
      content: "Master event handling in React applications.",
      question: {
        text: "How are event handlers typically passed to React elements?",
        options: ["As string literals", "As props", "Using jQuery", "Using addEventListener"],
        correctAnswer: 1
      }
    },
    {
      title: "Form Management",
      content: "Learn effective strategies for managing forms in React.",
      question: {
        text: "What is a controlled component in React?",
        options: ["A component with error boundaries", "A component where form data is handled by React state", "A higher-order component", "A component with refs"],
        correctAnswer: 1
      }
    },
    {
      title: "Component Lifecycle",
      content: "Understand component lifecycle methods in class components.",
      question: {
        text: "Which lifecycle method is called immediately after a component is added to the DOM?",
        options: ["componentWillMount", "componentDidMount", "componentWillUpdate", "componentDidUpdate"],
        correctAnswer: 1
      }
    },
    {
      title: "Routing Basics",
      content: "Learn how to implement client-side routing using React Router.",
      question: {
        text: "Which component is used to render different components based on the current route?",
        options: ["<Switch>", "<Router>", "<Route>", "<Link>"],
        correctAnswer: 2
      }
    },
    {
      title: "Redux Basics",
      content: "Understand state management with Redux in React applications.",
      question: {
        text: "What is a Redux action?",
        options: ["A function that modifies state directly", "An object that describes what happened", "A component that uses Redux", "A type of middleware"],
        correctAnswer: 1
      }
    },
    {
      title: "API Integration",
      content: "Learn how to connect React applications to backend APIs.",
      question: {
        text: "Which hook is commonly used for data fetching in React?",
        options: ["useAPI", "useFetch", "useEffect", "useData"],
        correctAnswer: 2
      }
    }
  ],
  // Tier 3 - Doomseeker
  [
    {
      title: "TypeScript Basics",
      content: "Learn how to use TypeScript with React for type safety.",
      question: {
        text: "What is the main benefit of using TypeScript with React?",
        options: ["Faster runtime performance", "Type safety and better tooling", "Smaller bundle size", "Built-in state management"],
        correctAnswer: 1
      }
    },
    {
      title: "React Query",
      content: "Master data fetching and caching with React Query.",
      question: {
        text: "What is the main purpose of React Query?",
        options: ["State management", "Server-side rendering", "Data fetching and caching", "Component styling"],
        correctAnswer: 2
      }
    },
    {
      title: "Testing React Apps",
      content: "Learn how to test React applications using Jest and React Testing Library.",
      question: {
        text: "Which function is commonly used to render components in React Testing Library?",
        options: ["mount()", "shallow()", "render()", "create()"],
        correctAnswer: 2
      }
    },
    {
      title: "Performance Optimization",
      content: "Understand techniques for optimizing React application performance.",
      question: {
        text: "Which hook can be used to prevent unnecessary re-renders?",
        options: ["useMemo", "useCallback", "useEffect", "Both A and B"],
        correctAnswer: 3
      }
    },
    {
      title: "Advanced Styling",
      content: "Master advanced styling techniques like CSS-in-JS and styled-components.",
      question: {
        text: "What is a benefit of CSS-in-JS libraries like styled-components?",
        options: ["Smaller bundle size", "Faster rendering", "Component-scoped styles", "Simpler syntax"],
        correctAnswer: 2
      }
    },
    {
      title: "Authentication",
      content: "Implement user authentication in React applications.",
      question: {
        text: "Where should you store JWT tokens in a React application?",
        options: ["localStorage", "sessionStorage", "cookies", "It depends on security requirements"],
        correctAnswer: 3
      }
    },
    {
      title: "Error Handling",
      content: "Learn effective strategies for error handling in React applications.",
      question: {
        text: "What React feature allows you to catch JavaScript errors in components?",
        options: ["try/catch blocks", "Error boundaries", "Error hooks", "Promise rejections"],
        correctAnswer: 1
      }
    },
    {
      title: "Code Splitting",
      content: "Understand how to implement code splitting for better performance.",
      question: {
        text: "What React feature is used for code splitting?",
        options: ["React.memo", "React.lazy", "React.fragment", "React.suspense"],
        correctAnswer: 1
      }
    },
    {
      title: "React Patterns",
      content: "Master advanced React patterns like render props and HOCs.",
      question: {
        text: "What is the main purpose of the render props pattern?",
        options: ["Code reuse", "Performance optimization", "Error handling", "State management"],
        correctAnswer: 0
      }
    }
  ],
  // Tier 4 - Deathless
  [
    {
      title: "Next.js Introduction",
      content: "Learn the basics of Next.js for server-side rendering and static site generation.",
      question: {
        text: "What is the main benefit of server-side rendering?",
        options: ["Better SEO", "Faster development", "Smaller bundle size", "Easier testing"],
        correctAnswer: 0
      }
    },
    {
      title: "State Management Patterns",
      content: "Compare different state management solutions like Redux, MobX, and Zustand.",
      question: {
        text: "Which state management library uses observables?",
        options: ["Redux", "Context API", "MobX", "Zustand"],
        correctAnswer: 2
      }
    },
    {
      title: "GraphQL with Apollo",
      content: "Understand how to use GraphQL with Apollo Client in React applications.",
      question: {
        text: "What is the main advantage of GraphQL over REST?",
        options: ["Better performance", "Flexible data fetching", "Simpler implementation", "Built-in authentication"],
        correctAnswer: 1
      }
    },
    {
      title: "Micro Frontends",
      content: "Learn about micro frontend architecture and how to implement it.",
      question: {
        text: "What is a key benefit of micro frontends?",
        options: ["Smaller bundle size", "Independent deployment", "Centralized state management", "Server-side rendering"],
        correctAnswer: 1
      }
    },
    {
      title: "CI/CD for Frontend",
      content: "Set up continuous integration and deployment for React applications.",
      question: {
        text: "Which of the following is NOT typically part of a CI/CD pipeline?",
        options: ["Automated testing", "Code quality checks", "Database migrations", "Build optimization"],
        correctAnswer: 2
      }
    },
    {
      title: "Accessibility (a11y)",
      content: "Learn how to make React applications accessible to all users.",
      question: {
        text: "What does ARIA stand for in web accessibility?",
        options: ["Advanced React Interface Attributes", "Accessible Rich Internet Applications", "Application Rendering Interface Access", "Automated Responsive Interactive Access"],
        correctAnswer: 1
      }
    },
    {
      title: "Internationalization",
      content: "Implement multi-language support in React applications.",
      question: {
        text: "Which library is commonly used for internationalization in React?",
        options: ["react-intl", "i18next", "react-translate", "Both A and B"],
        correctAnswer: 3
      }
    },
    {
      title: "Progressive Web Apps",
      content: "Transform React applications into Progressive Web Apps.",
      question: {
        text: "Which feature allows a PWA to work offline?",
        options: ["Service Workers", "Local Storage", "IndexedDB", "Web Workers"],
        correctAnswer: 0
      }
    },
    {
      title: "Animation Libraries",
      content: "Master animations in React with libraries like Framer Motion.",
      question: {
        text: "Which animation concept allows for smooth transitions between component states?",
        options: ["Keyframes", "Transitions", "Layout animations", "Exit animations"],
        correctAnswer: 2
      }
    }
  ],
  // Tier 5 - Thrice-Forged
  [
    {
      title: "React Native Basics",
      content: "Learn how to leverage React skills to build mobile applications.",
      question: {
        text: "What is the difference between React and React Native?",
        options: ["React is for web, React Native is for mobile", "React is newer than React Native", "React Native is for Android only", "React has more components"],
        correctAnswer: 0
      }
    },
    {
      title: "WebAssembly with React",
      content: "Explore how to use WebAssembly for high-performance computing in React.",
      question: {
        text: "What is WebAssembly primarily used for in web applications?",
        options: ["DOM manipulation", "High-performance computing", "Styling components", "Server-side rendering"],
        correctAnswer: 1
      }
    },
    {
      title: "Advanced Performance",
      content: "Master advanced performance optimization techniques.",
      question: {
        text: "What tool can help identify performance bottlenecks in React applications?",
        options: ["React DevTools", "Lighthouse", "Chrome DevTools", "All of the above"],
        correctAnswer: 3
      }
    },
    {
      title: "Serverless Functions",
      content: "Learn how to integrate serverless functions with React applications.",
      question: {
        text: "Which platform does NOT offer serverless function hosting?",
        options: ["AWS Lambda", "Azure Functions", "Vercel", "jQuery"],
        correctAnswer: 3
      }
    },
    {
      title: "React 18 Features",
      content: "Explore the latest features in React 18 like concurrent rendering.",
      question: {
        text: "What is a key feature introduced in React 18?",
        options: ["Hooks", "Concurrent rendering", "Context API", "Error boundaries"],
        correctAnswer: 1
      }
    },
    {
      title: "Monorepo Architecture",
      content: "Understand how to manage multiple related projects in a monorepo.",
      question: {
        text: "Which tool is commonly used for managing JavaScript monorepos?",
        options: ["Lerna", "Yarn Workspaces", "Nx", "All of the above"],
        correctAnswer: 3
      }
    },
    {
      title: "Design Systems",
      content: "Learn how to build and maintain a design system for your organization.",
      question: {
        text: "What is a key benefit of implementing a design system?",
        options: ["Faster performance", "Consistent UI", "Better SEO", "Smaller bundle size"],
        correctAnswer: 1
      }
    },
    {
      title: "React + Web3",
      content: "Explore how to build decentralized applications (dApps) using React.",
      question: {
        text: "What library is commonly used to connect React apps to Ethereum?",
        options: ["web3.js", "ethers.js", "react-eth", "Both A and B"],
        correctAnswer: 3
      }
    },
    {
      title: "Advanced Architecture",
      content: "Master advanced application architecture patterns in React.",
      question: {
        text: "Which architectural pattern focuses on the separation of business logic from UI?",
        options: ["MVC", "Flux", "Clean Architecture", "All of the above"],
        correctAnswer: 2
      }
    }
  ]
];

// Boss questions for each tier
export const BOSS_QUESTIONS = [
  // Unblooded Boss
  [
    {
      text: "What is the correct way to create a React functional component?",
      options: [
        "function MyComponent() { return <div>Hello</div>; }",
        "class MyComponent extends React.Component { render() { return <div>Hello</div>; } }",
        "const MyComponent = () => { <div>Hello</div>; }",
        "const MyComponent = function() { return <div>Hello</div>; }"
      ],
      correctAnswer: 0
    },
    {
      text: "Which hook would you use to perform side effects in a component?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correctAnswer: 1
    },
    {
      text: "What is the purpose of the key prop when rendering lists in React?",
      options: [
        "It's optional and only used for styling",
        "It helps React identify which items have changed, been added, or removed",
        "It determines the order of elements",
        "It's required for all elements, not just lists"
      ],
      correctAnswer: 1
    },
    {
      text: "How do you pass data from a parent to a child component in React?",
      options: ["Using state", "Using props", "Using context", "Using redux"],
      correctAnswer: 1
    },
    {
      text: "What is the virtual DOM in React?",
      options: [
        "A copy of the browser DOM that React maintains in memory",
        "A special browser feature that React utilizes",
        "An optimization technique used by webpack",
        "The actual browser DOM when using React"
      ],
      correctAnswer: 0
    },
    {
      text: "Which statement about React hooks is incorrect?",
      options: [
        "Hooks can only be used in functional components",
        "Hooks must be called at the top level of a component",
        "Hooks can be used in class components",
        "Custom hooks must start with 'use'"
      ],
      correctAnswer: 2
    },
    {
      text: "What is the default behavior when you submit a form in HTML?",
      options: [
        "The form data is saved locally",
        "Nothing happens",
        "The page refreshes",
        "A JavaScript error occurs"
      ],
      correctAnswer: 2
    },
    {
      text: "Which CSS property is used to change the space between lines of text?",
      options: ["text-spacing", "line-height", "paragraph-spacing", "spacing"],
      correctAnswer: 1
    },
    {
      text: "What does 'JSX' stand for?",
      options: [
        "JavaScript XML",
        "JavaScript Extension",
        "JavaScript Syntax",
        "Java Syntax Extension"
      ],
      correctAnswer: 0
    },
    {
      text: "Which of the following is NOT a JavaScript data type?",
      options: ["String", "Boolean", "Float", "Symbol"],
      correctAnswer: 2
    },
    {
      text: "What is the purpose of the useState hook?",
      options: [
        "To create side effects",
        "To manage component state",
        "To access context",
        "To optimize rendering"
      ],
      correctAnswer: 1
    },
    {
      text: "Which method is called when a React component is first rendered to the DOM?",
      options: [
        "componentDidStart",
        "componentDidMount",
        "componentRendered",
        "componentDidLoad"
      ],
      correctAnswer: 1
    },
    {
      text: "What is the purpose of React fragments?",
      options: [
        "To create reusable code",
        "To group elements without adding extra nodes to the DOM",
        "To improve performance",
        "To handle errors in components"
      ],
      correctAnswer: 1
    },
    {
      text: "Which attribute is used to specify an inline style in JSX?",
      options: ["style", "css", "className", "inlineStyle"],
      correctAnswer: 0
    },
    {
      text: "What is the correct way to handle form submission in React?",
      options: [
        "Using the onSubmit event on the form element",
        "Using the onClick event on the submit button",
        "Using the onChange event on the form element",
        "Using the onFormSubmit event"
      ],
      correctAnswer: 0
    }
  ],
  // Warborn Boss
  [
    {
      text: "Which React hook would you use to prevent a function from being recreated on every render?",
      options: ["useState", "useEffect", "useCallback", "useMemo"],
      correctAnswer: 2
    },
    {
      text: "What is the purpose of the useRef hook?",
      options: [
        "To create a reference to a DOM element",
        "To store a mutable value that doesn't cause re-renders",
        "To handle form inputs",
        "Both A and B"
      ],
      correctAnswer: 3
    },
    {
      text: "How do you create a controlled form input in React?",
      options: [
        "By using refs",
        "By linking the input value to a state variable and updating it on change",
        "By using uncontrolled components",
        "By setting the defaultValue prop"
      ],
      correctAnswer: 1
    },
    {
      text: "What is prop drilling in React?",
      options: [
        "A performance optimization technique",
        "Passing props through multiple levels of components",
        "A way to access DOM elements directly",
        "A method for handling form validation"
      ],
      correctAnswer: 1
    },
    {
      text: "Which of the following is a solution to prop drilling?",
      options: ["useEffect", "useContext", "useState", "useRef"],
      correctAnswer: 1
    },
    {
      text: "What is the purpose of React's useReducer hook?",
      options: [
        "To optimize rendering performance",
        "To manage complex state logic",
        "To create side effects",
        "To handle form inputs"
      ],
      correctAnswer: 1
    },
    {
      text: "Which hook would you use to execute code after every render?",
      options: [
        "useEffect with no dependency array",
        "useEffect with an empty dependency array",
        "useLayoutEffect",
        "useRender"
      ],
      correctAnswer: 0
    },
    {
      text: "What is the main purpose of React Router?",
      options: [
        "To manage state across the application",
        "To handle form submissions",
        "To enable client-side routing",
        "To optimize component rendering"
      ],
      correctAnswer: 2
    },
    {
      text: "Which component in React Router is used to render content based on the current URL?",
      options: ["<Link>", "<Router>", "<Route>", "<NavLink>"],
      correctAnswer: 2
    },
    {
      text: "What is the correct way to pass parameters in a route with React Router?",
      options: [
        "<Route path='/user/:id' component={User} />",
        "<Route path='/user/id' component={User} />",
        "<Route path='/user(id)' component={User} />",
        "<Route path='/user?id' component={User} />"
      ],
      correctAnswer: 0
    },
    {
      text: "What are the three core principles of Redux?",
      options: [
        "Single source of truth, State is read-only, Changes are made with pure functions",
        "Immutable state, Mutable reducers, Side effects in actions",
        "Component state, Global state, Local state",
        "Actions, Reducers, Store"
      ],
      correctAnswer: 0
    },
    {
      text: "In Redux, what is an action?",
      options: [
        "A function that updates the state",
        "A plain object that describes what happened",
        "A component that dispatches changes",
        "The central store of the application"
      ],
      correctAnswer: 1
    },
    {
      text: "What is the purpose of a reducer in Redux?",
      options: [
        "To handle API calls",
        "To dispatch actions",
        "To specify how the state changes in response to actions",
        "To connect React components to Redux"
      ],
      correctAnswer: 2
    },
    {
      text: "What is the correct order of the Redux data flow?",
      options: [
        "Action → Reducer → Store → View",
        "View → Action → Store → Reducer",
        "View → Action → Reducer → Store",
        "Store → Action → Reducer → View"
      ],
      correctAnswer: 0
    },
    {
      text: "Which function is used to connect a React component to the Redux store?",
      options: ["mapStateToProps", "connect", "createStore", "bindActionCreators"],
      correctAnswer: 1
    }
  ],
  // Doomseeker Boss
  [
    {
      text: "What is TypeScript?",
      options: [
        "A JavaScript framework",
        "A superset of JavaScript that adds static types",
        "A JavaScript compiler",
        "A testing framework for JavaScript"
      ],
      correctAnswer: 1
    },
    {
      text: "What is the purpose of type annotations in TypeScript?",
      options: [
        "To improve runtime performance",
        "To check for errors during development",
        "To optimize the build size",
        "To create custom HTML elements"
      ],
      correctAnswer: 1
    },
    {
      text: "How do you define a function type in TypeScript?",
      options: [
        "function myFunc(): void {}",
        "type MyFunc = (param: string) => number;",
        "interface MyFunc { (param: string): number; }",
        "Both B and C"
      ],
      correctAnswer: 3
    },
    {
      text: "What is the primary purpose of React Query?",
      options: [
        "Server-side rendering",
        "Data fetching, caching, and state management",
        "Form validation",
        "Routing and navigation"
      ],
      correctAnswer: 1
    },
    {
      text: "Which hook from React Query is used to fetch data?",
      options: ["useFetch", "useQuery", "useData", "useGet"],
      correctAnswer: 1
    },
    {
      text: "What is the advantage of React Query over manually fetching with useEffect?",
      options: [
        "Automatic caching",
        "Automatic refetching",
        "Deduplication of requests",
        "All of the above"
      ],
      correctAnswer: 3
    },
    {
      text: "What is Jest?",
      options: [
        "A state management library",
        "A JavaScript testing framework",
        "A CSS-in-JS solution",
        "A build tool for React"
      ],
      correctAnswer: 1
    },
    {
      text: "What is React Testing Library used for?",
      options: [
        "Mocking API responses",
        "Testing React components from a user's perspective",
        "End-to-end testing",
        "Performance testing"
      ],
      correctAnswer: 1
    },
    {
      text: "Which function is used to select elements in React Testing Library?",
      options: ["querySelector", "getByText", "findElement", "selectNode"],
      correctAnswer: 1
    },
    {
      text: "What is the purpose of React.memo?",
      options: [
        "To memorize function results",
        "To prevent unnecessary re-renders of components",
        "To create memoized selectors for Redux",
        "To cache API responses"
      ],
      correctAnswer: 1
    },
    {
      text: "Which hook is used to memoize expensive calculations in React?",
      options: ["useCallback", "useMemo", "useEffect", "useReducer"],
      correctAnswer: 1
    },
    {
      text: "What is code splitting in React?",
      options: [
        "Breaking components into smaller ones",
        "Separating CSS from JavaScript",
        "Dividing code into chunks that can be loaded on demand",
        "Splitting the codebase into frontend and backend"
      ],
      correctAnswer: 2
    },
    {
      text: "What is an error boundary in React?",
      options: [
        "A component that catches JavaScript errors in children",
        "A special type of try-catch block",
        "A way to handle network errors",
        "A boundary between client and server code"
      ],
      correctAnswer: 0
    },
    {
      text: "Which React pattern allows a component to render with different content based on props?",
      options: ["Higher-order components", "Render props", "Context API", "Hooks"],
      correctAnswer: 1
    },
    {
      text: "What is a higher-order component (HOC) in React?",
      options: [
        "A component with complex UI",
        "A function that takes a component and returns a new component",
        "A component with many child components",
        "The top-level component in a React app"
      ],
      correctAnswer: 1
    }
  ],
  // Deathless Boss
  [
    {
      text: "What is Next.js?",
      options: [
        "A state management library",
        "A React framework with server-rendering capabilities",
        "A testing framework for React",
        "A CSS-in-JS library"
      ],
      correctAnswer: 1
    },
    {
      text: "What is the primary benefit of server-side rendering?",
      options: [
        "Faster initial page load and better SEO",
        "Reduced server load",
        "Simpler code structure",
        "Automatic code splitting"
      ],
      correctAnswer: 0
    },
    {
      text: "What is static site generation (SSG) in Next.js?",
      options: [
        "Generating HTML pages at build time instead of request time",
        "Creating static components that don't re-render",
        "Generating TypeScript definitions from JavaScript code",
        "Creating static assets like images and CSS files"
      ],
      correctAnswer: 0
    },
    {
      text: "What is the main difference between Redux and MobX?",
      options: [
        "Redux uses immutable state, MobX uses mutable state",
        "Redux is newer than MobX",
        "Redux is for React only, MobX is framework-agnostic",
        "Redux is more complex to set up"
      ],
      correctAnswer: 0
    },
    {
      text: "Which state management library uses a proxy-based approach?",
      options: ["Redux", "MobX", "Zustand", "Recoil"],
      correctAnswer: 1
    },
    {
      text: "What is GraphQL?",
      options: [
        "A database query language",
        "A query language for APIs",
        "A graph-based state management solution",
        "A library for data visualization"
      ],
      correctAnswer: 1
    },
    {
      text: "What is Apollo Client used for?",
      options: [
        "Server-side rendering",
        "GraphQL queries and mutations in React apps",
        "CSS styling in React",
        "Form validation"
      ],
      correctAnswer: 1
    },
    {
      text: "What is a micro frontend architecture?",
      options: [
        "Using microservices for the frontend",
        "Breaking a frontend app into independently deployable pieces",
        "Using small UI components",
        "A minimalist design approach"
      ],
      correctAnswer: 1
    },
    {
      text: "What is a common challenge in implementing micro frontends?",
      options: [
        "Styling inconsistencies",
        "Communication between micro frontends",
        "Version conflicts of shared dependencies",
        "All of the above"
      ],
      correctAnswer: 3
    },
    {
      text: "What is continuous integration (CI)?",
      options: [
        "Continuously adding new features",
        "Automatically testing and building code when changes are pushed",
        "Integrating with third-party APIs",
        "Continuous user feedback"
      ],
      correctAnswer: 1
    },
    {
      text: "What is continuous deployment (CD)?",
      options: [
        "Deploying code continuously without testing",
        "Automatically deploying code changes to production",
        "Developing code continuously",
        "Deploying to multiple environments simultaneously"
      ],
      correctAnswer: 1
    },
    {
      text: "What is WCAG in the context of web accessibility?",
      options: [
        "Web Content Accessibility Guidelines",
        "World Computer Access Group",
        "Web Compliance and Governance",
        "Website Code Analysis Guidelines"
      ],
      correctAnswer: 0
    },
    {
      text: "What is the purpose of the 'alt' attribute on an image?",
      options: [
        "To display when the image fails to load",
        "To provide text for screen readers",
        "To add a tooltip on hover",
        "Both A and B"
      ],
      correctAnswer: 3
    },
    {
      text: "What is i18n in web development?",
      options: [
        "A formatting standard",
        "Internationalization - support for multiple languages",
        "A JavaScript library with 18 functions",
        "Internet standards version 18"
      ],
      correctAnswer: 1
    },
    {
      text: "What makes a web application a Progressive Web App (PWA)?",
      options: [
        "It's built with React",
        "It has offline capabilities and can be installed on devices",
        "It has progressive enhancement features",
        "It loads progressively from top to bottom"
      ],
      correctAnswer: 1
    }
  ],
  // Thrice-Forged Boss
  [
    {
      text: "What is React Native?",
      options: [
        "A version of React for native browser features",
        "A framework for building native mobile apps using React",
        "A native implementation of JavaScript",
        "A cloud platform for React applications"
      ],
      correctAnswer: 1
    },
    {
      text: "How does React Native differ from hybrid app frameworks like Ionic?",
      options: [
        "React Native uses web views, Ionic doesn't",
        "React Native compiles to native components, not web views",
        "React Native is for iOS only, Ionic is cross-platform",
        "React Native is faster to develop with"
      ],
      correctAnswer: 1
    },
    {
      text: "What is WebAssembly (WASM)?",
      options: [
        "A new JavaScript syntax",
        "A JavaScript assembly language",
        "A binary instruction format that runs in browsers",
        "A web-based IDE for assembly language"
      ],
      correctAnswer: 2
    },
    {
      text: "Why would you use WebAssembly with React?",
      options: [
        "For basic UI rendering",
        "For computationally intensive tasks like image processing",
        "For server-side rendering",
        "For improved CSS capabilities"
      ],
      correctAnswer: 1
    },
    {
      text: "What is the React Profiler used for?",
      options: [
        "Debugging React code",
        "Measuring render performance of components",
        "Creating user profiles",
        "Testing React applications"
      ],
      correctAnswer: 1
    },
    {
      text: "Which tool can help identify unnecessary re-renders in React?",
        options: [
        "React DevTools Profiler",
        "Chrome Performance tab",
        "why-did-you-render library",
        "All of the above"
      ],
      correctAnswer: 3
    },
    {
      text: "What is a serverless function?",
      options: [
        "A function that runs without servers",
        "Code that runs on demand without managing infrastructure",
        "A function that doesn't need internet",
        "A function that runs entirely in the browser"
      ],
      correctAnswer: 1
    },
    {
      text: "Which of the following is NOT a serverless platform?",
      options: ["AWS Lambda", "Azure Functions", "Google Cloud Functions", "MongoDB"],
      correctAnswer: 3
    },
    {
      text: "What is concurrent rendering in React 18?",
      options: [
        "Rendering multiple components at the same time",
        "A rendering mode that can start and stop rendering to prioritize updates",
        "Rendering on multiple threads",
        "Rendering components server-side and client-side simultaneously"
      ],
      correctAnswer: 1
    },
    {
      text: "What is the Suspense component in React used for?",
      options: [
        "Error handling",
        "Lazy loading components",
        "Animation transitions",
        "State management"
      ],
      correctAnswer: 1
    },
    {
      text: "What is a monorepo?",
      options: [
        "A repository that only has one branch",
        "A single repository containing multiple related projects",
        "A repository maintained by a single developer",
        "A repository with a single large application"
      ],
      correctAnswer: 1
    },
    {
      text: "What is a design system?",
      options: [
        "A tool for creating UI designs",
        "A collection of reusable components, guidelines, and standards",
        "A CSS framework",
        "A design pattern for React applications"
      ],
      correctAnswer: 1
    },
    {
      text: "What is a dApp?",
      options: [
        "A desktop application",
        "A decentralized application running on a blockchain",
        "A debugging application",
        "A design application"
      ],
      correctAnswer: 1
    },
    {
      text: "What is the purpose of a wallet connection in a Web3 React app?",
      options: [
        "To store application data",
        "To authenticate users and interact with the blockchain",
        "To process payments",
        "To store user preferences"
      ],
      correctAnswer: 1
    },
    {
      text: "What is the concept of 'Clean Architecture' in software development?",
      options: [
        "Writing code with good formatting and comments",
        "Separating concerns into layers with dependencies pointing inward",
        "Using modern frameworks and tools",
        "Implementing extensive testing"
      ],
      correctAnswer: 1
    }
  ]
];
