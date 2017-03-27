<img width="595" alt="screen shot 2017-03-27 at 12 28 56" src="https://cloud.githubusercontent.com/assets/20629455/24354324/313f6180-12e9-11e7-94dd-5edcb7914260.png">
<img width="86" alt="screen shot 2017-03-27 at 12 28 33" src="https://cloud.githubusercontent.com/assets/20629455/24354330/3602bcc6-12e9-11e7-8692-f2602a17d581.png">

___
<br>


# Fundraiser Meter Component

![screen shot 2017-03-27 at 11 50 01](https://cloud.githubusercontent.com/assets/20629455/24352968/914b9d88-12e3-11e7-9c15-83fb161b0c9a.png)

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
- From past projects I recognised the need for a class naming convention and had heard good things about BEM and wanted to try it.

### Back-End

Node.js, Express, Mongoose, MongoDB.

- I wanted my component to be state persistent and therefore created a simple web API using node.js, express.js and a MongoDB database for my front-end to communicate with. These were selected as it had been some time since I created a web API with those technologies.

### Development

gulp, git, GitHub, insomnia.

- Due to the scale of the project I assumed one working branch (master) would be sufficient however when I made some major design changes halfway through development I resorted to using some feature branches.
- Although I have little experience with gulp I knew I could used a previous gulp setup to manage my bower components and JS and CSS injection.

## Process

1. Fleshed out wireframe.
2. Defined MVP features.
3. Created express web server to serve static files.
4. Built wireframe in HTML and CSS.
5. Created backend API and database.
6. Created front-end JS to make API requests and update UI.
7. Adopted a new design direction.
8. Adapted the component to these designs in HTML, SCSS and JS.
9. Build on the new radial progress bar and make it my own.

### 1. Wireframes

I thought that a circle representation would be the most fun to play with and implement and began by drawing out several designs and ways of displaying progress (found [here](https://github.com/jackhkmatthews/bits-and-bobs/tree/master/fundraiser-meter/dev/wireframes)). I was not particularly happy with my designs but I was keen to get to an MVP relatively quickly so picked what I thought was the best of the bunch:

![screen shot 2017-03-27 at 12 07 29](https://cloud.githubusercontent.com/assets/20629455/24353551/fd285e7c-12e5-11e7-9458-c91b014f00ce.png)

### 2. MVP Features

- Title.
- One outer circle and one inner circle. 
- Amount donated inside inner circle. 
- Three circular buttons with the three amounts which, when pressed, update UI and send request to API to update database. 
- Target amount always set to £100. 
- On page load make a request to my API and animate the circle to current amount.

### 3. Express Server (Static)

Although I was a bit rusty with the setup of a basic express server it quickly came back to me. At this point the server could serve the index.html file and respond to subsequent requests from the browser for CSS and JS files.

### 4. Wireframes in HTML and CSS

I encountered a couple of blockers with regards to centring absolute positioned divs however resolved them with a few google searches.

<img width="1388" alt="screen shot 2017-03-25 at 10 16 17" src="https://cloud.githubusercontent.com/assets/20629455/24351891/7333ae8e-12df-11e7-84f9-5984e2fb65a1.png">


### 5. Express API

I implemented a proper file structure for my express.js web server to make my code easier to reason about, created 'show' and 'update' routes for the requests I would be making from my front-end and seeded some data to my database. Insomnia was then used to test the API.

![screen shot 2017-03-27 at 11 25 02](https://cloud.githubusercontent.com/assets/20629455/24352142/4c0147c6-12e0-11e7-9c39-ca320d2cedbc.png)
![screen shot 2017-03-27 at 11 25 55](https://cloud.githubusercontent.com/assets/20629455/24352143/4c05b20c-12e0-11e7-968d-1795e42a5ae4.png)

### 6. Angular Front-end

The Angular structure, naming convention and workflow (gulp, bower, package.json etc) was taken from a previous project of mine. Although it felt like overkill (especially the gulp setup) I thought it provided a quick way to make my code easier to read and maintain.

At this stage a fully functional MVP was achieved.

### 7. More Detailed Designs

Having achieved MVP I decided the design was not good enough and that I had time to change it.

To gain some fresh ideas I spent some time creating a pintrest board of circular and radial progress bars and decided the bottom left entry was most suitable.

![screen shot 2017-03-27 at 11 35 07](https://cloud.githubusercontent.com/assets/20629455/24352419/74714e94-12e1-11e7-9830-e7b1722312e5.png)

After further research I found a SCSS only radial progress bar and tutorial ([here](https://medium.com/@andsens/radial-progress-indicator-using-css-a917b80c43f9#.quehqems8) and screenshot below). I decided on this tutorial as I was keen to learn more CSS animation and because the final product matched what I hoped to achieve would be easy to edit and make my own.  

![screen shot 2017-03-27 at 11 37 43](https://cloud.githubusercontent.com/assets/20629455/24352514/d0e56322-12e1-11e7-924c-0fe6352ec0c2.png)


### 8. Implementing New Design

Instead of copying and pasting the code from the final JSFiddle of the tutorial into my app I wanted to follow it step by step to fully understand the techniques being used. I believed this would serve me well when I came to make it my own and implement it into my MEAN stack app.

The tutorial was mostly plain sailing however involved using the less preprocessor which I hadn't used before and a rather confusing combination of overlapping clipped masks, circles and css transitions:

![screen shot 2017-03-27 at 12 18 32](https://cloud.githubusercontent.com/assets/20629455/24353864/8beb3278-12e7-11e7-9dc8-42810899c099.png)

Once I had finished the tutorial in a new HTML, LESS and JS folder I created a couple of new branches to maintain my previous work incase I required it later, converted the less code to SCSS and worked on replacing the current circular front end progress diagram with this new radial design:

![screen shot 2017-03-27 at 12 21 21](https://cloud.githubusercontent.com/assets/20629455/24353946/f6bfd798-12e7-11e7-8154-d13a08da6816.png)

### 9. Making It My Own