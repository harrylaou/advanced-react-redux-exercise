## Advanced React Redux exercise

## Requirements
You need to have `node`and `npm`installed in your computer.

## How to install

- `git clone git@github.com:reactjs-academy/advanced-react-redux-exercise.git`
- `cd advanced-react-redux-exercise`
- `npm i`
- `npm start`
- `Open the Browser with the url http://localhost:3000` and you will be ready to start


## Exercise

1. Create a logger middleware to log in the console every action that is dispatched

2. Using the redux-promise middleware, move all the api calls from the /containers/UsersContainer.jsx to the action creators in /actions/users.js

3. Move all the logic from the fetch(params) method in /containers/UsersContainer.jsx to the action creators in /actions/users.js

4. Using Normalizr and a Redux middleware api, abstract the logic from the action creators in /actions/users.js to the middleware api
