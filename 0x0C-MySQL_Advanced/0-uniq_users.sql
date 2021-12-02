-- SQL script that creates a table users
-- Create users table if not exists                                                              
CREATE TABLE IF NOT EXISTS users (
       id INT NOT NULL AUTO_INCREMENT,
       PRIMARY KEY (id),
       email VARCHAR(255) NOT NULL UNIQUE,
       name VARCHAR(255)
);
