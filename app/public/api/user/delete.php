<?php

require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'DELETE FROM People WHERE EmployeeID = ?'
);

$stmt->execute([
  $_POST['EmployeeID']
]);

header('HTTP/1.1 303 See Other');

header('Location: ../user/');
?>
