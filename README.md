# My pendings app

Please, share the link to the repository and create a well-defined README file to run the application locally. I

## Run the app locally

In the project directory, you can run first:

### `npm install`

Once completed the installation, run:
### `npm start`

Now the app must be running in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Key Features:

The purpose of this app is to allow you tracking your pendings.

	• You can create pending cards by clickling on the button with a plus icon in the app. Once clicked, a modal will be displayed, fill the form contained there. You must provide:
    - Priority: required, default to 'Medium'
    - Text: act as a description for your pending, is required and is not allowed to be repeated with other previously created pendings 
    - Status: Statuses allowed: Active, Done, default to 'Active'
    - Due date: Not validated, default to today

	• Once you submit the form, if you selected Active as the status for your new Pending, a new card will appear in the dashboard and the Active counter on the bottom will increase by 1. Otherwise, if you selected the status 'Done' the count for pendings done will increase by 1 and the pending card wont be displayed in the dashboard.  If the tasks should be completed within the current or the next day, the card color should be #FFD6D6. Otherwise, the color is #FFFFFF.


	• Only active tasks will appear in the dashboard, by clicking the check icon in the card you can mark the pendings as "Done". By clicking the trash can icon you'll delete the pending task. Both actions will cause the pending task to disappear from the dashboard. The "Active" and "Done" counters are incremented or decremented according to the action performed.
	
  • You can drag the pending card is draggable to place it wherever you want in the Dashboard area.

### Technologies and libraries used:

  This application uses react and take advantage of stateful components keep track of the data and performe the required updates on it.

  This app uses the following libraries for this purposes:

    - fortawesome: display icons from broad icons library
    - bootstrap: nice library for add spacing to the components easily and display well styled Modal
    - formik: keep track of values/errors/visited fields, orchestrating validation, and handling submission
    - lodash: basic utils as capitalize words
    - moment: used for creating, parsing, formatting and compare dates
    - react-draggable: library to improve drag and drop user experience compared to using useState to update css properties by x,y - variables in absolute css position
    - yup: form inputs validation through built-in methods 


### Deployment

This app has been deployed in githubpages on https://elenahongo.github.io/myPendings/

Deployments are triggered using this command:
### `npm run deploy`
