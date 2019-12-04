CREATE DATABASE aper;

USE aper;

CREATE TABLE Login(
	Id int PRIMARY KEY IDENTITY(1,1),
	Username varchar(50),
	Password varchar(30)
)

INSERT INTO Login(Username, Password)
	VALUES('igor', '123')
	
SELECT * FROM aper.Login
