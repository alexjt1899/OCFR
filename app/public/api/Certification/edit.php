<?php

require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  "UPDATE TABLE Certification
  SET CertName='Test'
  WHERE CertID=29"
);

$stmt->execute([
  $_POST['CertID'],
  $_POST['CertName']
  ]);
/*  $_POST['CerAgency'],
  $_POST['CertLength'],
  $_POST['CertDescription'] */


$CertId = $db->lastInsertID();
header('HTTP/1.1 303 See Other');

header('Location: ../Certification/');
?>

-- If auto generate works, remove CertID from prepare, execute
--$CertID = $db->lastInsertID(); -->
