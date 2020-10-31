<?php

require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'DELETE FROM Certification WHERE CertID = ?'
);

$stmt->execute([
  $_POST['CertID']
]);

header('HTTP/1.1 303 See Other');

header('Location: ../Certification/');
?>
