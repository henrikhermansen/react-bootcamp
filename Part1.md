# React workshop - part 1

We will be warming up with some fairly simple tasks. They can all be found in the [bootcamp-warmup](./bootcamp-warmup) folder.

Open the task you want to solve in your browser and follow the task description below.\
In the source of each task you will find comments to guide you on where you need to make changes, but you may need to make changes in other places of the code as well.

If you ever get completely stuck, you can have a look in the suggested [solutions](./bootcamp-warmup/solutions) subfolder.

## :one: My first Component [:link:](./bootcamp-warmup/01-my-first-component.html)

The most essential part of React is making your own components.\
Whatever you return from a component function will be rendered on screen.

:trophy: Use MyComponent to render a heading with the text "Hello world"

:trophy: Add a red color to the text

:bulb: You need to return some JSX from the component function.

:bulb: You can set color by adding a "style" prop to your heading. The value needs to be an object with the styles you want to set.

## :two: Component props [:link:](./bootcamp-warmup/02-component-props.html)

Most components will need to take some props (properties) and use them in the component.

:trophy: Change MyComponent to output "Greetings world". But don't just change the text, replace "Hello" with the value of a prop.

:bulb: Component function takes the prop object as the first parameter.

:bulb: When passing text to a prop use quotes `someProp="someText"`. When passing JS to a prop use curly brackets `someProp={someVariable}`. You can even pass objects directly `someProp={{ key: 'value' }}`.

## :three: Component state [:link:](./bootcamp-warmup/03-component-state.html)

Another integral part of React is giving components some state. Let's use that to greet someone else than the world.

:trophy: Give the component state and replace "world" with the value of the state. Maybe we should greet someone named Bob?

:memo: Usually we would import what we need from the React package, but here we must use `React` from the global scope.

:bulb: You need to use a hook. Remember the hook returns an array. Try destructuring the array right away, like in the presentation.

## :four: Event handlers [:link:](./bootcamp-warmup/04-event-handlers.html)

For the final task we will try out an event listener, and also update the state from the previous task.

:trophy: Add an input field where the user can change the name in the greeting.

:bulb: Remember that a component can't return two sibling elements directly, they must be wrapped in a Fragment.