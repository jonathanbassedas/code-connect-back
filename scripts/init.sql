-- In this file, we will create the database schema
DROP DATABASE IF EXISTS codeconnect_db;

CREATE DATABASE IF NOT EXISTS codeconnect_db DEFAULT CHARACTER
SET
  utf8 COLLATE utf8_general_ci;

USE codeconnect_db;

SET
  GLOBAL log_bin_trust_function_creators = 1;

CREATE TABLE
  IF NOT EXISTS codigo (
    id INT (11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
  );
