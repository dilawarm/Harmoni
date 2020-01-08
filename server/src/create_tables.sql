DROP TABLE IF EXISTS artist;
DROP TABLE IF EXISTS ticket;
DROP TABLE IF EXISTS user_event;
DROP TABLE IF EXISTS event;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS organization;

CREATE TABLE `organization` (
 `org_id` int(11) NOT NULL AUTO_INCREMENT,
 `org_name` varchar(45) NOT NULL,
 `phone` varchar(20) DEFAULT NULL COMMENT 'Some organization might not have own phone number...?',
 `email` varchar(45) NOT NULL,
 PRIMARY KEY (`org_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `user` (
 `user_id` int(11) NOT NULL AUTO_INCREMENT,
 `org_id` int(11) NOT NULL,
 `email` varchar(45) NOT NULL,
 `priviliges` int(11) NOT NULL COMMENT 'INT chosen as multiple levels of priviliges might be introduced later. 0 = standard rights, 1 = admin',
 `user_name` varchar(45) NOT NULL,
 `password` varchar(45) NOT NULL,
 `adress` varchar(45) DEFAULT NULL,
 `phone` varchar(20) NOT NULL,
 `image` blob,
 `reg_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (`user_id`),
 KEY `org_id` (`org_id`),
 CONSTRAINT `user_ibfk_1` FOREIGN KEY (`org_id`) REFERENCES `organization` (`org_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `event` (
 `event_id` int(11) NOT NULL AUTO_INCREMENT,
 `org_id` int(11) NOT NULL,
 `event_name` varchar(45) NOT NULL,
 `place` varchar(45) NOT NULL,
 `event_start` date NOT NULL,
 `event_end` date NOT NULL,
 `longitude` double NOT NULL,
 `latitude` double NOT NULL,
 PRIMARY KEY (`event_id`),
 KEY `org_id` (`org_id`),
 CONSTRAINT `event_ibfk_1` FOREIGN KEY (`org_id`) REFERENCES `organization` (`org_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `user_event` (
 `user_id` int(11) NOT NULL,
 `event_id` int(11) NOT NULL,
 `job_position` varchar(45) NOT NULL,
 PRIMARY KEY (`user_id`,`event_id`),
 KEY `event_id` (`event_id`),
 CONSTRAINT `user_event_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
 CONSTRAINT `user_event_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `event` (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `artist` (
 `artist_id` int(11) NOT NULL AUTO_INCREMENT,
 `event_id` int(11) NOT NULL,
 `artist_name` varchar(45) NOT NULL,
 `riders` longblob,
 `hospitality_riders` longblob,
 `artist_contract` longblob,
 `email` varchar(45) NOT NULL COMMENT 'row should contain at least one of "email" or "phone"',
 `phone` varchar(20) NOT NULL COMMENT 'row should contain at least one of "email" or "phone"',
 `image` blob,
 PRIMARY KEY (`artist_id`),
 KEY `event_id` (`event_id`),
 CONSTRAINT `artist_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `event` (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `ticket` (
 `ticket_id` int(11) NOT NULL AUTO_INCREMENT,
 `event_id` int(11) NOT NULL,
 `ticket_type` varchar(45) NOT NULL,
 `amount` int(11) NOT NULL,
 `description` text,
 `price` int(11) NOT NULL,
 `amount_sold` int(11) NOT NULL,
 PRIMARY KEY (`ticket_id`),
 KEY `event_id` (`event_id`),
 CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `event` (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;