## Speed Dating App

### Some things to know
- This doesn't run considering about 1/3 of it is a rough outline, because of this and timing, there is no styling. If I were to style it I would use sass or Bootstrap (more familiar with sass but CorpAxe uses Bootstrap so i'd do my best to use it).

- This project is about halfway close to being done, there are some missing parts that are key to making it run but requires a lot of overhead and so for this challenge I've chosen to leave them out. The main thing that is missing is routing functionality. If I was building this application in it's entirety, I would use React Router to alllow dynamic display changes following each path that a user could take.

To make up for the lack of routing and display I will outine the flow of the application below:

The first screen will be a landing page that will ask the user if they are a new or returning participant, there will also be a host option in the top-right corner of the page to allow admins access to the admin UI.

Following the NEW participant path: 
- After clicking "new participant" there will be a register page that is a form that includes drop downs and input fields for each type of user information to be collected as well as a place to upload a picture. At the bottom will be a submit button.
- Once the information has been submitted, the email will be stored in local storage and the user's status will now be that of "signed in" and their data will be posted to the DB.
- The submit button will take the user to the following page of which event they would like to attend, those still available will highlight green and those unavailable (event at capacity) will highlight red with a tag that says "event full"
- After selection of an available event, the participant's table in the DB will be updated with the relation of the event chosen and they will be taken to the page to choose their top ten. The user can opt out of choosing their top ten until a later date (but before the preferences deadline), and will be reminded of the deadline date/time.
- The top ten page will feature the filter bar that includes several filters in the form of drop downs, sliding-scales, and highlighted buttons. Below the bar will be a list of attendees for the user's selected event and the option to add them to their top ten. There may be a side-bar to display the current chosen profiles.
- Once the top-ten have been chosen, there will be some functionality to signal to the user they can no longer select more participants, they must remove some to add others. They may also choose less than ten if desired. There will be a submit button at the bottom of the page to submit the preferences of the user using an ajax call to add the preferences to the preferences table in the DB.
- The next page will be a "thank you for completing..." page of sorts with the option to choose another event to attend and the selection process starts over.

Following the RETURNING participant path: 
- After clicking "returning participant" there will be a page that displays the user's profile (option to change information may be included). There will be a link to the upcoming speed-dating events.
- Clicking the events link will take them to the events list that will have a user flag to not display the "create schedule" button that admins will see (making the simple event display as dynamic as possible, more additional features to admin might make this obsolete in the future).
- From this point on the process of choosing an event and the top-ten preferences is the same as a new participant (above).

Following the Admin path:
- Clicking the admin button in the corner will take the user to the sign in page that submits the credentials to a route the authenticates admin credentials rather than user credentials.
- After being authenticated, the admin is taken to an event management page that shows the list of events with those that are ready to have schedules created highlighted in green with a "create schedule" button that will assumably run all the necessary data through an algorithm to create a schedule for the event. 
- There is the option to update the information of events in a link in the corner of the page.

At the top of all the pages will be a navbar that includes the option to sign-out as well as the name of the person signed in. For participants they can also navigate to their profile and a page that hosts the events that they have registred for. 

If this were to be made to completion there would be an email service that sends out reminders of deadlines.

### Things to know looking through the code
- The Core folder is for reusable components
- The features folder is for each page a user/admin might encounter (organized based on domain with containers and components that relate to each specific page)
