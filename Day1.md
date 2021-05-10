# React Bootcamp - day 1

Welcome to the first day of React Bootcamp!

Today we will be warming up with some fairly simple tasks. They can all be found in the [bootcamp-warmup](./bootcamp-warmup) folder.

Open the task you want to solve in your browser and follow the task description below.\
In the source of each task you will find comments to guide you on where you need to make changes, but you may need to make changes in other places of the code as well.

If you ever get completely stuck, you can have a look in the suggested [solutions](./bootcamp-warmup/solutions) subfolder.

## :one: Vanilla DOM JavaScript [:link:](./bootcamp-warmup/01-vanilla-dom-javascript.html)

The first task is a vanilla JavaScript task. It is here to help you get an understanding of how imperative JavaScript can manipulate the DOM.

:trophy: By using only vanilla JavaScript, place a h1 with red color and the text "Hello world!" inside the div with id "root".

:memo: This task is not important to learn React, but it can be nice to have an understanding of what React does for you.

:bulb: It takes several operations to achieve this. You must get the root element, create a h1 element with the right properties, and append the h1 to the root.

## :two: React Create Element [:link:](./bootcamp-warmup/02-react-create-element.html)

Now let's get to use some React. We have provided `React` and `ReactDOM` for you to try out.

:trophy: Create the same h1 with text and color as in task 1 by using `React.createElement()` and `ReactDOM.render()`.

:memo: You will probably never use `React.createElement()` while coding, but it's nice to have an understanding of what JSX is compiled to.

:bulb: Have a look at the code snippets in the presentation if you don't remember the function signatures.

:bulb: You can set color by sending a "style" prop. This needs to be an object with the styles you want to set.

## :three: JSX [:link:](./bootcamp-warmup/03-jsx.html)

It's finally time to write some JSX. We have provided standalone Babel for this task to allow you to write JSX without having a build stage. This is not the way to go for a production application, but it's perfect for something to play around with.

:trophy: Replace the `React.createElement()` from the previous task with some JSX that produces the same output.

:bulb: The `style` prop of components takes an object, like the one in the previous task.

:bulb: When passing text to a prop use quotes `someProp="someText"`. When passing JS to a prop use curly brackets `someProp={someVariable}`. You can even pass objects directly `someProp={ { key: 'value' } }`.

## :four: My first Component [:link:](./bootcamp-warmup/04-my-first-component.html)

The most essential part of React is making your own components.

:trophy: Use MyComponent to produce the same output as the previous task.

:bulb: You need to return some JSX from the component function.

## :five: Component props [:link:](./bootcamp-warmup/05-component-props.html)

Most components will need to take some props (properties) and use them in the component.

:trophy: Change MyComponent to output "Greetings world". But don't just change the text, replace "Hello" with the greeting prop.

:memo: This is where object deconstruction shines. Try deconstructing the props in the parameter list.

:bulb: Component function takes the prop object as the first parameter.

## :six: Component state [:link:](./bootcamp-warmup/06-component-state.html)

Another integral part of React is giving components some state. Let's use that to greet someone else than the world.

:trophy: Give the component state and replace "world" with the value of the state. Maybe we should greet someone named Bob?

:memo: Usually we would import what we need from the React package, but here we must use `React` from the global scope.

:bulb: You need to use a hook. Remember the hook returns an array. Try deconstructing the array right away, like in the presentation.

## :seven: Event handlers [:link:](./bootcamp-warmup/07-event-handlers.html)

For the final task today we will try out an event listener, and also update the state from the previous task.

:trophy: Add an input field where the user can change the name in the greeting.

:bulb: Remember that a component can't return two sibling elements directly, they must be wrapped in a Fragment.