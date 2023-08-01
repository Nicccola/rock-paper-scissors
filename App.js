let userScore = 0; 
let compScore = 0; 

const userScore_dom = document.getElementById('user-score');
const compScore_dom = document.getElementById('comp-score');
const scoreboard_dom = document.querySelector('.scoreboard');
const results_dom = document.querySelector('.results');

const rock_dom = document.getElementById('rock');
const paper_dom = document.getElementById('paper');
const scissors_dom = document.getElementById('scissors');




function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3); 
    return choices[random];
};
 


function win(userChoice, compChoice) {
    userScore ++; 
    userScore_dom.innerHTML = userScore; 
    compScore_dom.innerHTML = compScore;
    results_dom.innerHTML = userChoice.toUpperCase() + ' beats ' + compChoice.toUpperCase() + '. You win!';
    results_dom.classList.replace("results", "win-color");
    setTimeout(function() {results_dom.classList.replace("win-color", "results")}, 2500);
    document.getElementById(userChoice).classList.add("user-choice");
    document.getElementById(compChoice).classList.add("comp-choice");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("user-choice")}, 2500);
    setTimeout(function() {document.getElementById(compChoice).classList.remove("comp-choice")}, 2500);
};


function lose(userChoice, compChoice) {
    compScore ++; 
    compScore_dom.innerHTML = compScore;
    userScore_dom.innerHTML = userScore; 
    results_dom.innerHTML = userChoice.toUpperCase() + ' loses to ' + compChoice.toUpperCase() + '. Computer wins!'; 
    results_dom.classList.replace("results", "lose-color");
    setTimeout(function() {results_dom.classList.replace("lose-color", "results")}, 2500);
    document.getElementById(userChoice).classList.add("user-choice");
    document.getElementById(compChoice).classList.add("comp-choice");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("user-choice")}, 2500);
    setTimeout(function() {document.getElementById(compChoice).classList.remove("comp-choice")}, 2500);

};


function tie(userChoice, compChoice) {
    compScore_dom.innerHTML = compScore;
    userScore_dom.innerHTML = userScore;
    results_dom.innerHTML = 'It\'s a tie! You both chose ' + userChoice.toUpperCase() + '.';
    document.getElementById(compChoice).classList.add("tie");
    document.getElementById(userChoice).classList.add("tie");
    setTimeout(function() {document.getElementById(compChoice).classList.remove("tie")}, 2500);
    setTimeout(function() {document.getElementById(userChoice).classList.remove("tie")}, 2500);
};




function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
                win(userChoice, compChoice);
                break; 
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
                lose(userChoice, compChoice);
                break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
                tie(userChoice, compChoice);
                break; 
    }
};


function sound() {
    const audio = new Audio('./sounds/mixkit-game-click-1114.wav');
    audio.play(); 
};


function play() {
        rock_dom.addEventListener('click', function() {
            game('rock');
        });


        paper_dom.addEventListener('click', function() {
            game('paper');
        });


        scissors_dom.addEventListener('click', function() {
            game('scissors'); 
        });

 }; 



 play(); 


 