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
    {name:"bell",image:"bell.jpg" }
    {name:"decoration",image:"decoration.jpg" }
    {name:"gingerbread",image:"gingerbread.jpg" }
    {name:"present",image:"present.jpg" }
    {name:"presentsanta",image:"presentsanta.jpg" }
    {name:"reindeer",image:"reindeer.jpg" }
    {name:"santa",image:"santa.jpg" }
    {name:"santasheigh",image:"santasleigh.jpg" }
    {name:"snowman",image:"snowman.jpg" }
    {name:"tree",image:"tree.jpg" }
    {name:"xmaself",image:"xmaself.jpg" }
    {name:"penguim",image:"penguim.jpg" }
]
