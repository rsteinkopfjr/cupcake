CREATE DATABASE cupcake_db;
USE cupcake_db;

CREATE TABLE cupcakes
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
