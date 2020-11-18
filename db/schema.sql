DROP DATABASE IF EXISTS how_to_db;
CREATE DATABASE how_to_db;
USE `how_to_db`;

CREATE TABLE user(
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  token VARCHAR(12) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE userprofiles(
  id INT NOT NULL AUTO_INCREMENT,
  u_name VARCHAR(50) NOT NULL,
  topic VARCHAR(50) NOT NULL,
  dob DATE NOT NULL,
  gender VARCHAR(10),
  user_pic VARCHAR(1024),
  followings INT,
  followers INT,
  post_likes INT,
  user_id INT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE SET NULL
);

CREATE TABLE post(
  id INT NOT NULL AUTO_INCREMENT,
  u_text VARCHAR(500) NOT NULL,
  poll VARCHAR(500) NOT NULL,
  img_or_video VARCHAR(1024),
  upload VARCHAR(1024),
  tags VARCHAR(1024),
  likes_count INT,
  comments_count INT,
  share_count INT,
  userprofiles_id INT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (userprofiles_id) REFERENCES userprofiles(id) ON DELETE SET NULL
);

CREATE TABLE postcomments(
  id INT NOT NULL AUTO_INCREMENT,
  u_text VARCHAR(500),
  post_id INT NULL,
  userprofiles_id INT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (userprofiles_id) REFERENCES user(id) ON DELETE SET NULL,
  FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE SET NULL
);