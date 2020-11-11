DROP DATABASE IF EXISTS eYourSelf_db;
CREATE DATABASE eYourSelf_db;

USE `eYourSelf_db`;


CREATE TABLE user(
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL,
  upassword VARCHAR(100) NOT NULL,
  token VARCHAR(12) NOT NULL,
  PRIMARY KEY (id)
);




CREATE TABLE userProfiles(
  id INT NOT NULL AUTO_INCREMENT,
  u_name VARCHAR(50) NOT NULL,
  nick_name VARCHAR(50) NOT NULL,
  dob DATE NOT NULL,
  gender VARCHAR(10),
  user_pic VARBINARY(1024),
  followings INT,
  follwers INT,
  post_likes INT,
  PRIMARY KEY (id),
  FOREIGN KEY (id) REFERENCES user(id)
);


CREATE TABLE postComment(
  id INT NOT NULL AUTO_INCREMENT,
  utext VARCHAR(500),
  post VARCHAR(500),
  author VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id) REFERENCES user(id)
);

CREATE TABLE post(
  id INT NOT NULL AUTO_INCREMENT,
  utext VARCHAR(30) NOT NULL,
  poll INT NOT NULL,
  img_Video VARBINARY(1024),
  upload VARBINARY(1024),
  likes_count INT,
  comments_count INT,
  author VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id) REFERENCES user(id)
);