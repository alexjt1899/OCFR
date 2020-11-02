<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection
$stmt = $db->prepare(
  'UPDATE Certification SET CertName=?,CerAgency = ?,CertLength = ?,CertDescription = ?
   WHERE CertID = ?;'
);

$stmt->execute([
  $_POST['CertName'],
  $_POST['CerAgency'],
  $_POST['CertLength'],
  $_POST['CertDescription'],
  $_POST['CertID']
]);

// If needed, get auto-generated PK from DB
$pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Content-Type: application/json');
header('Location: ../Members/?Member_ID=' . $pk);
