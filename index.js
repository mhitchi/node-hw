// dependencies
const inquirer = require("inquirer");
const axios = require("axios");

// get user input: github username, color choice from list
// use axios package to access GitHub api for username
// use response to populate html page
// make html page into pdf using node package provided


const questions = [
  {
    // which profile
    type: "input",
    message: "Enter a GitHub username.",
    name: "username"
  },
  {
    // which color
    type: "list",
    message: "Pick a color.",
    name: "color",
    choices: [
      "blue",
      "red",
      "green",
      "pink"
    ]
  }
];

// use inquirer to prompt questions
inquirer.prompt(questions).then(function(response) {
  console.log(response);
});

// function writeToFile(fileName, data) {
//   // * Profile image
//   // * User name
//   // * Links to the following:
//   //   * User location via Google Maps
//   //   * User GitHub profile
//   //   * User blog
//   // * User bio
//   // * Number of public repositories
//   // * Number of followers
//   // * Number of GitHub stars
//   // * Number of users following
 
// }

// function init() {

// init();
