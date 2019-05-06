-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: NoteShare
-- ------------------------------------------------------
-- Server version	5.7.18

use NoteShare;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `userSavedPosts`;
DROP TABLE IF EXISTS `posts`;
DROP TABLE IF EXISTS `userInfo`;
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `classes`;
DROP TABLE IF EXISTS `schools`;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(128) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Current passwords are all 12345678
LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES
    (1,'mloumena@calpoly.edu','pbkdf2:sha256:50000$Ky5N08C0$6bca038011470cc314d86c4927cb16fce5337666b7f82d5d5a5a5cbeae6df55f'),
    (2, '@.com', 'pbkdf2:sha256:50000$Ky5N08C0$6bca038011470cc314d86c4927cb16fce5337666b7f82d5d5a5a5cbeae6df55f');
UNLOCK TABLES;

--
-- Table structure for table `userInfo`
--

CREATE TABLE `userInfo` (
  `user_id` int(11) NOT NULL,
  `user_display_name` varchar(45) DEFAULT NULL,
  `user_real_name` varchar(45) DEFAULT NULL,
  `user_email` varchar(45) DEFAULT NULL,
  `phone_no` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  FOREIGN KEY (`user_id`)
      REFERENCES `users` (`user_id`)
      ON UPDATE CASCADE
      ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

LOCK TABLES `userInfo` WRITE;
INSERT INTO `userInfo` VALUES
    (1, 'brohemian', 'Max Loumena', 'mloumena@calpoly.edu', '8052354459'),
    (2, NULL, NULL, NULL, NULL);
UNLOCK TABLES;

--
-- Table structure for table `schools`
--

CREATE TABLE `schools` (
  `school_id` int(11) NOT NULL AUTO_INCREMENT,
  `school_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`school_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

LOCK TABLES `schools` WRITE;
INSERT INTO `schools` VALUES (1,'Cal Poly');
UNLOCK TABLES;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
CREATE TABLE `classes` (
  `class_id` int(11) NOT NULL AUTO_INCREMENT,
  `class_name` varchar(45) DEFAULT NULL,
  `school_id` int(11) NOT NULL,
  PRIMARY KEY (`class_id`),
  FOREIGN KEY (`school_id`)
      REFERENCES `schools` (`school_id`)
      ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

LOCK TABLES `classes` WRITE;
INSERT INTO `classes` VALUES (1, 'CSC480', 1);
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `date_sold` timestamp NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `class_id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  FOREIGN KEY (`author_id`)
      REFERENCES `users` (`user_id`)
      ON UPDATE CASCADE
      ON DELETE SET NULL,
  FOREIGN KEY (`class_id`)
      REFERENCES `classes` (`class_id`)
      ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

LOCK TABLES `posts` WRITE;
INSERT INTO `posts` VALUES (1, '2019-03-16 05:19:21', 1, 1, "Lesson 1");
UNLOCK TABLES;

--
-- Table structure for table `userSavedPosts`
--

CREATE TABLE `userSavedPosts` (
  `saved_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  PRIMARY KEY (`saved_id`),
  FOREIGN KEY (`user_id`)
      REFERENCES `users` (`user_id`)
      ON UPDATE CASCADE
      ON DELETE CASCADE,
  FOREIGN KEY (`post_id`)
      REFERENCES `posts` (`post_id`)
      ON UPDATE CASCADE
      ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

LOCK TABLES `userSavedPosts` WRITE;
INSERT INTO `userSavedPosts` VALUES
    (1, 1, 1);
UNLOCK TABLES;
