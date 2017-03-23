# Fund-raiser component

## Decisions

### Stack

- first step was to decide which technologies to use.
- prescribed tech was HTML, CSS and JavaScript but which libraries should I use or do I want to use.
- I decided early on that I wanted the app to be state persistant, to me this means I want to make a simple API linked to a simple database. This will be done locally, I will not deploy the app to heroku.
- I recognise that the component will include state (data which changes) and therefore would be nice to a front-end frame work, like angular and it's two way data binding, where the UI / view updates automatically when the underlying data changes.
- Have just started using react to build a simple scoreboard. Although this grants me knowledge of how react automatically re-renders parts of the DOM when state changes I have yet to cover where/how more complex logic and API requests can be integrated.
- I have more experience with angular however, as I do not intend to make many requests and the app is small and simple I feel angular would be over kill.
- A very basic vanilla javascript and jQuery front end wouldn't have any bloat, setup time would be minimal and I don't think I would run into scaling issues or code organisation issues as the app is so small - or at least I hope.
- Although it may not be required I think I will use a CSS framework for a grid system, most probably skeleton css as it seems the most light weight.
- I will also use SCSS to help organise my CSS although I doubt I will need more than one document. This will probably require the use of a task runner, I will use Gulp if so.
- With regards to the back-end API, it has been a little while since I have made a Node.js and Express.js web server and API linked to mongo Database and would like to use those technologies again so will do so. Again, the scale of the app means no real consideration is needed between the two API techniques I am familiar with (Ruby on Rails and SQL Vs Express and Mongo.

### Process and focus

1. decide on MVP features via a more fleshed out wire frame making decisions on mobile first or not etc.
2. create express webserver to serve static files.
3. build wireframes in HTML and CSS.
4. create backend API and database.
5. code JS document to make requests to API via AJAX and make UI work.
6. come up with some more detailed designs, in balsamiq or on paper.
7. style widget to these designs.
8. create animations.

## Wireframes

- mobile first, why not. Will be using skeleton so responsive to this level shouldn't be too tricky.
- lots of different ideas, none of them perfect - decided with circle, although not entirely sure where to show metrics and probably not at clear as a conventional progress bar I thought it would be fun to play around with it.
- MVP features: title, one outer circle, one inner circle. Inside inner circle current amount donated. three circular buttons below with the three mounts. target always set to £100. animate to current amount on page load and working buttons.

## Express server (Static)

- done, bit of a struggle to remember even the basics, too much time spent in word!!!

## Wireframes in HTML and CSS

- decided to use BEM class naming convention, haven't tried before and appreciate the need for a convention / order.
- BLOCKER: make div width proportional to height?
- decided to use strict height and width for parent container, will revisit in time
- BLOCKER: centre absolutely positioned divs? https://www.smashingmagazine.com/2013/08/absolute-horizontal-vertical-centering-css/

## Express API

- first create proper file structure  to make code easier to reason about
- creating fund API, first get (show) and then put (update)