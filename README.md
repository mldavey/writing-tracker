# Writing Tracker App

This is a basic AngularJS app meant for time tracking different writing projects.  Requires a free Google Firebase account for saving data.


## Requirements

* Node.js/npm (download from: https://nodejs.org/en/download/)
* gulp


## Installation

* Download/clone this project from GitHub.
* Create/log in to your Google Firebase account if not yet created by going to https://console.firebase.google.com.
* Create a new Firebase project (such as 'writing-tracker-app').
* Once the project is created in Firebase, go to the "Authentication" tab and choose "Sign-In Method".  Enable Google login.  (Authentication is required for this app.)
* Go to "Web Setup" at the upper right corner and copy/paste your Firebase initialization code into the head of the app/index.html page (where it says 	`<!-- Copy/Paste Your Firebase Initialization Code Here -->`).
* Use your favorite command line program to run `npm install` in the same directory where this project is installed.  This should install any other project dependencies.
* Run `gulp` to launch the webserver and begin entering data.


## To-Dos

* Implement success/error handling to give the user an update once entries are added to the database.
* Implement a 'projects' view allowing the user to add new projects to the list.  Update the dropdown in the 'add' view to list these projects from the database.
* Implement date/time pickers for the 'add' view to ensure dates/times are always formatted the same way.
* Add better error handling for required fields in AngularJS.
* Implement a 'stats' view allowing the user to see the hours put in over the last day/week/month/year or per project.  Longer-term, allow the user to export these stats to a CSV.
* Break down the 'entries' database info into separate databases for the 'Accomplishments' and 'Notes' field per Google Firebase documentation best practices (https://firebase.google.com/docs/database/web/structure-data)