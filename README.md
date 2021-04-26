# starwarsapp
Developer Aptitude Test For Flighthub

Client-Side Application:

Theme: 
Trying to stay true to the star wars theme, I have implement a bit of a retro interface while adding some modern-ish styles.  The goal of this design is to replicate an application that would exist in the Star Wars fictional universe and be used by “Rebels” to browse through lists of different assets.  The UX design assumes that the user would be a member of the Rebel Force.

Interface:
The user can choose between 4 options on the navigation bar: People, Planets, Starships and Manual Search.  The first 3 options use a single component (display-list) to render a view that includes 2 section.  On the left hand side, the user will see a list of results which he can click. The right side will display more details about the item selected by the user on the left hand side. 

The Manual Search component will allow the user to manually search any of the 3 categories.  A radio button selection lets the user select the category.  The input field makes use of operators from RxJS to automatically trigger the search function and update results when a keyboard entry is detected (a 1 second delay is applied and a minimum of 2 characters are needed to trigger the search). 

Components:
In an effort to streamline the application flow and make the code as intuitive as possible.  And given that the data structures of the different API results allow for this, instead of building a component for each category, I decided to implement an intuitive way of manipulating the data so that a single component can interpret the different sets of data. 

Framework:
Built using Angular 8, the front-end application makes use of multiple angular directives and operators to display a GUI that allows users to navigate through different components to view data that gets pulled from the back-end server. 

Future versions:
The next version of this app could include some changes in the CSS to allow for responsive styles and provide better compatibility with other devices/screen size. 

Server-Side Application:

The Back-End application acts as an API Proxy which gets data from swapi.  Built with PHP on the Laravel 7 Framework, it also caches the data from the original API for 15 minutes to optimize the application performance by reducing response time. 

Project Break Down:

A total of 18 hours have been allocated towards this project. 

Hours per application: 
14 hours have been allocated towards the realization of the Front-End part.
	-10 hours towards application logic and code
	-4 hours towards UX design and GUI. 
4 hours have been allocated towards the realization of the Back-End part. 

Thanks for reading!
I hope that you will enjoy this submission as much as I enjoyed making it.


Test Env Deployment:

Here are some instruction on how to run the app in a test environment. 

Back-End:
1. Run “conposer install” to install dependencies.
2. Run “php artisan serve” to deploy the test server.

Front-End:
1. Run “npm install” to install dependencies.
2. Run “ng serve” to deploy on the test server. 
