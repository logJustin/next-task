CREATE DATABASE todoapp;

CREATE TABLE todos (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

INSERT INTO todos (id, user_email, title, progress, date) VALUES ('0', 'justin@test.com', 'First todo', 10, 'Mon Jul 03 2023 19:14:44 GMT+0200 (Central European Summer Time)');