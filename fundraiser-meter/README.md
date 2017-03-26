# Fundraiser Meter Component

## Local Setup

1. Download the fundraiser-meter directory.
2. Navigate to the route of that directory in terminal.
3. run `npm i` and `gulp`.
4. visit `http://localhost:7000/` in chrome.

## Stack

### Front-End

HTML, SCSS, JavaScript, Angular 1.

- HTML, CSS and JavaScript were prescribed.
- I initially planned to use jQuery however later in the project I decided Angular's AJAX implementation and two-way data-binding would be useful and worth the added bloat and setup time. React was also a consideration however my experience level was too low.
- I initially intended to use the Skelton.css framework to allow a more responsive component however I never implemented it.
- I initially thought I wouldn't need to use a css preprocessor however design decisions later in the build made it necessary.

### Back-End

Node.js, Express, Mongoose, MongoDB.

- I wanted my component to be state persistent and therefore created a simple web API using node.js, express.js and a MongoDB database for my front-end to communicate with. These were selected as it had been some time since I created a web API with those technologies.

### Development Environment

gulp, git, GitHub.

- Due to the scale of the project I assumed one working branch (master) would be sufficient however when I made some major design changes halfway through development I resorted to using some feature branches.
- Although I have little experience with gulp I knew I could used a previous gulp setup to manage my bower components and JS and SCSS injection.

## Process

1. Decides on MVP features via a more fleshed out wireframe.
2. Created express web server to serve static files.
3. Built wireframe in HTML and CSS.
4. Created backend API and database.
5. Created front-end JS to make API requests and update UI.
6. Adopted a new design direction.
7. Adapted the component to these designs in HTML, SCSS and JS.

### 1. Wireframes

- I began by drawing out several designs and ways of displaying progress. I thought that a circle representation would be the most fund to play with and implementAlthough.
- I was not particularly happy with any of the designs I was keen to get to an MVP relatively quickly so picked what I thought was the best of the bunch:


- the other sketches can be found in dev/wireframes.
- at this point MVP features were: title, one outer circle, one inner circle. Inside inner circle current amount donated. three circular buttons below with the three mounts. target always set to £100. animate to current amount on page load and working buttons.

### 2. Express Server (Static)

- I was a bit rusty with the setup of a basic express server however it quickly came back to me. At this point the server could serve the index.html file and respond to subsequent requests from the browser for CSS and JS files.

### 3. Wireframes in HTML and CSS

- I decided to try the BEM class naming convention as from previous projects I appreciate the need for a convention / order.
- I encountered a couple of blockers with regards to centring absolute positioning divs however resolved them with a few google searches.

### 4. Express API

- first create proper file structure  to make code easier to reason about
- creating fund API, first get (show) and then put (update)
- seeded data and used insomnia to test API
- beginning to think I will angular, 2 way data binding becoming more attractive as are angular's AJAX/factory capabilities

## Angular Front-end

- have decided to map a very simple angular front end to take advantage of two way data-binding and each AJAX request functionality.
- looking back over angular setup and things feel a little alien, still think it will be worth the work. Will use full file structure to keep code organised.
- will also introduce bower and gulp.
- I do not want to write my own gulp file, nor would I really know how, however I was given one by the course which I can reuse. Will also copy from previous package json.
- Although the above is overkill for this project I do not feel familiar enough with gulp and bower components to write my own.
- achieved MVP with dummy data and in angular with one controller. Code isn't great though, will break down into smaller generic functions.
- MVP with reset button and persistent data complete.

## More detailed designs

- don't actually like the design I currently have and have decided to try and make a radial progress bar.
- created a pintrest bboard to gather inspiration
- I have found this guide https://medium.com/@andsens/radial-progress-indicator-using-css-a917b80c43f9#.quehqems8 which I will follow to learn whats required and then make it my own / turn it into something like this https://techcrunch.com/2014/04/17/watch-out-moves-and-human-now-runkeeper-releases-a-movement-app/?ncid=rss

## Implementing designs

- started a new branch to house the rework
- involves using less, could be tricky
- npm installed less can use command line functions to convert to css. currently doing that, not sure how to incorporate into gulp just yet.
- clip css property is pretty weird
- after a long time got something which resembles a circular progress bar. Also understand how it works which is nice.
- progress bar working with percentage display. Will now refactor less and try to recreate in sass.
- radial progress bar into scss
- html and scss integrated into fundraiser meter component
- all old circle code removed
- surprised at how much code that removed in controller.
- next need to adjust and style to make it my own.