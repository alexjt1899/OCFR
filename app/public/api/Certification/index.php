<?php

  require 'common.php';

  $db = DbConnection::getConnection();

  $stmt = $db->prepare (
    "SELECT * FROM Certification AS c"
  );

  $stmt->execute();

  $certificates = $stmt->fetchAll();

  $json = json_encode($certificates, JSON_PRETTY_PRINT);

  header('Content-Type: application/json');
  echo $json;

?>
