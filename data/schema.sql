CREATE DATABASE cupcakesDB;
USE cupcakesDB;

CREATE TABLE cupcakes (
    id INT AUTO_INCREMENT NOT NULL,
    cupcake_name VARCHAR(200) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
)