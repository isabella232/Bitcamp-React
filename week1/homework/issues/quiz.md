# JSX Quiz

*Please quickly answer these five multiple choice questions on JSX.*

1. **Can a web browser read JSX directly?**

   a. No, a web browser must be compiled before it can read JSX.

   b. Yes.

   c. Only Internet Explorer

   d. No, JSX must be compiled before it can be read by a web browser

   **Answer:** 



2. **What should you pass to `ReactDOM.render()` for its second argument?**

   a. `ReactDOM.render()` itself.

   b. A selector that matches an HTML element.

   c. A JSX expression that you want to compile.

   d. A JSX expression that you want to render.

   **Answer:** 



3. **What's wrong with this code?**

   ```react
   let skateboard = (
   	<img src="bitcamp.jpg" />
       <h1>Can't wait to start using React!</h1>
   );
   ```

   a. JSX expressions need to be compiled.

   b. JSX expressions need an outermost element.

   c. JSX expressions should be followed by full colons, not semicolons. 

   d. Improper use of 'let'.

   **Answer:** 



4. **What is the correct way to attach the function `yo` to a click event?**

   ```react
   const yo = () => {
       alert('Yo')
   }
   ```

   a. `<button onClick={yo}></button>`

   b. `<button>{onClick=yo}</button>`

   c. `<button onClick=yo></button>`

   d. `<button {onClick}={yo}></button>`

   **Answer:** 



5. **Which block of code will render `100` to the screen?**

   a.

   ```react
   ReactDOM.render(
   	<h1>10 * 10</h1>,
   	document.getElementById('root')
   )
   ```

   b. 

   ```react
   ReactDOM.render(
   	<h1>{10} * {10}</h1>,
   	document.getElementById('root')
   )
   ```

   c. 

   ```react
   ReactDOM.render(
   	<h1>{10 * 10}</h1>,
   	document.getElementById('root')
   )
   ```

   d.

   ```react
   ReactDOM.render(
   	{<h1>10 * 10</h1>},
   	document.getElementById('root')
   )
   ```

   **Answer:** 