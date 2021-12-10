<?php
    $username = $_GET["user"];
    $password = $_GET["password"];
    $email = $_GET["email"];

    $person = array('username' => $username, 'password' => $password, 'email' => $email);
    
    $filename = "source/account/" . $username . ".json";
    if (file_exists($filename))
        header("Location: registration.html");
    else {
        $fp = fopen("source/account/$username.json", "w") or die("Unable to open file!");
        fwrite($fp, json_encode($person));
        fclose($fp); 
        header("Location: index.html");}
?>
