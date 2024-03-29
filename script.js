// Dom das classes nos botões para mudar de cor
const btnPlayer1 = document.querySelector('.btn__player1');
const btnPlayer2 = document.querySelector('.btn__player2');
const tableBox = document.querySelectorAll('.table__box');
const result = document.querySelector('.result');
const modalMsgPlayWin = document.querySelector('.modal__player-win');

const modalRestartGame = document.querySelector('.modal__restart-game');

//variáveis contadoras de jogadas de cada jogador
let timeCounterPlayer1 = 0;
let timeCounterPlayer2 = 0;
let currentPlayer1 = true;
let currentPlayer2 = false;
let numberOfMoves =0;
changeCurrentPlayer()//para iniciar com inicia com o jogador 1

//variáveis de cada posição do table box
const a1 = 0;
const a2 = 1;
const a3 = 2;
const b1 = 3;
const b2 = 4;
const b3 = 5;
const c1 = 6;
const c2 = 7;
const c3 = 8;


//função mudar o botão do player de cor ao ser apertado
function changeCurrentPlayer(){

    if(btnPlayer1 && currentPlayer1){
        btnPlayer2.classList.remove('active');
        btnPlayer1.classList.add('active');
        currentPlayer1=false;
        currentPlayer2=true;
    }
    else if(btnPlayer2 && currentPlayer2 ){
        btnPlayer1.classList.remove('active');
        btnPlayer2.classList.add('active');
        currentPlayer1=true;
        currentPlayer2=false;

    }
}


// função para escrever o x e controlar o nº de jogadas
function currentTableBox(element){
    
    if(!currentPlayer1 && timeCounterPlayer1<=timeCounterPlayer2 && element.innerText==''){
        writeX(element)
        verifyPlayWin();
        changeCurrentPlayer()

    }
    if(!currentPlayer2 && timeCounterPlayer2 < timeCounterPlayer1 && element.innerText==''){
        writeO(element);
        verifyPlayWin();
        changeCurrentPlayer()
    }
    
}

function verifyPlayWin(){
    tiedGame();
    verifyRow1();
    verifyRow2();
    verifyRow3();
    verifyColumn1();
    verifyColumn2();
    verifyColumn3();
    verifyLeftDiagonal();
    verifyRightDiagonal();
    openModalRestartGame();
    
}


function verifyRow1(){
//verificação linha 1
if(tableBox[a1].innerText =='X' && tableBox[a2].innerText =='X' && tableBox[a3].innerText =='X' ){
    msgPlay1Win();
    }
if(tableBox[a1].innerText =='O' && tableBox[a2].innerText =='O' && tableBox[a3].innerText =='O' ){
    msgPlay2Win();
    }
}
function verifyRow2(){
    //verificação linha 2
    if(tableBox[b1].innerText =='X' && tableBox[b2].innerText =='X' && tableBox[b3].innerText =='X' ){
    msgPlay1Win();
    }
    if(tableBox[b1].innerText =='O' && tableBox[b2].innerText =='O' && tableBox[b3].innerText =='O' ){
        msgPlay2Win();
        }    
}
function verifyRow3(){
    //verificação linha 3
    if(tableBox[c1].innerText =='X' && tableBox[c2].innerText =='X' && tableBox[c3].innerText =='X' ){
        msgPlay1Win();
        }
        if(tableBox[c1].innerText =='O' && tableBox[c2].innerText =='O' && tableBox[c3].innerText =='O' ){
            msgPlay2Win();
            }
}

function verifyColumn1(){
//verificação coluna 1
if(tableBox[a1].innerText =='X' && tableBox[b1].innerText =='X' && tableBox[c1].innerText =='X' ){
    msgPlay1Win();;
    }
    if(tableBox[a1].innerText =='O' && tableBox[b1].innerText =='O' && tableBox[c1].innerText =='O' ){
        msgPlay2Win();
        }
}
function verifyColumn2(){
//verificação coluna 2
if(tableBox[a2].innerText =='X' && tableBox[b2].innerText =='X' && tableBox[c2].innerText =='X' ){
    msgPlay1Win();
    }
    if(tableBox[a2].innerText =='O' && tableBox[b2].innerText =='O' && tableBox[c2].innerText =='O' ){
        msgPlay2Win();
        }
}
function verifyColumn3(){
//verificação coluna 3
if(tableBox[a3].innerText =='X' && tableBox[b3].innerText =='X' && tableBox[c3].innerText =='X' ){
    msgPlay1Win();
    }
    if(tableBox[a3].innerText =='O' && tableBox[b3].innerText =='O' && tableBox[c3].innerText =='O' ){
        msgPlay2Win();
        }
}

function verifyLeftDiagonal(){
//verificação Diagonal esquerda
if(tableBox[a1].innerText =='X' && tableBox[b2].innerText =='X' && tableBox[c3].innerText =='X' ){
    msgPlay1Win();
    }
    if(tableBox[a1].innerText =='O' && tableBox[b2].innerText =='O' && tableBox[c3].innerText =='O' ){
        msgPlay2Win();
        }
}
function verifyRightDiagonal(){
//verificação Diagonal direita
if(tableBox[a3].innerText =='X' && tableBox[b2].innerText =='X' && tableBox[c1].innerText =='X' ){
    msgPlay1Win();
    }
    if(tableBox[a3].innerText =='O' && tableBox[b2].innerText =='O' && tableBox[c1].innerText =='O' ){
        msgPlay2Win();
        }
}
function msgPlay1Win(){
    modalMsgPlayWin.innerText = 'O jogador 1 Ganhou. Parabens!' 
    modalMsgPlayWin.style.backgroundColor="green" 
}
function msgPlay2Win(){
    modalMsgPlayWin.innerText = 'O jogador 2 Ganhou. Parabens!'  
    modalMsgPlayWin.style.backgroundColor="green"
}

function openModalRestartGame(){
    if(modalMsgPlayWin.innerText == 'O jogador 2 Ganhou. Parabens!' || modalMsgPlayWin.innerText == 'O jogador 1 Ganhou. Parabens!' || modalMsgPlayWin.innerText == 'Jogo terminou em empate!'){
        modalRestartGame.style.display='flex'

    }
}

function restartGame(){
    timeCounterPlayer1 = 0;
    timeCounterPlayer2 = 0;
    currentPlayer1 = true;
    currentPlayer2 = false;
    numberOfMoves = 0;


        clearAllTableBox();
        clearMsgPlayWin();
        closeModalRestartGame();

        changeCurrentPlayer();
        
}

function closeModalRestartGame(){
    modalRestartGame.style.display='none';
}
function clearAllTableBox(){
    for (i=0; i<9 ; i++){
        tableBox[i].innerText = "";
    }
}
function clearMsgPlayWin(){
    modalMsgPlayWin.innerText = "";
}

function writeX(element){
    element.innerText = 'X';
    timeCounterPlayer1++;
    numberOfMoves++
}
function writeO(element){
    element.innerText = 'O';
    timeCounterPlayer2++;
    numberOfMoves++
}
function tiedGame(){
    if(numberOfMoves >=9){
        modalMsgPlayWin.innerText = 'Jogo terminou em empate!';
        modalMsgPlayWin.style.backgroundColor="gray"
        openModalRestartGame();
    }
}
