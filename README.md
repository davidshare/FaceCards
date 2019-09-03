# FaceCards
A simple react app displaying faces, names, and emails from cards.

## Requirements
You will need the following software to be able to run this app successfully

### Node
[Node](http://nodejs.org/)

### Yarn
[Yarn](https://yarnpkg.com/lang/en/)

## Installation

    $ git clone https://github.com/davidshare/FaceCards.git
    $ cd FaceCards
    $ yarn install

## Run the App
You can run the app in development or production mode

### Development mode
	yarn run start:dev

### Production mode
	yarn start

## Deploy the App to GH pages
*	In the package.json file change the homepage declaration from https://davidshare.github.io/FaceCards to https://github_username.github.io/FaceCards where github_username refers to your github username

		$ yarn run deploy
		$ git add .
		$ git commit -m"changed homepage in package.json"
		$ git push


## Languages & tools
- HTML
- CSS
- Javascript
- React
- Webpack
- Random User API: https://randomuser.me/api/?results=20

## Inspiration
 [Andrei Neagoie - Complete React Developer in 2019 (w/ Redux, Hooks, GraphQL)](https://www.udemy.com/complete-react-developer-zero-to-mastery/)
