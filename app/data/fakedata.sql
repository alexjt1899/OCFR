Create database Team2_OCFR;
USE Team2_OCFR;

DROP TABLE IF EXISTS People;
create table People (
	EmployeeID VARCHAR(50) PRIMARY KEY,
	firstName VARCHAR(50),
	lastName VARCHAR(50),
	radioNumber INT,
	stationNumber INT,
	isActive VARCHAR(50),
	phone VARCHAR(50),
	email VARCHAR(50),
	address VARCHAR(50),
	gender VARCHAR(50),
	startDate DATE,
	Position VARCHAR(50),
	CertExpiration INT
);
insert into People (
  EmployeeID, firstName, lastName, radioNumber, stationNumber,
  isActive, phone, email, address, gender, startDate, Position, CertExpiration) values
  ('55-8595070', 'Mariel', 'Solesbury', 1, 1, false, '(305) 1630946',
  'msolesbury0@stanford.edu', '30 Weeping Birch Hill',
  'Female', '10/10/2019', 'Firefighter', 2);
  insert into People (
  EmployeeID, firstName, lastName, radioNumber, stationNumber,
  isActive, phone, email, address, gender, startDate, Position, CertExpiration) values
  ('30-7210302', 'Wynn', 'Davydenko', 2, 2, true, '(315) 7664795',
  'wdavydenko1@youku.com', '11 Corscot Center',
  'Male', '03/27/2019', 'Driver engineer', 3);
insert into People (
  EmployeeID, firstName, lastName, radioNumber, stationNumber,
  isActive, phone, email, address, gender, startDate, Position, CertExpiration) values
  ('48-9870435', 'Lark', 'Scutt', 3, 3, true, '(702) 7812105',
  'lscutt2@scribd.com', '909 4th Street',
  'Female', '06/23/2019', 'Fire chief', 4);

DROP TABLE IF EXISTS Certification;
create table Certification (
    CertID VARCHAR(50) primary key,
    CertName VARCHAR(50),
  	CertDate DATE,
  	CertExpiration INT,
    CertRenewal VARCHAR(50),
  	CerAgency VARCHAR(50)
);
insert into Certification (CertID, CertName, CertDate,
  CertExpiration, CertRenewal, CerAgency) values
  ('81-5776079', 'Firefighter I (Athens Technical College)', '10/10/2019', 2, 'Yes', 'EchoStar Corporation');
insert into Certification (CertID, CertName, CertDate,
  CertExpiration, CertRenewal, CerAgency) values
  ('94-5870183', 'CPR (CPR for the Professional Rescuer/American Red Cross)', '1/21/2017', 2, 'Yes', 'Putnam Managed Municipal Income Trust');


create table Person_Certification (
  	Employee_ID VARCHAR(50),
  	CertID VARCHAR(50),
  );
  insert into Person_Certification (Employee_ID, CertID) VALUES
    ('55-8595070','81-5776079');
  insert into Person_Certification (Employee_ID, CertID) VALUES
    ('30-7210302','81-5776079');
  insert into Person_Certification (Employee_ID, CertID) VALUES
    ('48-9870435','94-5870183');

select * from Certification;
select * from People;
