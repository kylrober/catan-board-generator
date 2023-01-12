DROP DATABASE IF EXISTS catan;

CREATE DATABASE catan;

-- USE catan;

CREATE TABLE boards (
  id SERIAL PRIMARY KEY,
  numbers VARCHAR(500),
  resources VARCHAR(500),
  colors VARCHAR(500)
);