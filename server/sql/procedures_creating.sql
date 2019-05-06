-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: NoteShare
-- ------------------------------------------------------
-- Server version	5.7.18

use NoteShare;

--
-- Procedure structure for creating users
--
DROP PROCEDURE IF EXISTS sp_createUser;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_createUser`(
    IN p_username VARCHAR(45),
    IN p_password VARCHAR(128)
)
BEGIN
    if ( select exists (select 1 from users where username = p_username) ) THEN
        select 'Username Exists';
    ELSE
        insert into users
        (
            username,
            password
        )
        values
        (
            p_username,
            p_password
        );
    END IF;
END$$
DELIMITER ;

--
-- Procedure structure for creating user info
--
DROP PROCEDURE IF EXISTS sp_createUserInfo;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_createUserInfo`(
	IN p_user_id INT(11),
    IN p_user_display_name VARCHAR(45),
    IN p_user_real_name VARCHAR(45),
    IN p_user_email VARCHAR(45),
    IN p_phone_no VARCHAR(10)
)
BEGIN
    if ( select exists (select 1 from users where user_id = p_user_id) ) THEN
        if ( select exists (select 1 from userInfo where user_id = p_user_id) ) THEN
            update userInfo set
                user_display_name = p_user_display_name,
                user_real_name = p_user_real_name,
                user_email = p_user_email,
                phone_no = p_phone_no
            where user_id = p_user_id;

        ELSE
            insert into userInfo
            (
                user_id,
                user_display_name,
                user_real_name,
                user_email,
                phone_no
            )
            values
            (
                p_user_id,
                p_user_display_name,
                p_user_real_name,
                p_user_email,
                p_phone_no
            );
        END IF;
    ELSE
        SELECT 'User does not exist';
    END IF;
END$$
DELIMITER ;

--
-- Procedure structure for creating schools
--
DROP PROCEDURE IF EXISTS sp_createSchool;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_createSchool`(
    IN p_school_name VARCHAR(45)
)
BEGIN
    if ( select exists (select 1 from schools where school_name = p_school_name) ) THEN
        select 'School Exists';
    ELSE
        insert into schools
        (
            school_name
        )
        values
        (
            p_school_name
        );

    END IF;
END$$
DELIMITER ;

--
-- Procedure structure for creating schools
--
DROP PROCEDURE IF EXISTS sp_createClass;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_createClass`(
	IN p_school_id INT(11),
    IN p_class_name VARCHAR(45)
)
BEGIN
	if ( select exists (select 1 from schools where school_id = p_school_id) ) THEN
		insert into classes
		(
			school_id,
			class_name
		)
		values
		(
			p_school_id,
			p_class_name
		);
    ELSE
		SELECT 'School does not exist';
	END IF;
END$$
DELIMITER ;

--
-- Procedure structure for creating posts
--
DROP PROCEDURE IF EXISTS sp_createPost;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_createPost`(
	IN p_date_sold DATETIME,
    IN p_author_id INT(11),
    IN p_class_id INT(11),
    IN p_name VARCHAR(100)
)
BEGIN
    if ( select exists (select 1 from classes where class_id = p_class_id) ) THEN
		if ( select exists (select 1 from users where user_id = p_author_id) ) THEN
			insert into posts
			(
				date_sold,
				author_id,
				class_id,
				name
			)
			values
			(
				p_date_sold,
				p_author_id,
				p_class_id,
				p_name
			);
    	ELSE
			SELECT 'Author does not exist';
        END IF;
	ELSE
		SELECT 'Class does not exist';
    END IF;
END$$
DELIMITER ;

--
-- Procedure structure for saving posts
--
DROP PROCEDURE IF EXISTS sp_savePost;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_savePost`(
    IN p_user_id INT(11),
    IN p_post_id INT(11)
)
BEGIN
    if ( select exists (select 1 from posts where post_id = p_post_id) ) THEN
		if ( select exists (select 1 from users where user_id = p_user_id) ) THEN
			insert into userSavedPosts
			(
				user_id,
				post_id
			)
			values
			(
				p_user_id,
				p_post_id
			);
		ELSE
			SELECT 'User does not exist';
        END IF;
	ELSE
		SELECT 'Post does not exist';
    END IF;
END$$
DELIMITER ;

SHOW PROCEDURE STATUS WHERE db = 'NoteShare';
