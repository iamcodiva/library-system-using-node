CREATE DATABASE library_system;
use library_system;
CREATE TABLE IF NOT EXISTS users(id INT PRIMARY KEY AUTO_INCREMENT ,firstName varchar(30),lastName varchar(30),email varchar(30),userPassword varchar(255),userRole varchar(30));
CREATE TABLE IF NOT EXISTS books(id INT PRIMARY KEY AUTO_INCREMENT,Title varchar(100),Author varchar(100),Isbn INT,category varchar(60),Price NUMERIC(10,3),Total INT)