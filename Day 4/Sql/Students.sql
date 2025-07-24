-- CREATE database:--

CREATE DATABASE students;
 USE students;

Create tables:--

CREATE TABLE studentInfo(
id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100) NOT NULL,
 email VARCHAR(100) UNIQUE NOT NULL,
 gender ENUM('Male', 'Female', 'Other'),
 date_of_birth DATE,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSERT values in the tables:--
					-- First Value:--
INSERT INTO studentInfo (name, email, gender, date_of_birth)
VALUES ("Arindam", "dasarindam342@gmail.com", "Male", "2025-08-02");

SELECT * from studentInfo;
					-- Second Value:--

 INSERT INTO studentInfo (name, email, gender, date_of_birth)
 VALUES ("Sujata", "sujata2004@gmail.com", "Female", "2002-02-02");
 SELECT * from studentInfo;

--  INSERT MULTIPLE VALUES: --
 INSERT INTO studentInfo (name, email, gender, date_of_birth)
 VALUES
   ("Ankita", "ankita04@gmail.com", "Female", "2007-04-17"),
   ("Subham", "subham04@gmail.com", "Male", "2007-04-17"),
   ("Riki", "devriki04@gmail.com", "Male", "2007-04-17"),
   ("Deb", "deb04@gmail.com", "Male", "2007-04-17"),
   ("Katha", "Katha04@gmail.com", "Female", "2007-04-17");  
    SELECT * from studentInfo;


