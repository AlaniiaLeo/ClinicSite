<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name-1"];
    $surname = $_POST["name-2"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $pass = $_POST["password"];

    $curl = curl_init();
    $postData = array(
        "name" => $name,
        "email" => $email
    );
    curl_setopt_array(
        $curl,
        array(
            CURLOPT_URL => "",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => http_build_query($postData)
        )
    );
    $response = curl_exec($curl);
    curl_close($curl);
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "vetclinic";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Ошибка подключения к базе данных: " . $conn->connect_error);
    }
    $sql = "INSERT INTO users (name, surname, email, phone, password, type) VALUES ('$name', '$surname', '$email', '$phone', '$pass', 'client');";

    if ($conn->query($sql) === TRUE) {
        error_log("Данные успешно добавлены в базу данных.");
    } else {
        error_log("Ошибка: " . $sql . "<br>" . $conn->error);
    }

    $conn->close();
}
?>