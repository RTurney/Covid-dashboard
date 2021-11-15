# Covid dashboard app

This is a Covid dashboard project to upskill in react as suggested by this website:
https://www.freecodecamp.org/news/8-reactjs-project-ideas-to-start-learning-by-doing/

This project uses the [Open disease data api](https://disease.sh/) to fetch and display global covid data.

[Leaflet](https://leafletjs.com/index.html) is used to display the map data.

This application is also deployed †o https://covid-datatracker-dashboard.herokuapp.com/ and can be run there.

---

## Contents

1. [Current state of app](#Current-state-on-main)
2. [Project plan](#Project-plan)
3. [Getting started](#Getting-started)
4. [Repo structure](#Repo-structure)
5. [Running the application](#Running-the-application)
6. [Deploying the application](#Deploying-the-application)
7. [Notes](#Notes)
8. [Contributors](#Contributors)

---

## Current state on main

Currently this application allows users to see:

- the total number of cases
- The total number of cases today
- Total number of deaths worldwide
- The total number of deaths today
- Key info on each continent, displayd on the map
- Key info on each country, displayed on the map
- Key info on each countries vaccination numbers, displated on map
- Graphs displaying global case, death, vaccination numbers

---

## Project plan

Here is the basic figma design of the application in it's end-state:

<img src='public/Covid-dashboard.png'>

The basic layout will be:

- A map with markers for each country
- A statistics board detailing the key statistics for each country
- A header/navbar for the Covid dashboard
- Graphs of global data for cases/deaths/vaccinations
- A modal detailing key statistics for a country when clicked on

Key steps:

1. Create react app
2. Fetch statistics from api
3. Display statistics to app
4. Display map to app
5. Link map to statistics so users can click map for stats
6. Add multiple statistics so users can switch between relevant statistics on map
7. Add graphs of current trends in cases/deaths/vaccinations

---

## Getting started

To install this app on your local machine run:

```
git clone git@github.com:RTurney/Covid-dashboard.git
```

Once installed, you will need to install the necessary dependencies by running:

```
cd Covid-dashboard
yarn install
```

Once the installation is finished, you are good to go!
Go to [running the application](#running-the-application) to learn more about using the application.

---

## Repo structure

- node_modules/
- public/
- src/
  - components/
    - GraphComponents/
    - MapComponents/
    - StatsComponents/
- .gitignore
- package.json
- README.md
- yarn.lock

### node_modules/

This is where all node modules are installed and stored.

### public/

A public folder for containing public files

### src/

- components/
  - GraphComponents/
    > Contains CaseGraph.js / DeathGraph.js / GraphBoard.js & VaccinesGraph.js components. GraphBoard.js is the main component holding CaseGraph, DeathGraph and VaccinesGraph. All 3 graph components display current totals from the last 10 days and are displayed using react-vis.
  - MapComponents/
    > Contains all components necessary for the Map such as ContinentCircles.js / CountryCircles.js / VaccineCircles.js components. These components work using the react-leaflet module to display co-ordinate based circles on the Map component. Circle area is based on cases/deaths/vaccination rates
  - StatsComponents/
    > Contains all components for the Stats board. The StatisticsBoard.js is the main component rendered in App.js and holds the StatsTotals, ContinentStats, CountryStats and VaccineStats.
- Display.js
  > Contains the ticker display component
- Display.css
  > CSS file for the Display component
- NavBar.js
  > Contains the Navbar component with the api fetch functions and buttons to switch between Country, continent or vaccine data.
- NavBar.css
  > CSS file for the Navbar component
- App.js
  > Contains the main code for running this application.
- App.test.js
  > Empty file for testing
- App.css
  > CSS for the App

---

## Running the application

To run this application locally run this command in your terminal:

```
yarn start
```

This should start the application server and this app will load within your default browser at [localhost:3000](http://localhost:3000)

You should now be able to access this application. The server automatically refreshes when any changes are saved to file.

This application can also be run from the online server at:
https://covid-datatracker-dashboard.herokuapp.com/

---

## Deploying the application

This application is currently deployed to Heroku at:
https://covid-datatracker-dashboard.herokuapp.com/

Deployment will only be made from the main branch.
No pipeline or has testing has been set up yet.

---

### Notes

This project is currently still in development
This project is now deployed to Heroku, but does not have a pipeline set up yet.

Branch structure:
Main branch will be used as the main deployment branch.
Dev will be used for creating new branches to add or further develop features

---

### Contributors

Any contributors to this application should add their name and contact details to this list below:

- Richard Turney
  - richard.turney@and.digital
