# Fundraiser Meter Component

## Local Setup

1. Download the fundraiser-meter directory.
2. Navigate to the route of that directory in terminal.
3. run `npm i` and `gulp`.
4. visit `http://localhost:7000/` in chrome.

## Stack

### Front-End

HTML, SCSS, BEM class naming convention (partially), JavaScript and Angular 1.

- HTML, CSS and JavaScript were prescribed.
- I initially planned to use jQuery however later in the project I decided Angular's AJAX implementation and two-way data-binding would be useful and worth the added bloat and setup time. React was also a consideration however my experience level was too low.
- I initially intended to use the Skelton.css framework to allow a more responsive component however I never implemented it.
- I initially thought I wouldn't need to use a css preprocessor however design decisions later in the build made it necessary.
- From pst projects I recognised the need for a class naming convention and had heard good things about BEM and wanted to try it.

### Back-End

Node.js, Express, Mongoose, MongoDB.

- I wanted my component to be state persistent and therefore created a simple web API using node.js, express.js and a MongoDB database for my front-end to communicate with. These were selected as it had been some time since I created a web API with those technologies.

### Development

gulp, git, GitHub, insomnia.

- Due to the scale of the project I assumed one working branch (master) would be sufficient however when I made some major design changes halfway through development I resorted to using some feature branches.
- Although I have little experience with gulp I knew I could used a previous gulp setup to manage my bower components and JS and SCSS injection.

## Process

1. Fleshed out wireframe.
2. Defined MVP features.
3. Created express web server to serve static files.
4. Built wireframe in HTML and CSS.
5. Created backend API and database.
6. Created front-end JS to make API requests and update UI.
7. Adopted a new design direction.
8. Adapted the component to these designs in HTML, SCSS and JS.

### 1. Wireframes

- I began by drawing out several designs and ways of displaying progress. I thought that a circle representation would be the most fun to play with and implement.
- I was not particularly happy with any of the designs but I was keen to get to an MVP relatively quickly so picked what I thought was the best of the bunch:

![wireframe-1](https://cloud.githubusercontent.com/assets/20629455/24351452/962aa642-12dd-11e7-93c5-b57ddfaae1f3.jpg)
<img width="310" alt="screen shot 2017-03-27 at 11 08 30" src="https://cloud.githubusercontent.com/assets/20629455/24351489/ccb8e52a-12dd-11e7-8387-485dd0fb0228.png">

- The other sketches can be found in `dev/wireframes`.

### 2. MVP Features

- Title.
- One outer circle and one inner circle. 
- Amount donated inside inner circle. 
- Three circular buttons below with the three amounts which, when pressed, update UI and send request to API to update database. 
- Target amount always set to £100. 
- On page load make a request to the API and animate the circle to current amount.

### 3. Express Server (Static)

- Although I was a bit rusty with the setup of a basic express server it quickly came back to me. At this point the server could serve the index.html file and respond to subsequent requests from the browser for CSS and JS files.

### 4. Wireframes in HTML and CSS

- I encountered a couple of blockers with regards to centring absolute positioning divs however resolved them with a few google searches.

<img width="1388" alt="screen shot 2017-03-25 at 10 16 17" src="https://cloud.githubusercontent.com/assets/20629455/24351891/7333ae8e-12df-11e7-84f9-5984e2fb65a1.png">


### 5. Express API

- First I implemented a proper file structure to make my code easier to reason about. The file structure style was copied from previous projects completed on the WDI course.
- I then created the routes for the requests I would be making from my front-end (show and update get and put requests) and seeded some data to my database. Insomnia was then used to test the API.

![screen shot 2017-03-27 at 11 25 02](https://cloud.githubusercontent.com/assets/20629455/24352142/4c0147c6-12e0-11e7-9c39-ca320d2cedbc.png)
![screen shot 2017-03-27 at 11 25 55](https://cloud.githubusercontent.com/assets/20629455/24352143/4c05b20c-12e0-11e7-968d-1795e42a5ae4.png)

### 6. Angular Front-end

- Again I used the file structure and naming convention of a previous project.
- At this stage I introduced Bower and Gulp to my workflow. I didn't want to write my own gulp file, nor would did I really know how, so used one from a previous project. The gulp setup was over complex for this project however it was a low priority to remove the parts I was not using. 
- I also copied from a previous package.json file.
- MVP with working buttons and persistent data was achieved at this point.

### 7. More Detailed Designs

- At this stage I decided the design was not good enough and that I wanted to change it. After some research and further wireframes I decided on a radial progress bar.

![screen shot 2017-03-27 at 11 35 07](https://cloud.githubusercontent.com/assets/20629455/24352419/74714e94-12e1-11e7-9830-e7b1722312e5.png)

- After further research I found a SCSS only radial progress bar and tutorial ([here](https://medium.com/@andsens/radial-progress-indicator-using-css-a917b80c43f9#.quehqems8)). I decided on this tutorial as I was keen to learn more CSS animation and because the final product matched what I hoped to achieve and I hoped I would be able to make it my own.  

![screen shot 2017-03-27 at 11 37 43](https://cloud.githubusercontent.com/assets/20629455/24352514/d0e56322-12e1-11e7-924c-0fe6352ec0c2.png)


### 8. Implementing New Design

- Instead of simply copying and pasting the code from the finished product of the tutorial into my app I wanted to follow it step by step and code along in a new folder within this repository. Once I reached the end of the tutorial I hoped I'd understand the techniques enough to replace my current HTML and CSS, plug the new designs into my Angular app and API and also make it my own.
- The tutorial was mostly plain sailing however involved using the less preprocessor which I hadn't used before.
- The radial progress bar works through a combination of overlapping clipped masks, circles and css transitions:

![radial-progress-workings](https://cloud.githubusercontent.com/assets/20629455/24352811/e6fbe34c-12e2-11e7-80ef-44a442cdc0d8.jpg)

- Once I had finished the tutorial created a couple of new branches to maintain my previous work incase I required it later and converted the less code to SCSS.
- Surprisingly this new implementation removed lots of logic and code from my angular controller which was nice.
- Now working on making it mine and matching rest of component to radial progress bar.