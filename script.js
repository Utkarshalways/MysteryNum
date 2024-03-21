const form = document.querySelector("#Forname");
form.addEventListener('click', function (elem) {

    const name = document.querySelector("#name").value;
    console.log(name);

    const wel = document.querySelector(".wel");
    wel.innerHTML = `Welcome <span id="name">${name}</span>`;

})

//This is all for the main page

//all the collection
let submt = document.querySelector("#guess");
let userInput = document.querySelector("#num");
let resultpara = document.querySelector(".resultpara");
let prevguess = document.querySelector("#prevguess");
let guessrem = document.querySelector("#guessrem");
let loworhigh = document.querySelector(".loworhigh");
let playGame = true;

//creating elements
let p = document.createElement('p');
let previous = [];
let numofGuess = 10;

let RandomNum = () => {
    return parseInt(Math.random() * 100 + 1);
}
let RandomNumber = RandomNum();
console.log(RandomNumber)


if (playGame) {


    submt.addEventListener('click', function (e) {

        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        ValidateGuess(guess);

    })

}

function ValidateGuess(guess) {
    //
    if(isNaN(guess)){

        alert("Please Enter the valid Number");
    }

    else if (guess > 100) {
        alert("You can Guess only under 100");
    }
    else if (guess < 1) {
        alert("You can Guess only above 0");
    }
    else {
        previous.push(guess);
        if (numofGuess <= 0) {
            DisplayGuess(guess);
            Displaymessage(`Game Over. Random number was ${RandomNumber}`);
            EndGame();
        }
        else {
            DisplayGuess(guess);
            checkGuess(guess);
        }
        checkGuess(guess);

    }
}

function checkGuess(guess) {

    if (guess === RandomNumber) {
        Displaymessage(`You Guess it Right`);
        EndGame();
    }
    else if (guess > RandomNumber) {

        if ((guess - RandomNumber) < 10) {
            Displaymessage(`Number is Just Little High`);
        }
        else {
            Displaymessage(`Number is TOOO High`);
        }
    }
    else if (guess < RandomNumber) {

        if ((RandomNumber - guess) < 10) {
            Displaymessage(`Number is Just Little Low`);
        }
        else {
            Displaymessage(`Number is TOOO Low`);
        }
    }

}

function Displaymessage(message) {
    loworhigh.innerHTML = `${message}`;
}

function DisplayGuess(guess) {

    userInput.value = '';
    prevguess.innerHTML += `${guess}, `;
    numofGuess--;
    if(numofGuess >= 0){
        guessrem.innerHTML = `${numofGuess}`;
    }
    //
}

function EndGame() {
    userInput.value = '';
    userInput.setAttribute("disabled",'');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame">Start New Game</h2>`;
    resultpara.appendChild(p);
    playGame = false;
    NewGame();

}
function NewGame() {
   const newgamebutton =  document.querySelector("#newgame");
   newgamebutton.addEventListener('click', function(e){

        RandomNumber = RandomNum();
        previous = [];
        numofGuess = 10;
        prevguess.innerHTML = '';
        guessrem.innerHTML = `${numofGuess}`;
        userInput.removeAttribute('disabled','');
       resultpara.removeChild(p);


   })

}




