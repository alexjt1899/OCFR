<?php

require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'INSERT INTO Certification
  (CertID,CertName,CerAgency,CertLength,CertDescription)
  VALUES (?,?,?,?,?)'
);

$stmt->execute([
$_POST['CertID'],
$_POST['CertName'],
$_POST['CerAgency'],
$_POST['CertLength'],
$_POST['CertDescription']
]);

$CertID = $db->lastInsertID();

header('HTTP/1.1 303 See Other');

header('Location: ../Certification');
?>
