function acesEleven(){
    number = parseInt(document.getElementById("score_user").innerHTML) + 10;
    document.getElementById("score_user").innerHTML = number;
    document.getElementById("one_or_eleven").innerHTML = null;
    setTimeout(function(){
        if(totalUser == 21){
            alert("hai fatto blackjack");
            deactivateButtons();
        }
        else if(totalUser > 21){
            alert("hai sballato, hai perso");
            deactivateButtons();
        }         
    }, 500);    
}