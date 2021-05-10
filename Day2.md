# React Bootcamp - day 2

Welcome to the second day of React Bootcamp!

Today we'll be beginning the work of making a todo app. Some code has been prepared for you, but the app currently doesn't work at all.\
The app has been set up using Create React App, so you don't need to worry about setting up the build process.

For now you can ignore the [components](./bootcamp-app/src/components) and [theme](./bootcamp-app/src/features/theme) folders. Those are for day 3.

If you ever get completely stuck, you can have a look in the suggested [solutions](./bootcamp-app/solutions) subfolder.

## Getting started

First, open a terminal, head in to the app folder [bootcamp-app](./bootcamp-app) and run `npm install`.

Now run `npm run db`. This will launch a local JSON server which we can read and write some data to. The data is stored in [db.json](./bootcamp-app/db.json).\
Finally run `npm start`. This will start the build in watch mode and launch a local web server to serve our app.

After a few seconds you should hopefully see your browser open up at `http://localhost:3000/`. If that doesn't happen automatically, just go do it manually :smile: 

Now open your editor of choice and go to the [src folder](./bootcamp-app/src), and you're all ready to go! :rocket:

## :one: Fetching data

If you haven't already, take a look in `Todos.tsx`. Here you will see that the data, which the app is showing as pretty printed JSON, is just dummy data in a plain variable. So we're not fethcing any data, and we don't even have component state.

:trophy: Add component state and populate it with todos from the JSON server. Keep the name `todos` for the state, so you can see if your app output changes as expected.

:memo: Fetching data is not a React specific thing, so you've been provided with some API functions to let you focus on React. You'll see that `getTodos()` is already imported.

:bulb: Use the appropriate Hook to give the component _state_. Use array deconstruction to get the value and the setter function.

:bulb: Fetching data is an asynchronous process and gives side _effects_. Use the appropriate Hook to fetch data.

:warning: The effect function can't be asynchronous, but it can call an asynchronous function. Full score if you can solve this with `async/await` instead of a Promise chain.

:trophy: Add a second state instead of the error variable. If the fetch call fails you should set this to `true` to display the `<Error />` component.

## :two: Referencing an input field

In preperation of adding a todo we need to be able to retrieve the value from the input field in the app. One way to do this is making a reference to the input field. To do this we need to make a ref object and then pass it to the input field.

:trophy: Make a ref object, pass it to `<input />` and update `onAddTodo()` to log the value from the input field.

:bulb: A _ref_ object can be made using the appropriate Hook.

:warning: You may truggle a bit with TypeScript on this one. You should be able to solve it by typing the Hook with `HTMLInputElement` and initiating it with `null`.

:warning: You won't find this in the solutions, because we will remove the ref very soon.

## :three: Splitting up a component

This task isn't strictly necessary to do, but it will make things a bit tidier. As we proceed towards being able to add todos we notice our Todos component is getting a bit messy. We've added Hooks to fetch data, but we also have a ref Hook and a callback to add a Todo. Mixing different concerns works just fine, but it's going to give a poor developer experience.

:trophy: Create a new component next to `Todos.tsx` and move your ref hook, onClick callback and the form tag (including children) into this new component.

:memo: A common naming convention is to use PascalCase on React component files.

:memo: You can safely move the import of `postTodo()` to your new file – you won't need it in `Todos.tsx`.

:trophy: Import the component and render it in `Todos.tsx`.

## :four: Proper data binding

Perhaps you were a bit confused at task :two:? Didn't we learn using a ref isn't the best way to use an input field?\
You're absolutely right! So let's fix that.

:trophy: Give your new component state instead of that ref object. Pass the state value and the setter function to `<input />` instead of the ref.

:memo: Your state should be initiated with an empty string. If you initiate it with nothing, you might see React will be warning about your input going from being an uncontrolled component to a controlled component.

:bulb: The input field needs `value` and `onChange` props.

:trophy: Update `onAddTodo` to log the state value to make sure everything is working as intended.

## :five: Storing data

Finally we're all set to add a brand new todo.

:trophy: Update `onAddTodo` to post your todo using `postTodo()`.

:memo: After posting, it's good practice to clear the input field.

:memo: You will need to refresh the page to see if your todo was actually added.

## :six: Refetching data

In the previous task we added a todo, but we had to refresh the page to see it. Why is it so? Well, we just posted a todo to a backend. Our `<Todos />` component has no way of knowing there's some new data available from that backend. So how can we solve this?

:trophy: Trigger a refetch of data automatically after adding your todo.

:memo: How you solve this depends on your previous implementation of state and effect.

:memo: Rather than refetching it could be an acceptable solution to just add the new todo to our state. However, this would miss any adjustments made to the data in backend, and could cause a mismatch between the data in frontend and backend. A combination of local mutation and cache invalidation as a good, but more complex alternative.

:bulb: A callback might be very heplful here. But be careful with passing setter functions around directly.