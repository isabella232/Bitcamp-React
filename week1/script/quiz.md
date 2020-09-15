# JSX Quiz

1. **Can a web browser read JSX directly?**

   a. No, a web browser must be compiled before it can read JSX.

   b. Yes.

   c. Only Internet Explorer

   d. No, JSX must be compiled before it can be read by a web browser

   **Answer:** D



2. **What should you pass to `ReactDOM.render()` for its second argument?**

   a. `ReactDOM.render()` itself.

   b. A selector that matches an HTML element.

   c. A JSX expression that you want to compile.

   d. A JSX expression that you want to render.

   **Answer:** B



3. **What's wrong with this code?**

   ```jsx
   let skateboard = (
   	<img src="bitcamp.jpg" />
      <h1>Can't wait to start using React!</h1>
   );
   ```

   a. JSX expressions need to be compiled.

   b. JSX expressions need an outermost element.

   c. JSX expressions should be followed by full colons, not semicolons. 

   d. Improper use of 'let'.

   **Answer:** B



4. **Which block of code will render `100` to the screen?**

   a.

   ```jsx
   ReactDOM.render(
   	<h1>10 * 10</h1>,
   	document.getElementById('root')
   )
   ```

   b. 

   ```jsx
   ReactDOM.render(
   	<h1>{10} * {10}</h1>,
   	document.getElementById('root')
   )
   ```

   c. 

   ```jsx
   ReactDOM.render(
   	<h1>{10 * 10}</h1>,
   	document.getElementById('root')
   )
   ```

   d.

   ```jsx
   ReactDOM.render(
   	{<h1>10 * 10</h1>},
   	document.getElementById('root')
   )
   ```

   **Answer:** C



5. **Which block of code will return 'Success'?**

   a. 

   ```jsx
   {2 <= 1 ? <h1>Failure</h1> : <h1>Success</h1>},
   ```
   
   b.

   ```jsx
   {42 < 5 && <h1>Success</h1>},
   ```
   
   c.

   ```jsx
   {true ? <h1>Failure</h1> : <h1>Success</h1>},
   ```

   **Answer:** A