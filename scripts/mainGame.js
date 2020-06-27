

let player1 = true;
let player2 = false;
let gameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

function draw(box){
    let boxSelect = document.getElementById(box);
    if (boxSelect.innerHTML.length > 0){
        console.log("Move already played");
    }
    else if (player1){
        boxSelect.innerHTML = "X";
        gamePlay(box);
        win();
        player1 = false;
        player2 = true;
        
    }else if(player2){
        boxSelect.innerHTML = "O";
        gamePlay(box);
        win();
        player1 = true;
        player2 = false;
    }
    
}


function gamePlay(boxId){
    if (boxId == "box1"){
        player1 ? gameBoard[0][0] = 1 : gameBoard[0][0] = 0;
    }else if (boxId == "box2"){
        player1 ? gameBoard[0][1] = 1 : gameBoard[0][1] = 0;
    }else if (boxId == "box3"){
        player1 ? gameBoard[0][2] = 1 : gameBoard[0][2] = 0;
    }else if (boxId == "box4"){
        player1 ? gameBoard[1][0] = 1 : gameBoard[1][0] = 0;
    }else if (boxId == "box5"){
        player1 ? gameBoard[1][1] = 1 : gameBoard[1][1] = 0;
    }else if (boxId == "box6"){
        player1 ? gameBoard[1][2] = 1 : gameBoard[1][2] = 0;
    }else if (boxId == "box7"){
        player1 ? gameBoard[2][0] = 1 : gameBoard[2][0] = 0;
    }else if (boxId == "box8"){
        player1 ? gameBoard[2][1] = 1 : gameBoard[2][1] = 0;
    }else if (boxId == "box9"){
        player1 ? gameBoard[2][2] = 1 : gameBoard[2][2] = 0;
    }
}

function win(){
    //Horizontal
    for (let i = 0; i<3;i++){
        if (gameBoard[i][0] && gameBoard[i][1] && gameBoard[i][2]){
            clearBoard();
            //console.log("win");
        }else if ((gameBoard[i][0] == 0) && (gameBoard[i][1] == 0) && (gameBoard[i][2] == 0)){
            clearBoard();
            console.log("win2");
        }else if (gameBoard[0][i] && gameBoard[1][i] && gameBoard[2][i]){
            clearBoard();
            //console.log("win");
        }else if ((gameBoard[0][i] == 0) && (gameBoard[1][i] == 0) && (gameBoard[2][i] == 0)){
            clearBoard();
            console.log("win2");
        }
    }

    //Diagonals
    if (gameBoard[0][0] && gameBoard[1][1] && gameBoard[2][2]){
        clearBoard();
        //console.log("win");
    }else if ((gameBoard[0][0] == 0) && (gameBoard[1][1] == 0) && (gameBoard[2][2] == 0)){
        clearBoard();
        console.log("win2");
    }else if (gameBoard[0][2] && gameBoard[1][1] && gameBoard[2][0]){
        clearBoard();
        //console.log("win");
    }else if ((gameBoard[0][2] == 0) && (gameBoard[1][1] == 0) && (gameBoard[2][0] == 0)){
        clearBoard();
        console.log("win2");
    }
}

function clearBoard(){
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("box3").innerHTML = "";
    document.getElementById("box4").innerHTML = "";
    document.getElementById("box5").innerHTML = "";
    document.getElementById("box6").innerHTML = "";
    document.getElementById("box7").innerHTML = "";
    document.getElementById("box8").innerHTML = "";
    document.getElementById("box9").innerHTML = "";
}