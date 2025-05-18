/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit",
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender",
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place",
];

function chooseRandomGenre() {
  // Deliverable 1: Your code here 👇
  // creating a variable to link randomNumber to getRandomNumber from the provided.js
  const randomNumber = getRandomNumber(0, 4);
  // creating conditionals when user inputs the randomNumber variable
  if (randomNumber === 0) {
    return "drama";
  } else if (randomNumber === 1) {
    return "fantasy";
  } else {
    return "comedy";
  }
}

// displays random genre
function displayRandomShow(genre) {
  // Deliverable 2: Your code here 👇
  // if the user chooses Random, then it will select a random number from the array
  if (genre === "random") {
    genre = chooseRandomGenre();
  }
  const randomIndex = getRandomNumber(0, 4);
  // this if conditional will let users select Drama after selecting random, and it will randomly choose between drama shows.
  if (genre === "drama") {
    displayShow(dramaShows[randomIndex]);
    // the same goes for fantasy where if they select fantasy after the random button
  } else if (genre === "fantasy") {
    displayShow(fantasyShows[randomIndex]);
    // the displayShow displays the show's picture on the main screen by using the genreShows variable and picking from the randomIndex
  } else {
    displayShow(comedyShows[randomIndex]);
  }
}

// Happy coding!
