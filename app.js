/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//isey banane me yar poora din zaya gaya zaya? :o yar ye sirf logic to banani thi , ek game hi to thishsh/shshshshhshshsh xD shshsh xdyar kaho xD nai ap kahein arey kaho na
// // arey kaho xDDD kch nhi kehna tha ,mene tm kehrahe the na kch how was the game ? bhtttttttttttt aala xD  bas maqsad poora hogaya banane ka xD arey waqaI BHT awesome 
// ek last khel lein? xp han zarur xd
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//


//
// ──────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: F U N C T I O N S   F O R   O U R   G A M E : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────
//

function changeActivePlayer(activationChecking) {

    document.querySelector(".dice").style.display = "none";
    document.querySelector(".player-" + activationChecking + "-panel").classList.remove("active")

    if (activationChecking == 0) {

        activationChecking++;

    } else
        activationChecking--;


    document.querySelector(".player-" + activationChecking + "-panel").classList.add("active")

    return activationChecking;

}


function winnerChecker(total) {
    if (total >= 100) {
        return 1;

    }

    return 0;
}


//
// ─── DECLARING ALL TYPES OF VARIABLE WHICH MIGHT BE  NECESSARY ──────────────────
//



var scores, roundScore, activePlayer, dice, currentPlayerScore = 0,
    currentPlayerTotalScore;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;



//
// ─── DECLARING STARTING WHEN GAME IS NOT STARTED ────────────────────────────────
//



document.querySelector(".dice").style.display = "none";




//
// ─── WHEN WE ROLL THE DICE THE FOLLOWING EVENTS WILL OCCUR ──────────────────────
//



document.querySelector(".btn-roll").addEventListener("click", function () {

    dice = Math.floor((Math.random() * 6) + 1);
    document.querySelector(".dice").style.display = "";
    document.querySelector(".dice").src = "dice-" + dice + ".png";


    currentPlayerScore = parseInt(document.querySelector("#score-" + activePlayer).innerText)

    currentPlayerScore += dice;

    if (dice != 1)
        document.querySelector("#score-" + activePlayer).innerText = currentPlayerScore

    else {
        document.querySelector("#score-" + activePlayer).innerText = 0;
        activePlayer = changeActivePlayer(activePlayer);
    }


});


//
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: W H E N   W E   H O L D   T H E   D I C E   T H E   F O L L O W I N G   E V E N T S   W I L L   O C C U R : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//



document.querySelector(".btn-hold").addEventListener("click", function ()

    {
        currentPlayerTotalScore = parseInt(document.querySelector("#current-" + activePlayer).innerText);
        scores['activePlayer'] = currentPlayerScore + currentPlayerTotalScore;
        document.querySelector("#current-" + activePlayer).innerText = scores['activePlayer'];


        if (winnerChecker(scores['activePlayer'])) {
            document.querySelector(".btn-roll").style.display = "none"
            document.querySelector(".btn-hold").style.display = "none"
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner")
            alert('Player ' + ++activePlayer + " wins");
        } else {
            document.querySelector("#score-" + activePlayer).innerText = 0;
            activePlayer = changeActivePlayer(activePlayer);
            currentPlayerScore = 0;
            document.querySelector(".dice").style.display = "none";
        }



    });


//
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: W H E N   N E W   G A M E   I S   C L I C K E D   W H I C H   I S   O U R   B U T T O N      :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//


document.querySelector(".btn-new").addEventListener("click",

    function () {
        window.location.reload();
    }
)