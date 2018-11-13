![Pokedex Screenshot](http://tinypic.com/r/359gzo2/9)


# Pokedex

This project is bootstrapped using [create-react-app](https://github.com/facebook/create-react-app)

## Technologies Used:

React & SASS

## How to begin

Inside project `root` directory run `npm install`. After all dependencies are installed run `npm start`. A new browser window should open.

If you have issues getting the application to work, download the CORS google chrome extension called [Allow-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)

## Project structure

### App.js

`App.js` fetches data from the Pokemon api. It is the only uncontrolled component and it manages all the state in the app.

### Api

This project was made possible by the PokeApi found [here](https://pokeapi.co/)
which is based on the popular TV show, Pokemon.

### Components

`Pokedex.js` is the main presentational component to display all the passed down props from App.js as well as create structure for the SCSS file.


## User Stories

User is able to:

-Search for a pokemon either by name or id (id's range from 1 to 802) without having to specify which one they would like to use

-Have input error handling to deal with an empty input box, as well as display an error if the pokemon is not found

-See a blinking light indicating that the pokedex is on and that they entered a valid pokemon

-See the results including the pokemon avatar as well as the pokemon information(name, type, height, weight, and id number)

-Toggle between pokemon using the left and right control pads

-Use the buttons above the green info box to toggle between avatar image. The blue displays the default front image and the orange displays the back image

-Press the on/off button on the left to turn off the blinking, pokemon image display and pokemon info display. When the user turns the Pokedex back on, they will see the same state as when they turned it off(same Pokemon they left off on)

-See press down animations when clicking the buttons
