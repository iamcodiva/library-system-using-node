CREATE DATABASE library_system;
use library_system;
CREATE TABLE IF NOT EXISTS users(id INT PRIMARY KEY AUTO_INCREMENT ,firstName varchar(30),lastName varchar(30),email varchar(30),userPassword varchar(255),userRole varchar(30));