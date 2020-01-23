// TODO use response to populate html page
// TODO make html page into pdf using node package provided

// dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const genHTML = require("./generateHTML");
const pdfConverter = require("electron-html-to");

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
inquirer.prompt(questions).then((response) => {
  console.log(response);

  const data = {
    username: response.username,
    color: response.color
  }
  getGithubInfo(data.username);
});

function getGithubInfo(user) {
  axios.get("https://api.github.com/users/" + user).then((response) => {
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
