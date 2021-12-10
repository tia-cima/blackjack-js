function loadNewCard() {    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            totalUser = parseInt(document.getElementById("score_user").innerHTML);
            div = document.getElementById("user_box");
            numberOfElements = div.getElementsByTagName('*').length;
            numbersJSON = JSON.parse(this.responseText);        
            div.innerHTML += "<div class=\"card_container\" id=\"more_user_card\"> <img src=\"js/cards/cardN" + numbersJSON.more_user_card + ".png\"> </div>";    
            
            if(numbersJSON.more_user_card == 1)
            {
                document.getElementById("one_or_eleven").innerHTML = '<input type="submit" value="rimani con 1" name="btn_one" id="btn_one" class="choice" onclick="style.display = \'none\'; acesOne(); return false;" style="margin-left: 50px; width:100px; height: 40px;" ><input type="submit" value="scegli 11" name="btn_eleven" id="btn_eleven" class="choice" onclick="style.display = \'none\';acesEleven(); return false;" style="width:75px; height: 40px;" > '
            }

            totalUser += numbersJSON.more_user_card;
            document.getElementById("score_user").innerHTML = totalUser;
            
            setTimeout(function(){
                if(parseInt(document.getElementById("score_user").innerHTML) == 21){
                    alert("hai fatto blackjack");
                    deactivateButtons();
                }
                else if(parseInt(document.getElementById("score_user").innerHTML) > 21){
                    alert("hai sballato, hai perso");
                    deactivateButtons();
                };                       
            }, 500);    
     
        }
    };
    xhttp.open("GET", "php/giveCardUser.php");
    xhttp.send();
}  