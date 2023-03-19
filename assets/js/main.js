console.log("läuft");

// Was brauchen wir? 
// Input der Radiobuttons
// Input der Userwahl
// Output rounds
// Output Result
// Output Texte

// radio buttons checked
// eine funktion für userwahl
// eine funktion für computer- math.random
// funktion restart


// Inputs vom HTML ins JS
const radioButtons = document.querySelector('input[name="round"]');
const usersChoiceBtn = document.querySelector('input[type="button"]')


// Outputs ins HTML
const showRounds = document.getElementById("showRounds")
const resultNum = document.getElementById("result")
const resultText = document.getElementById("output_text")


// Große Funktion: 

let playGame = (getComsChoice, getUsersChoice) => {
    if (getComsChoice === getUsersChoice) {
        return console.log("Unentschieden");
     } else if (getComsChoice === 1 && getUsersChoice === 3) {
        return console.log("User wins");
     } else if (getComsChoice === 2 && getUsersChoice === 1) {
        return console.log("User wins");
     } else if (getComsChoice === 3 && getUsersChoice === 2) {
        return console.log("User wins");
     } else {
        return 
     }







    

// Funktion: Was der Computer macht

    const comsChoice = () => {
        const randomNumber = Math.floor (Math.random() * 3)
        if (randomNumber === 0) {
          return 'Computer takes rock';
        } else if (randomNumber === 1) {
          return 'Computer takes paper';
        } else { (randomNumber )
          return 'Computer takes scissors';
        }
      };
      console.log (comsChoice());

      
// Funktion: Was der User macht

const usersChoice = () => {
    let choiceOfUser;
    if (choiceOfUser === 0) {
      return 'User takes rock';
    } else if (choiceOfUser === 1) {
      return 'User takes paper';
    } else { (choiceOfUser )
      return 'User takes scissors';
    }
  };
  console.log (usersChoice());



// Funktion: zum Auswählen der Radiobuttons
let playRounds = "";
for (let i = 0; i < radioButtons.length; i++)
    if (radioButtons[i].checked) {
        playRounds = radioButtons[i].value;
        return playRounds

    }
// console.log(playRounds);
// showRounds.innerHTML += `<div> ${playRounds}`;


}










