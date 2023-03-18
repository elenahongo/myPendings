# My pendings app

### Deployment

This app has been deployed in githubpages on https://elenahongo.github.io/myPendings/

Deployments are triggered using this command:
### `npm run deploy`

## Run the app locally

In the project directory, you can run first:

### `npm install`

Once completed the installation, run:
### `npm start`

Now the app must be running in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Key Features:

The purpose of this app is to allow you to track your pendings.

	• You can create pending cards by clickling on the button with a plus icon in the app. Once clicked, a modal will be displayed, fill the form contained there. You must provide:

    - Priority: required, default to 'Medium'
    - Text: act as a description for your pending, is required, must be longer than 1 and shorter than 50 characteres, and is not allowed to be the same than any other pending created previously.
    - Status: Statuses allowed: Active, Done, default to 'Active', is required
    - Due date: Not validated, default to today.

	• Once you submit the form, if you selected 'Active' as the status for your new pending, a new card will appear in the dashboard and the active counter on the bottom will increase by 1. Otherwise, if you selected the status 'Done' the count for done pendings will increase by 1 and the pending card won't be displayed in the dashboard.  If the tasks should be completed within the current or the next day the card color would be #FFD6D6, otherwise, the color would be #FFFFFF.

	• Only active tasks will appear in the dashboard, by clicking the blue check icon in the card you can mark the pendings as "Done". By clicking the red trash can icon you'll delete the pending task. Both actions will cause the pending task to disappear from the dashboard. The "Active" and "Done" counters are incremented or decremented according to the action performed.
	
  • You can drag the pending card to place it wherever you want in the dashboard area.

### Technologies and libraries used:

  This application uses react, it was initially crrated using Create React App, to provide a fully react app with preconfigured build/bundle tools and ready for deployment. I use stateful components to keep track of the data and to performe the required updates.

  This app uses the following libraries for this purposes:

    - fortawesome: display icons from a broad icons library using a built-in react component
    - bootstrap: for add stylized components (the modal uses bootstrap) and to use classes across the application for common styles like spacing easily
    - formik: to keep track of values/errors/visited fields, orchestrating validation, and handling submission
    - lodash: basic utils as capitalize words
    - moment: used for creating, parsing, formatting and compare dates
    - react-draggable: library to improve drag and drop user experience. Although a basic drag and drop functionality can be implemented by introducing useState to the desired component, using it to update its css position property in terms of left: x, and top: y, listening to the drag event, the UX was not pretty good since the response time was to long, there was a long delay between the dragging action vs the actual positioning of the component. By using this library the UX has been improved, but the library use introduced as well a warning in console in dev for being use a deprecated method.
    - yup: for manage form input validation through built-in methods.
