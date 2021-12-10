<?php 
    $result = json_encode([
        'first_opponent_card' => rand(1, 10),
        'second_opponent_card' => rand(1, 10),
        'first_user_card' => rand(1, 10)
    ]);
    echo $result;
?>
