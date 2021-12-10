function stopCard() {    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(parseInt(document.getElementById("score_opponent").innerHTML) <= 17) { // parte dell'intelligenza artififciale del bot, se ha gia un 18 fra le prime carte evita di chiederne altre                   
                numbersJSON = JSON.parse(this.responseText);
                do{
                    randNumber = parseInt((Math.random() * (numbersJSON.more_opponent_card - 1) + 1));
                    console.log(randNumber);
                    totalOpponent = parseInt(document.getElementById("score_opponent").innerHTML);
                    div = document.getElementById("opponent_box");
                    div.innerHTML += "<div class=\"card_container\" id=\"more_opponent_card\"> <img src=\"js/cards/cardN" + randNumber + ".png\"> </div>";
                    if(numbersJSON.more_opponent_card != 1)
                    {
                        totalOpponent += randNumber;
                        document.getElementById("score_opponent").innerHTML = totalOpponent;                        
                    }
                    else {
                        if((Math.random() * (10 - 1) + 1) > 3 && (Math.random() * (10 - 1) + 1) < 8){ // algoritmo per decidere quando il bot prendera' l'asso come 11 e quando lo lascera' a 1
                            totalOpponent += 11;
                            document.getElementById("score_opponent").innerHTML = totalOpponent;  
                        }
                        else{
                            totalOpponent += 1;
                            document.getElementById("score_opponent").innerHTML = totalOpponent;  
                        }                        
                    }
                }while(totalOpponent < 16);           
                
                if(totalOpponent <= 21){
                    // dopo che e' arrivata a 16, tira un'altra carta ogni volta. Questo pezzo servirebbe farlo con un intelligenza artificiale perche il bot deve capire quando e' il caso
                    // di tirare ancora carta ma ovviamente non si puo fare
                    totalOpponent = parseInt(document.getElementById("score_opponent").innerHTML);
                    div = document.getElementById("opponent_box");
                    numbersJSON = JSON.parse(this.responseText);        
                    div.innerHTML += "<div class=\"card_container\" id=\"more_opponent_card\"> <img src=\"js/cards/cardN" + randNumber + ".png\"> </div>"; 
                    if(numbersJSON.more_opponent_card != 1)
                    {
                        totalOpponent += randNumber;
                        console.log(randNumber);
                        document.getElementById("score_opponent").innerHTML = totalOpponent;
                        setTimeout(function(){checks(totalOpponent);}, 1000);                           
                    }
                    else {
                        if((Math.random() * (10 - 1) + 1) > 3 && (Math.random() * (10 - 1) + 1) < 8){ // algoritmo per decidere quando il bot prendera' l'asso come 11 e quando lo lascera' a 1
                            totalOpponent += 11;
                            document.getElementById("score_opponent").innerHTML = totalOpponent;  
                        }
                        else{
                            totalOpponent += 1;
                            document.getElementById("score_opponent").innerHTML = totalOpponent;  
                        }                        
                    }         
                }
                else{
                    setTimeout(function(){
                        alert("CPU ha sballato, hai vinto!");
                        deactivateButtons();
                    }, 500);   
                }
            }
            else{ // se la cpu si ferma senza chiedere altre carte succede questo
                if (totalOpponent > parseInt(document.getElementById("score_user").innerHTML)){
                    alert("CPU si ferma");
                    alert("CPU ha vinto");
                    deactivateButtons();
                }
                else if(totalOpponent < parseInt(document.getElementById("score_user").innerHTML) && parseInt(document.getElementById("score_user").innerHTML) != 21){
                    alert("hai vinto!");
                    deactivateButtons();
                }                
            }
        }
    };
    xhttp.open("GET", "php/giveCardOpponent.php");
    xhttp.send();
}  

function deactivateButtons(){
    document.getElementById("user_choice").innerHTML = null;
}

function checks(totalOpponent){              
    if(totalOpponent == 21){ // alert riguardanti cpu
        alert("CPU ha fatto blackjack, hai perso");
        deactivateButtons();
    }
    else if(totalOpponent > 21){
        alert("CPU ha sballato, hai vinto!");
        deactivateButtons();
    }
    else if(totalOpponent > parseInt(document.getElementById("score_user").innerHTML)){
        alert("CPU ha vinto");
        deactivateButtons();
    } 
    else if(totalOpponent < parseInt(document.getElementById("score_user").innerHTML)){
        alert("hai vinto!");
        deactivateButtons();
    }     
    else if(totalOpponent == parseInt(document.getElementById("score_user").innerHTML)){
        alert("partita finita in pareggio");
        deactivateButtons();
    }
    else if(totalOpponent == 5 && parseInt(document.getElementById("score_user").innerHTML) == 17){
        alert("grazie sca per l'idea");
    }
}

// metter emath.rand dove numbersJSOnN e' il valore max