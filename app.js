let btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    let player1 = Math.floor(Math.random()*6) + 1
    let playDice1 = `./images/dice${player1}.png`;
    document.getElementById("img1").setAttribute("src" , playDice1);
    
    let player2 = Math.floor(Math.random()*6) + 1
    let playDice2 = `./images/dice${player2}.png`;
    document.getElementById("img2").setAttribute("src" , playDice2);


    let result = document.getElementsByClassName("result")[0] ;
    if (player1 > player2) {
        result.innerHTML = "Player 1 Wins";
    }
    else if( player2 > player1){
        result.innerHTML = "Player 2 Wins";
        
    }
    else result.innerHTML = "Draw";


})