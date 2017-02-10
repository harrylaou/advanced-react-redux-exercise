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

2. Create a promise middleware to teach store's dispatch how to understand promises. Then move the api call from the fetch method in the /containers/UsersContainer.jsx to a fetchUser action creator in /actions/users.js

3. Refactor the middleware so it implements a middleware chain

4. Using thunks, add loading indicators to the fetchUser action creator in /actions/users.js. 

5. Using Normalizr and a Redux middleware api, abstract the logic from the action creators in /actions/users.js to the middleware api
