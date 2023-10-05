const gameContainer = document.getElementById("game");
// const cards = document.querySelectorAll("card");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    //Tyler's Addition
    newDiv.classList.add("card");

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
}

// when the DOM loads
createDivsForColors(shuffledColors);

//Tyler's Additions
let flipUp = 0;
let matchArr = [];

function flip(e) {
  if (e.target.tagName === "DIV") {
    if (e.target.classList.contains("red")) {
      if (e.target.classList.contains("round")) {
        alert("Please Select a Different Card");
      } else if (e.target.classList.contains("matched")) {
        alert("Please Select a Card That Has NOT Been Matched");
      } else {
        flipUp++;
        e.target.style.backgroundColor = "red";
        e.target.classList.add("round");
        matchArr.push("red");
      }
    } else if (e.target.classList.contains("orange")) {
      if (e.target.classList.contains("round")) {
        alert("Please Select a Different Card");
      } else if (e.target.classList.contains("matched")) {
        alert("Please Select a Card That Has NOT Been Matched");
      } else {
        flipUp++;
        e.target.style.backgroundColor = "orange";
        e.target.classList.add("round");
        matchArr.push("orange");
      }
    } else if (e.target.classList.contains("green")) {
      if (e.target.classList.contains("round")) {
        alert("Please Select a Different Card");
      } else if (e.target.classList.contains("matched")) {
        alert("Please Select a Card That Has NOT Been Matched");
      } else {
        flipUp++;
        e.target.style.backgroundColor = "green";
        e.target.classList.add("round");
        matchArr.push("green");
      }
    } else if (e.target.classList.contains("blue")) {
      if (e.target.classList.contains("round")) {
        alert("Please Select a Different Card");
      } else if (e.target.classList.contains("matched")) {
        alert("Please Select a Card That Has NOT Been Matched");
      } else {
        flipUp++;
        e.target.style.backgroundColor = "blue";
        e.target.classList.add("round");
        matchArr.push("blue");
      }
    } else if (e.target.classList.contains("purple")) {
      if (e.target.classList.contains("round")) {
        alert("Please Select a Different Card");
      } else if (e.target.classList.contains("matched")) {
        alert("Please Select a Card That Has NOT Been Matched");
      } else {
        flipUp++;
        e.target.style.backgroundColor = "purple";
        e.target.classList.add("round");
        matchArr.push("purple");
      }
    }
  }

  const cards = document.querySelectorAll("div.card");
  if (flipUp === 2) {
    gameContainer.removeEventListener("click", flip);
    if (matchArr[0] === matchArr[1]) {
      matchArr.splice(0, 2);
      for (let card of cards) {
        if (card.classList.contains("round")) {
          card.classList.remove("round");
          card.classList.add("matched");
          flipUp = 0;
          gameContainer.addEventListener("click", flip);
        }
      }
    } else {
      setTimeout(function () {
        matchArr.splice(0, 2);
        for (let card of cards) {
          if (card.classList.contains("round")) {
            card.classList.remove("round");
            card.removeAttribute("style");
            flipUp = 0;
            gameContainer.addEventListener("click", flip);
          }
        }
      }, 1000);
    }
  }

  let gameOver = 0;
  for (let card of cards) {
    if (card.classList.contains("matched")) {
      gameOver++;
    }
  }
  if (gameOver === 10) {
    alert("YOU WIN! Refresh the page to play again.");
    gameContainer.removeEventListener("click", flip);
  }
}

gameContainer.addEventListener("click", flip);
