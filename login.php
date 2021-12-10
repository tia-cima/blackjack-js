<?php
    $username = $_GET["user"];
    $password = $_GET["password"];
   
    $filename = "source/account/" . $username . ".json";

    $json_data = file_get_contents($filename);
    $jsonPassword = json_decode($json_data, true);

    if($jsonPassword['password'] == $password)
        header("Location: source/home.html");
    else 
        header("Location: index.html");
?>