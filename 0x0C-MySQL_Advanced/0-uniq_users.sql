-- SQL script that creates a table users                                                              
Create database if not exists holberton;
Create table if not exists `holberton`.`users` (
       id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
       email VARCHAR(255) NOT NULL UNIQUE,
       name VARCHAR(255)
);
