-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: NoteShare
-- ------------------------------------------------------
-- Server version	5.7.18

use NoteShare;

--
-- Procedure structure for getting login info
--
DROP PROCEDURE IF EXISTS sp_getLoginInfo;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getLoginInfo`(
    IN p_username VARCHAR(45)
)
BEGIN
    select * from users where username like p_username limit 1;
END$$
DELIMITER ;

--
-- Procedure structure for getting user info
--
DROP PROCEDURE IF EXISTS sp_getUserInfo;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getUserInfo`(
    IN p_user_id INT(11)
)
BEGIN
    if ( select exists (select 1 from userInfo where user_id = p_user_id) ) THEN
        select * from userInfo where user_id = p_user_id limit 1;
    ELSE
        select 'User does not exist';
    END IF;
END$$
DELIMITER ;

--
-- Procedure structure for getting a users saved posts
--
DROP PROCEDURE IF EXISTS sp_getUserSavedPosts;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getUserSavedPosts`(
    IN p_user_id INT(11)
)
BEGIN
    if ( select exists (select 1 from users where user_id = p_user_id) ) THEN
		select *
        from posts
        where post_id in (
			select post_id
            from userSavedPosts
            where user_id=p_user_id);
    ELSE
        select 'User does not exist';
    END IF;
END$$
DELIMITER ;

--
-- Procedure structure for getting a classes saved posts
--
DROP PROCEDURE IF EXISTS sp_getClassPosts;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getClassPosts`(
    IN p_class_id INT(11)
)
BEGIN
    if ( select exists (select 1 from classes where class_id = p_class_id) ) THEN
		select *
        from posts
        where class_id=p_class_id;
    ELSE
        select 'User does not exist';
    END IF;
END$$
DELIMITER ;

--
-- Procedure structure for getting a school's classes
--
DROP PROCEDURE IF EXISTS sp_getClasses;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getClasses`(
    IN p_school_id INT(11)
)
BEGIN
    if ( select exists (select 1 from schools where school_id = p_school_id) ) THEN
		select *
        from classes
        where school_id=p_school_id;
    ELSE
        select 'School does not exist';
    END IF;
END$$
DELIMITER ;

--
-- Procedure structure for getting a single school
--
DROP PROCEDURE IF EXISTS sp_getSchool;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getSchool`(
    IN p_school_id INT(11)
)
BEGIN
    select school_name
    from schools
    where school_id=p_school_id;
END$$
DELIMITER ;

--
-- Procedure structure for getting all schools
--
DROP PROCEDURE IF EXISTS sp_getSchools;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getSchools`()
BEGIN
    select * from schools;
END$$
DELIMITER ;

SHOW PROCEDURE STATUS WHERE db = 'NoteShare';
