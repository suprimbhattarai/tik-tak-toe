console.log("Meet the Game 'tits tats toe'")
var gameOver = new Audio("gmover.mp3")
var music = new Audio("wwe-bell.mp3")
var turnAudio = new Audio("erro.mp3")
var again = new Audio("again.mp3")
var turn = 'X';
let isgameOver = false;


// Function to change the turn 
const changeTurn = () => {
    return turn === "X"?"0":"X"
}

// Function to check who won 
const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxText")
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.won').innerText = boxtexts[e[0]].innerText + " Won";
            isgameOver = true
            document.querySelector(".gif").getElementsByTagName('img')[0].style.width = "200px";
        }
    });
}

// Function for game algorithms 
let boxes = document.getElementsByClassName("box");
// console.log(boxes)
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText")
    element.addEventListener('click',()=>{
        if (boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            turnAudio.play();
            document.getElementsByClassName("won")[0].innerText = `Its ${turn} Turn`
            checkWin();
        }
    })
});

// Play Again Button 
document.getElementById("btn").addEventListener("click",()=>{
    let boxText = document.querySelectorAll(".boxText")
    Array.from(boxText).forEach(e => {
        e.innerText = "";
        again.play();
        turn = "X";
        isgameOver = false;
        document.getElementsByClassName("won")[0].innerText = `Its ${turn} Turn`
        document.querySelector(".gif").getElementsByTagName('img')[0].style.width = "0px";
    });
})

