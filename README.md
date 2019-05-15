# 2048_jquery

Refactoring into modern javascript ES6
Use console.log for debug

0. Observe index_2.html, I load script with type module and i can export and import class ES6 for best organization and architecture of code.
```html
<script type="module" src="refactoring/index.js"></script>
```
1. Implément function createGrid in class Grid.js that append row and cell in container.
2. Implément function rand in class Grid.js, this push 2 random number (2 or 4 with 1/10 probability) in the grid for init game.
3. Import move and merge in the file App.js
4. Complete the listenKeyDown for the top and right direction
5. In Menu, implement the increaseScore and call it when you merge cells.
6. Implement the actions Buttons
7. Implement function overbook that detect if game over.
8. Save best score in LocalStorage
9. In menu, implement function that show Win modal
10. Use npm package manager for install packet, for exemple jquery 
11. I have install babel for transpile es6 in es5 with webpack, a task runner that automates time consuming repetitive tasks.
Replace in index_2.html the script by the build script in build directory for the compatibility of navigator
The build script is created when you run in terminal : 
```bash
npm install,
webpack --watch for watch and transpile code es6 in build/app.bundle.js in es5
```
