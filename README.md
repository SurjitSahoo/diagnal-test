# Dummy Movie-List App for DIAGNAL Assignment

[Checkout the app](https://surjitsahoo.github.io/diagnal-test/) deployed in GitHub-Pages

## To run the app in local system

- Clone the repository

  ```sh
  git clone https://github.com/SurjitSahoo/diagnal-test.git
  ```

- install dependencies

  ```sh
  npm install
  ```

- start the app

  ```sh
  npm start
  ```

## Specs

- [Eslint](https://eslint.org/), [Prettier](https://prettier.io/) and [husky](https://typicode.github.io/husky/) configurations for static code analysis, code-formatting and for adding git-hooks to avoid unintended bad-code push to the repository
- [Tailwind css](https://tailwindcss.com/) for styling the app.
- [Redux-Saga](https://redux-saga.js.org/) for managing global state

# NOTE

> - Redux-Create-Store, redux-reducer and few other patterns are deprecated, currently [redux-toolkit](https://redux-toolkit.js.org/) is the recommended way for using redux in react.
> - But redux-toolkit doesn't support infinite scroll feature by default, it's fairly simple to implement within component, but the data wont be available globally. Other option is to create a custom hook, it can get complicated to implement and it will also void the cashing feature, so it's not worth it in my opinion.
> - I've implemented using redux-saga, hence it has no caching.
> - I'm not a big fan of redux, I've only used it because the requirement specifically asked for it. Otherwise I prefer [React-Query](https://react-query.tanstack.com/), with this the app could have a lot better user-experience. In bigger applications it's a noteworthy difference.

## To take it further

- Add new Pages by creating new pages in `src/pages` directory and then registering new routes in `src/routes/index.ts` file.
- Add new components in `src/components` directory

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
