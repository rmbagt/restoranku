-- Create Database
CREATE DATABASE restoranku;

-- Use Database
USE restoranku;

-- Create Table
CREATE TABLE customers(
  id INT Primary Key auto_increment,
  name VARCHAR(30)
);

CREATE TABLE waiters(
  id INT Primary Key auto_increment,
  name VARCHAR(30)
);

CREATE TABLE ingredients(
  id INT Primary Key auto_increment,
  name VARCHAR(30),
  stock INT
);

CREATE TABLE menus(
  id INT Primary Key auto_increment,
  name VARCHAR(30),
  price INT
);

CREATE TABLE recipe (
	idMenu VARCHAR(30),
  idIngredient VARCHAR(30)
);

CREATE TABLE orderdtl (
	orderId INT,
  menuName VARCHAR(30)
);

CREATE TABLE orders(
	id INT Primary Key auto_increment,
  customerName VARCHAR(30),
	waiterName VARCHAR(30),
  price INT,
  tableNumber INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);