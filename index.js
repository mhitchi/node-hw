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

  var data = {
    username: response.username,
    color: response.color
  }
  getGithubInfo(data.username);
});

function getGithubInfo(user) {
  axios.get("https://api.github.com/users/" + user).then(function(response) {
    //image
    console.log(response.data.avatar_url);
    //username
    console.log(user);
    //link to location via google maps
    console.log(response.data.location);
    //link to github profile
    console.log(response.data.html_url);
    //link to blog
    console.log(response.data.blog);
    //bio
    console.log(response.data.bio);
    //number of repos
    console.log(response.data.public_repos);
    //number of followers
    console.log(response.data.followers);
    //number of Github stars
    //TODO returning undefined
    console.log(response.data.starred);
    //number following
    console.log(response.data.following);
  }).catch(function(err) {
    console.log(err);
  });
};

// function writeToFile(fileName, data) {

 
// }

// function init() {

// init();
