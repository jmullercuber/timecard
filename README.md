# My Easy Timecard App

I do not always work continuous hours.
Maybe I'll dedicate some hours in the morning,
pause and pivot to errands or a long lunch, and then resume in the evening.

Nonetheless, it's valuable to accurately document time spent on a project for
billing, reporting, or optimization.

This app aims to provide a low-overhead interface, allowing me to quickly and accurately track time by sending starts and stops signaling. Similar to a [punch clock machine](https://en.wikipedia.org/wiki/Time_clock).
Additionally, if I forget to "clock in" or "clock out", I can edit records appropriately.

No login/network connection required.

## TODOs

- offline (use Cache API)
- make it look pretty
- edit time segment history
- edit current time segment's start
- associate project/activity with time segment

## Usage

Visit the app at https://jmullercuber.github.io/timecard/

## Development

### `npm start`

Runs the app in the development mode.\
Open http://localhost:3000/timecard to view it in the browser.

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
