# Bitcamp React.js

React is a fun and interactive front end web framework that is quickly taking over the world! We want to create a 4-week bootcamp about React for students who have some knowledge of JavaScript and are ready to pick up a new technology. We will be focusing on the functional components and React Hooks as opposed to React class components.

**Why Hooks instead of the traditional classes?**

You only have one state object per component class in React which means there will be times where fields are placed together in the state object that has nothing to do with each other. This makes the code confusing. You need to bind 'this' for every event handler function. This is not intuitive and can be difficult for React newbies to understand.

Hooks were created to address the above concerns and several others. Hooks make React much cleaner, easier to read, and easier to write. The developers of React see Hooks as its future. They do not currently have plans to remove class support but within the Hooks FAQ they state "In the longer term, we expect Hooks to be the primary way people write React components." Hence, I believe Hooks are the proper way to teach React in 2020.

**What will the student work on?**

The students will create a Todo list, an Expense Calculator, and a Snippet Generator. 

Many other React tutorials begin with a Todo list as it is a simple assignment that is able to show off many of features React offers. The Todo list will be constructing in class and will retirerate all of the concepts of JSX and React Hooks that the students have seen up to that point. Then they will complete an Expense Calculator to reinforce these principles.

The Snippet Generator will be constructed in class and will closely resemble the one found [here](https://snippet-generator.app/). The code for this project has been restructured to better suit the material covered in the Bitcamp and to address some of the flaws of the original design. We believe this to be a suitable capstone as it is an app that many developers currently use around the world making it quite practical and is a tool which the students may find useful themselves. If you wish to know more about code snippets you may explore the [VS Code Documentation](https://code.visualstudio.com/docs/editor/userdefinedsnippets).

### **Week 1**

Establish an understanding of a functional component and its parts.

**Objective: These are all required in understanding how to use React and the way React integrates JavaScript and HTML into JSX**

- Learn Functional Components
- Understand ReactDOM and render
- Learn JSX

**Homework**

- Students will be given a few broken components to debug
- Asked to create a component composed of a header, main, and footer component

### **Week 2**

Introduce students to props and the useState Hook.

**Objective: These two aspects of React are best learned together and are the most vital in creating a React app.** 

- Learn what props are and how they are used to pass information between components
- Briefly talk about Hooks before going into useState and why state makes React so dynamic

**Homework**

- Have a component update its parent's state
- Have a component update its siblings props

### **Week 3**

Provide a more in-depth explanation of Hooks. Introduce and elaborate on useEffect and useRef.

**Objective: Both useEffect and useRef are Hooks that are required in the Todo list and carousel and are commonly used Hooks. Here it is important to show useEffect's verbose class equivalent to understand why React Developers are moving toward Hooks. Students should also understand that you can create your own Hooks and use others the community has created.**

- Explain useEffect and its class equivalent along with useRef
- Show how to create your own Hooks
- Start the Todo list but leave parts of it for the students to complete

Homework

- Complete the Todo list

### **Week 4**

Create a code snippet generator.

**Objective: We want to provide students deeper knowledge on how to construct a React app that is larger in scope than what we have done before. We believe this is necessary so students understand basic concepts on how to strucure larger sized React apps.**

- Build a snippet generator but leave out certain parts of it for the students to complete on their own

Homework

- Complete the snippet generator
