use guarino;

DROP TABLE IF EXISTS ParticipatingIn;
DROP TABLE IF EXISTS UserPracticeSpace;
DROP TABLE IF EXISTS MusicianProfile;
DROP TABLE IF EXISTS UserAvailability;
DROP TABLE IF EXISTS Session;
DROP TABLE IF EXISTS PracticeSpace;
DROP TABLE IF EXISTS User;

CREATE TABLE User(email VARCHAR (100) PRIMARY KEY, password VARCHAR (100), fname VARCHAR (20) NOT NULL, lname VARCHAR (20) NOT NULL, TN VARCHAR (20));
CREATE TABLE PracticeSpace(address VARCHAR (100) PRIMARY KEY, num_occupants INT NOT NULL, description VARCHAR (200));
CREATE TABLE Session(ID INT PRIMARY KEY AUTO_INCREMENT, description VARCHAR(100), start_time DATETIME, end_time DATETIME, location VARCHAR(100) NOT NULL, FOREIGN KEY (location) REFERENCES PracticeSpace(address), 
	UNIQUE (start_time, end_time, location));
CREATE TABLE UserAvailability(email VARCHAR (100), start_time DATETIME, end_time DATETIME, FOREIGN KEY (email) REFERENCES User(email), PRIMARY KEY (email, start_time, end_time));
CREATE TABLE MusicianProfile(email VARCHAR (100), instrument VARCHAR (50), years_playing INT, equipment_level VARCHAR (100), favorite_genres VARCHAR (100), 
	FOREIGN KEY (email) REFERENCES User(email), PRIMARY KEY (email, instrument));
CREATE TABLE UserPracticeSpace(email VARCHAR (100), address VARCHAR (100), FOREIGN KEY (email) REFERENCES User(email), FOREIGN KEY (address) REFERENCES PracticeSpace(address), PRIMARY KEY (email, address));
CREATE TABLE ParticipatingIn(email VARCHAR(100), sessionID INT, FOREIGN KEY (email) REFERENCES User(email), FOREIGN KEY (sessionID) REFERENCES Session(ID), PRIMARY KEY (email, sessionID));

INSERT INTO User VALUES ("humbleworm@sonic.net", "reignsupreme",  "Andrea", "Austin", "7075551111");
INSERT INTO User VALUES ("jmguarino@sonic.net",  "m", "Justin", "Guarino", "7075552222");
INSERT INTO User VALUES ("claire@bandcamp.com", "chickensupreme", "Claire N", " Ette", "7075553333");
INSERT INTO User VALUES ("johnb@ledzeppelin.com",  "cutlesssupreme", "John", "Bonham", "7075554444");
INSERT INTO User VALUES ("jimmy@ledzeppelin.com",  "itsme", "Jimmy", "Page", "7075555555");
INSERT INTO User VALUES ("johnp@ledzeppelin.com",  "andjb", "John Paul", "Jones", "7075556666");
INSERT INTO User VALUES ("robert@ledzeppelin.com",  "downforthe", "Robert", "Plant", "7075557777");
INSERT INTO User VALUES ("devnull@sonic.net",  "doubletree", "Ann R", "Key", "7075558888");
INSERT INTO User VALUES ("danny@toolband.com",  "whatdidyou", "Danny", "Carey", "7075559999");
INSERT INTO User VALUES ("atatious@sonic.net", "thinkiwas",  "Austin", "Tatious", "7075551212");
INSERT INTO User VALUES ("will@omnivore.com",  "goingtosay", "Will D", "Beast", "7075551313");

INSERT INTO PracticeSpace VALUES("15452 Cabrito Road Suite 101, Van Nuys, CA 91406", 10, "Sound City Studios");
INSERT INTO PracticeSpace VALUES("1750 Vine St, Los Angeles, CA 90028", 10, "Capitol Studios");
INSERT INTO PracticeSpace VALUES("3 Abbey Rd, London NW8 9AY, United Kingdom", 10, "Abbey Road Studios");
INSERT INTO PracticeSpace VALUES("2648 W Grand Blvd, Detroit, MI 48208", 8, "Hitsville USA");
INSERT INTO PracticeSpace VALUES("29 Melbury Rd, Kensington, London W14 8AB, UK", 8, "The Tower House");
INSERT INTO PracticeSpace VALUES("2120 Jennings Ave, Santa Rosa, CA 95404", 4, "Claire's Garage- small space, only able to play until 7pm");
INSERT INTO PracticeSpace VALUES("7908 Bodega Ave, Sebastopol, CA 95472", 2, "Tiny studio in my office, very limited space.");

INSERT INTO MusicianProfile VALUES("jimmy@ledzeppelin.com", "Guitar", 59, "Professional", "Rock, Blues, Folk");
INSERT INTO MusicianProfile VALUES("johnb@ledzeppelin.com", "Drums", 53, "Professional", "Rock");
INSERT INTO MusicianProfile VALUES("johnp@ledzeppelin.com", "Bass", 55, "Professional", "Rock");
INSERT INTO MusicianProfile VALUES("johnp@ledzeppelin.com", "Keyboard", 55, "Professional", "Rock");
INSERT INTO MusicianProfile VALUES("robert@ledzeppelin.com", "Vocals", 50, "Professional", "Rock, Blues, Folk, Country");
INSERT INTO MusicianProfile VALUES("jmguarino@sonic.net", "Bass", 1, "Beginner", "Rock");
INSERT INTO MusicianProfile VALUES("jmguarino@sonic.net", "Drums", 6, "Intermediate", "Rock");
INSERT INTO MusicianProfile VALUES("humbleworm@sonic.net", "Guitar", 10, "Intermediate", "Pop, Rock");
INSERT INTO MusicianProfile VALUES("humbleworm@sonic.net", "Vocals", 10, "Intermediate", "Pop, Rock");

INSERT INTO UserPracticeSpace VALUES("jimmy@ledzeppelin.com", "29 Melbury Rd, Kensington, London W14 8AB, UK");
INSERT INTO UserPracticeSpace VALUES("jmguarino@sonic.net", "7908 Bodega Ave, Sebastopol, CA 95472");
INSERT INTO UserPracticeSpace VALUES("humbleworm@sonic.net", "3 Abbey Rd, London NW8 9AY, United Kingdom");

INSERT INTO UserAvailability VALUES("jmguarino@sonic.net", '2015-11-15 12:00:00', '2015-11-15 20:00:00');
INSERT INTO UserAvailability VALUES("jmguarino@sonic.net", '2015-11-16 12:00:00', '2015-11-16 20:00:00');
INSERT INTO UserAvailability VALUES("humbleworm@sonic.net", '2015-11-18 18:00:00', '2015-11-15 20:00:00');
INSERT INTO UserAvailability VALUES("humbleworm@sonic.net", '2015-11-16 14:00:00', '2015-11-16 20:00:00');
INSERT INTO UserAvailability VALUES("jimmy@ledzeppelin.com", '2015-11-24 09:00:00', '2015-11-24 17:00:00');
INSERT INTO UserAvailability VALUES("jimmy@ledzeppelin.com", '2015-11-26 09:00:00', '2015-11-26 17:00:00');
INSERT INTO UserAvailability VALUES("johnb@ledzeppelin.com", '2015-11-24 09:00:00', '2015-11-24 17:00:00');
INSERT INTO UserAvailability VALUES("johnb@ledzeppelin.com", '2015-11-26 09:00:00', '2015-11-26 17:00:00');
INSERT INTO UserAvailability VALUES("robert@ledzeppelin.com", '2015-11-24 09:00:00', '2015-11-24 17:00:00');
INSERT INTO UserAvailability VALUES("robert@ledzeppelin.com", '2015-11-26 09:00:00', '2015-11-26 17:00:00');
INSERT INTO UserAvailability VALUES("johnp@ledzeppelin.com", '2015-11-24 09:00:00', '2015-11-24 17:00:00');
INSERT INTO UserAvailability VALUES("johnp@ledzeppelin.com", '2015-11-26 09:00:00', '2015-11-26 17:00:00');

INSERT INTO Session (description, start_time, end_time, location) VALUES("Andy and Justin garageband practice", '2015-11-16 14:00:00', '2015-11-16 16:00:00', "7908 Bodega Ave, Sebastopol, CA 95472");
INSERT INTO Session (description, start_time, end_time, location) VALUES("Led Zeppelin Time-Machine Practice", '2015-11-24 11:00:00', '2015-11-24 16:00:00', "29 Melbury Rd, Kensington, London W14 8AB, UK");

INSERT INTO ParticipatingIn VALUES ("jmguarino@sonic.net", 1);
INSERT INTO ParticipatingIn VALUES ("humbleworm@sonic.net", 1);
INSERT INTO ParticipatingIn VALUES ("johnb@ledzeppelin.com", 2);
INSERT INTO ParticipatingIn VALUES ("johnp@ledzeppelin.com", 2);
INSERT INTO ParticipatingIn VALUES ("robert@ledzeppelin.com", 2);

#Select all musicians who have been playing an instrument other than guitar for at least 50 years
SELECT User.fname as 'First Name', User.lname as 'Last Name', MusicianProfile.instrument as 'Instrument', User.TN as 'Telephone Number', User.email as 'Email' FROM User
JOIN MusicianProfile
ON User.email = MusicianProfile.email
WHERE MusicianProfile.years_playing >= 50 AND MusicianProfile.instrument != "Guitar"
GROUP BY User.fname;

#Show people avail for a session at a certain time
SELECT User.fname as 'First Name', User.lname as 'Last Name', MusicianProfile.instrument as 'Instrument', User.TN as 'Telephone Number', User.email as 'Email',
 UserAvailability.start_time as 'Available From', UserAvailability.end_time as 'Available Until' FROM UserAvailability
JOIN User
ON UserAvailability.email = User.email
JOIN MusicianProfile
ON UserAvailability.email = MusicianProfile.email
WHERE UserAvailability.start_time <= '2015-11-16 14:00:00' AND UserAvailability.end_time >= '2015-11-16 16:00:00';

#Show people who have a practice space that aren't already in a session
SELECT User.fname as 'First Name', User.lname as 'Last Name', PracticeSpace.address as 'Address', PracticeSpace.description as 'Space Description',
PracticeSpace.num_occupants as 'Max Occupants' FROM UserPracticeSpace
JOIN User
ON UserPracticeSpace.email = User.email
JOIN PracticeSpace
ON UserPracticeSpace.address = PracticeSpace.address
WHERE User.email NOT IN (SELECT email FROM ParticipatingIn);

#Show Drummers available for a session on 11-26-15 that have a practice space
SELECT User.fname as 'First Name', User.lname as 'Last Name', User.TN as 'Telephone Number', User.email as 'Email',
 UserAvailability.start_time as 'Available From', UserAvailability.end_time as 'Available Until', PracticeSpace.address as 'Address',
  PracticeSpace.description as 'Space Description' FROM UserAvailability
JOIN User
ON UserAvailability.email = User.email
JOIN MusicianProfile
ON UserAvailability.email = MusicianProfile.email
JOIN UserPracticeSpace
ON UserAvailability.email = UserPracticeSpace.email
JOIN PracticeSpace
ON UserPracticeSpace.address = PracticeSpace.address
WHERE UserAvailability.start_time <= '2015-11-15 23:59:59' AND UserAvailability.end_time >= '2015-11-15 00:00:00'
AND MusicianProfile.instrument = 'Drums';

#Show practice spaces in London with an max occupancy of 10 or more and list the owner
SELECT PracticeSpace.address as 'Address', PracticeSpace.description as 'Description', PracticeSpace.num_occupants as 'Max Occupants',
	CONCAT(User.fname," ",User.lname) as 'Contact Name', CONCAT("TN: ",User.TN, "    ", "Email: ", User.email) as 'Contact Info' FROM UserPracticeSpace
JOIN PracticeSpace
ON UserPracticeSpace.address = PracticeSpace.address
JOIN User
ON UserPracticeSpace.email = User.email
WHERE PracticeSpace.address LIKE '%United Kingdom%' AND PracticeSpace.num_occupants >= 10;

UPDATE UserAvailability 
SET start_time='2015-11-15 14:00:00', end_time='2015-11-15 18:00:00' 
WHERE email="jmguarino@sonic.net" AND (start_time <= '2015-11-15 23:59:59' AND end_time >= '2015-11-15 00:00:00');

SELECT * FROM UserAvailability WHERE email="jmguarino@sonic.net";

CREATE OR REPLACE VIEW PracticeSpaceOwners AS
SELECT PracticeSpace.address as 'Address', PracticeSpace.description as 'Description', PracticeSpace.num_occupants as 'Max Occupants',
	CONCAT(User.fname," ",User.lname) as 'Contact Name', CONCAT("TN: ",User.TN, "    ", "Email: ", User.email) as 'Contact Info' FROM UserPracticeSpace
JOIN PracticeSpace
ON UserPracticeSpace.address = PracticeSpace.address
JOIN User
ON UserPracticeSpace.email = User.email
GROUP BY Description;

SELECT * FROM PracticeSpaceOwners;

DROP PROCEDURE IF EXISTS User_GetByEmail;
DELIMITER //

CREATE PROCEDURE User_GetByEmail(_email VARCHAR(100))
BEGIN
	SELECT * FROM User where email=_email;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS Add_User;
DELIMITER //

CREATE PROCEDURE Add_User (_email VARCHAR(100), _password VARCHAR (100), _fname VARCHAR (20),
 _lname VARCHAR (20), _TN VARCHAR (20))
BEGIN
	INSERT INTO User VALUES(_email, _password, _fname, _lname, _TN);
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS Update_Profile;
DELIMITER //

CREATE PROCEDURE Update_Profile (_email VARCHAR(100), _old_instrument VARCHAR(100), _instrument VARCHAR(100), _years_playing VARCHAR (100), 
_equipment_level VARCHAR (100), _favorite_genres VARCHAR (100))
BEGIN
	UPDATE MusicianProfile SET email=_email, instrument=_instrument, years_playing=_years_playing, equipment_level=_equipment_level, favorite_genres=_favorite_genres WHERE email=_email AND instrument=_old_instrument;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS New_Profile;
DELIMITER //

CREATE PROCEDURE New_Profile (_email VARCHAR(100), _instrument VARCHAR(100), _years_playing VARCHAR (100), 
_equipment_level VARCHAR (100), _favorite_genres VARCHAR (100))
BEGIN
	INSERT INTO MusicianProfile VALUES(_email, _instrument, _years_playing, _equipment_level, _favorite_genres);
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS Delete_Profile;
DELIMITER //

CREATE PROCEDURE Delete_Profile (_email VARCHAR(100), _instrument VARCHAR(100))
BEGIN
	DELETE FROM MusicianProfile WHERE email=_email AND instrument=_instrument;
END //
DELIMITER ;



CREATE OR REPLACE VIEW SessionParticipants AS
SELECT Session.ID as 'SessionID', User.email as 'Email', User.fname as 'FirstName', User.lname as 'LastName', location as 'Address', start_time as 'From', end_time as 'To',
description as 'Description' FROM Session
JOIN ParticipatingIn
ON Session.ID = ParticipatingIn.SessionID
JOIN User
ON ParticipatingIn.email = User.email;

SELECT * FROM SessionParticipants;

DROP PROCEDURE IF EXISTS Get_Session_View;
DELIMITER //

CREATE PROCEDURE Get_Session_View (_email VARCHAR(100))
BEGIN
	SELECT * FROM SessionParticipants WHERE SessionID = (SELECT SessionID FROM SessionParticipants WHERE Email=_email);
END //
DELIMITER ;

CALL Get_Session_View("jmguarino@sonic.net");

