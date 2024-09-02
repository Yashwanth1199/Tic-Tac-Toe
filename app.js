//Accessing all boxes in a variable
let boxes = document.querySelectorAll(".box");
//Accessing the reset button
let resetBtn = document.querySelector(".resetBtn");
//Accessing the message to display
let msg=document.querySelector("#msg");
//Accessing the message container to display the winner and other options
let msgCon=document.querySelector(".msgContainer");
//Boxes and restart container
let mainCon=document.querySelector(".container");
//New Game
let newGame=document.querySelector("#newGame");
let turnX = true; //if true player0's turn else playerX's turn
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
newGame.addEventListener("click", () =>{
    mainCon.classList.remove("hide");
    resetBtn.classList.remove("hide");
    msgCon.classList.add("hide");
    enableBoxes();
})
const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        }
        else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        console.log("box was clicked!");
        checkWinner();
    })
})
const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const winnerIs=(winner)=>{
    msg.innerText=`Congratulations ${winner}, you are the winner`;
    mainCon.classList.add("hide");
    resetBtn.classList.add("hide");
    msgCon.classList.remove("hide");
}
const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val !="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val=== pos3Val){
                disableBoxes();
                winnerIs(pos1Val);
                console.log("Winner is ",pos2Val);
            }
        }
    }
}
