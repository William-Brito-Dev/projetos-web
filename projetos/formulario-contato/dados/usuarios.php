<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nome = $_POST['nome'] ?? '';
        $email = $_POST['e-mail'] ?? '';
        $celular = $_POST['celular'] ?? '';
        $mensagem = $_POST['mensagem'] ?? '';

        echo "Olá $nome, seu eu email é $email e Seu telefone é $celular";
            }
?>