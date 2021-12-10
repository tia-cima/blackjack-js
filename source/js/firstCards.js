function firstAllCards() {    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            totalOpponent = 0;
            totalUser = 0;
            numbersJSON = JSON.parse(this.responseText);
            
            document.getElementById("user_choice").innerHTML = '<form method="GET"><input type="submit" value="Carta" name="btn_givecard" id="btn_givecard" class="choice" onclick="loadNewCard(); return false;" style="background-color: #00FF22;"></button><input type="submit" value="Fermati" name="btn_stop" id="btn_stop" class="choice" onclick="stopCard(); return false;" style="background-color: #FF0000;"></button><div id="one_or_eleven"></div></form>'

            // opponent
            document.getElementById("first_opponent_card").innerHTML =  "<img src=\"js/cards/cardN" + numbersJSON.first_opponent_card + ".png\">"; 
            document.getElementById("second_opponent_card").innerHTML =  "<img src=\"js/cards/cardN" + numbersJSON.second_opponent_card + ".png\">"; 
            aces_man(numbersJSON);
            setTimeout(function(){
                if(totalOpponent == 21){
                    alert("CPU ha fatto blackjack, hai perso");
                    deactivateButtons();
                };    
            }, 500);            

            // user
            document.getElementById("first_user_card").innerHTML =  "<img src=\"js/cards/cardN" + numbersJSON.first_user_card + ".png\">"; 
            if(numbersJSON.first_user_card == 1)
            {
                document.getElementById("one_or_eleven").innerHTML = '<input type="submit" value="rimani con 1" name="btn_one" id="btn_one" class="choice" onclick="style.display = \'none\'; acesOne(); return false;" style="margin-left: 50px; width:100px; height: 40px;" ><input type="submit" value="scegli 11" name="btn_eleven" id="btn_eleven" class="choice" onclick="style.display = \'none\';acesEleven(); return false;" style="width:75px; height: 40px;" > '
            }
            totalUser = totalUser + numbersJSON.first_user_card;
            document.getElementById("score_user").innerHTML = totalUser; 
        }
    };
    xhttp.open("GET", "php/loadFirstCards.php");
    xhttp.send();
}  



function aces_man(numbersJSON){
    if(numbersJSON.first_opponent_card != 1 && numbersJSON.second_opponent_card != 1)    {
        totalOpponent = numbersJSON.first_opponent_card + numbersJSON.second_opponent_card;
        document.getElementById("score_opponent").innerHTML = totalOpponent; 
    }
    else if (numbersJSON.first_opponent_card == 1){
        if((Math.random() * (10 - 1) + 1) > 3 && (Math.random() * (10 - 1) + 1) < 8){ // algoritmo per decidere quando il bot prendera' l'asso come 11 e quando lo lascera' a 1
            totalOpponent = 11 + numbersJSON.second_opponent_card;
            document.getElementById("score_opponent").innerHTML = totalOpponent;  
        }
        else{
            totalOpponent = 1 + numbersJSON.second_opponent_card;
            document.getElementById("score_opponent").innerHTML = totalOpponent;  
        }       
    }
    else if(numbersJSON.second_opponent_card == 1){
        if((Math.random() * (10 - 1) + 1) > 3 && (Math.random() * (10 - 1) + 1) < 8){ // algoritmo per decidere quando il bot prendera' l'asso come 11 e quando lo lascera' a 1
            totalOpponent = 11 + numbersJSON.first_opponent_card;
            document.getElementById("score_opponent").innerHTML = totalOpponent;  
        }
        else{
            totalOpponent = 1 + numbersJSON.first_opponent_card;
            document.getElementById("score_opponent").innerHTML = totalOpponent;  
        }       
    }
}
