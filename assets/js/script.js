const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

//Items array

const items = [
    {name:"bell",image:"bell.jpg" },
    {name:"decoration",image:"decoration.jpg" },
    {name:"gingerbread",image:"gingerbread.jpg" },
    {name:"present",image:"present.jpg" },
    {name:"presentsanta",image:"presentsanta.jpg" },
    {name:"reindeer",image:"reindeer.jpg" },
    {name:"santa",image:"santa.jpg" },
    {name:"santasheigh",image:"santasleigh.jpg" },
    {name:"snowman",image:"snowman.jpg" },
    {name:"tree",image:"tree.jpg" },
    {name:"xmaself",image:"xmaself.jpg" },
    {name:"penguim",image:"penguim.jpg" },
];

//Initial time
let seconds = 0,
 minutes = 0;
//Initial moves and win count
let movesCount = 0,
 winCount = 0;

//For timer
const timeGenerator = () => {
    seconds += 1;
    //minutes logic
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }

    //Format time before displaying
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutess}` : minutes;
    timeValue.innerHTML =`<span>Time:</span>${minutesValue}:${secondsValue}`;
};

//For calculatin moves
const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

//Pick ramdom objects from the item array
const generateRandom = (size = 4) => {
    //Temporary array
    let tempArray = [...items];
    //Initializes cardValue array
    let cardValues = [];
    //size should be double (4x4 matrix)/2 since pairs of objects would exist
    size = (size*size) / 2;
    //Random object selection
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.lengh);
        cardValues.push(tempArray[randomIndex]);
        //once selected remove the object from the temp array
        tempArray.splice(randomIndex, 1);
    }
    return cardValues;
};



