DROP DATABASE IF EXISTS BattleArena;

CREATE DATABASE BattleArena;

USE BattleArena;

CREATE TABLE User (
  ID INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  pw VARCHAR(20) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Characters (
  ID INT NOT NULL AUTO_INCREMENT,
  UserID INT NOT NULL,
  CharName VARCHAR(20) NOT NULL,
  CharRank INT,
  CharXP INT,
  CharLevel INT,
  CharHP INT,
  CharMP INT,
  CharSpeed INT,
  CharAttack INT,
  CharDefense INT,
  CharResistEl VARCHAR(10),
  CharWeaknessEl VARCHAR(10),
  PRIMARY KEY (ID),
  FOREIGN KEY (UserID) REFERENCES User(ID)
);



