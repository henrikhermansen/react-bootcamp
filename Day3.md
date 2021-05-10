# React Bootcamp - day 3

Welcome to the third day of React Bootcamp!

Today we'll be finishing the work of making a todo app. Make sure you've solved all the tasks from day 2 first, as that'll be needed to solve the tasks today.

In todays presentation we looked at reusable components. If you haven't already noticed you've been given a handful of very simple reusable components in the [components](./bootcamp-app/src/components) folder. All except `<Checkbox />` are merely wrapper components, adding some default styling, while `<Checkbox />` has a little extra.\
They are just added as examples and could be used at your convenience, but they are entirely optional.

Now is also a good time to install React Dev Tools. It's not needed to solve the tasks, but you should take some time to try it out and see how various code changes are reflected in the tools.

If you ever get completely stuck, you can have a look in the suggested [solutions](./bootcamp-app/solutions) subfolder.

## Getting started

**This is just the same as yesterday**

First, open a terminal, head in to the app folder [bootcamp-app](./bootcamp-app) and run `npm install`.

Now run `npm run db`. This will launch a local JSON server which we can read and write some data to. The data is stored in [db.json](./bootcamp-app/db.json).\
Finally run `npm start`. This will start the build in watch mode and launch a local web server to serve our app.

After a few seconds you should hopefully see your browser open up at `http://localhost:3000/`. If that doesn't happen automatically, just go do it manually :smile: 

Now open your editor of choice and go to the [src folder](./bootcamp-app/src), and you're all ready to go! :rocket:

## :one: Rendering a list

Hopefully you weren't too annoyed with having to look at that ~~raw~~ prettified JSON through entire day 2. Finally it's time to render our data as a list.

:trophy: Render your list of todos as a list of React elements.

:memo: It's not important what type of HTML elements you use, but a suggestion could be to render a list of `<li />` elements wrapped in `<ul />`.

:bulb: Simply map your data array from objects to React elements.

:bulb: Remember to give each element a uniquely identifying `key` prop.

## :two: Reusable `<Todo />`

You may have noticed that our todo objects have a `done` property. We are soon going to utilize this, but before we start doing that we should make a Todo component. Just like you split up the Todos component in day 2, we will now preemtively make a new component to house our upcoming code.

:trophy: Create a new component next to `Todos.tsx` and move the output of your mapping function (from task :one:) to the new component.

:trophy: Import your new component to Todos and have your mapping function return it.

## :three: Updating todos

A todo list isn't really a todo list if you can't tick a box saying you've completed a todo. Then it's just a list. It's time to add the ability to toggle the `done` prop of our todos.

:trophy: Add a checkbox in your todo component. It should show the status of `todo.done`.

:trophy: Add an event handler to the checkbox. Have your event handler call `putTodo()` (from `api/todos`) with an updated todo object.

:bulb: You could use the `onChange` event of an input field.

:warning: Make sure you refetch the data, like in task 6 of day 2.

:trophy: Navigate to a checkbox with Tab. Tick it by pressing Space. Does your browser retain focus on the checkbox? If yes, you're done. If no, fix it, because it should.

## :four: ThemeContext

Our todo list now works great, but our app could use some color. You may have noticed the `<ThemeProvider />` in `<App />`. Right now it just renders its `children`, but if you had a look inside `ThemeContext.tsx` you should know something's up. It's time to open that file and start coding.

:trophy: Create a theme state inside `ThemeProvider` and initiate the state with the first theme. You should also change `ThemeContext` to be initiated with `undefined`, like `SetThemeContext`.

:trophy: Wrap `children` returned from `ThemeProvider` with Providers for the two Contexts created in the file. You should put the value and the se tter from the theme state in each Context.

:bulb: You need to use a `Context.Provider` component, and give it a `value` prop.

## :five: Custom Context Hooks

While working on the previous task you may have been wondering why we're making a custom Provider component instead of just exporting the Hooks. There are two main reasons for doing this.
First, we need to put our theme state _somewhere_ anyways, so making a dedicated component like `ThemeProvider` makes sense.\
Second, it helps us making safer Contexts. The first step of making safer Contexts has already been taken, by not exporting the Contexts directly. This allows us to make sure the Context is not used for other purposes than what it was made for (to make the current theme available). It also allows us to make sure the Context is not consumed outside the Context by only exporting custom Hooks.

:trophy: Finish the Hooks `useTheme` and `useSetTheme` so they return the current value of each Context.

:bulb: These custom Hooks aren't really Hooks yet. What are they missing?

:trophy: Make the Hooks throw an `Error` if they are used outside their corresponding Context.

:bulb: Make use of the default value of the Context to determine whether the Hook is used outside or inside a Context Provider.

## :six: Offering more themes

Finally, it's time to allow for more themes. This task won't require any new knowledge, but it has a bit less specific instructions than previous tasks. For this task you should open `ThemeSelector.tsx`.

:trophy: Make a component that allows the user to change the active theme.

:bulb: You can import `themes` from `ThemeContext` for a list of available themes.

:bulb: You've been provided a suggested component `<ThemeButton />`. But beware, the component is missing a way to change the active theme.

## :100: React ecosystem

First of all, congratulations! You've completed the React Bootcamp :clap:\
Now that you've made it this far it's time to start playing around.

:trophy: Install something from NPM from the React ecosystem, read its docs and try it out.

:warning: This has not been done in the solutions folder, so you're on your own now.

:bulb: Just an idea. Try [jest](https://www.npmjs.com/package/jest) and [React testing library](https://www.npmjs.com/package/@testing-library/react) to test your app. Make sure you read [this intro](https://testing-library.com/docs/react-testing-library/intro/) about React test, and take at look at the [Jest docs](https://jestjs.io/docs/getting-started).

:bulb: Just an idea. Try [swr](https://www.npmjs.com/package/swr) to fetch and cache todos. This would mean you no longer need the state in `<Todos />`.

:bulb: Just an idea. Try [emotion](https://www.npmjs.com/package/@emotion/react) to style your components. This would mean you could throw out those awkward-syntax `style` objects scattered around.