CREATE DATABASE college;
USE college;

CREATE TABLE student(
    rollno INT PRIMARY KEY,
    name VARCHAR(50),
    marks INT NOT NULL,
    grade VARCHAR(1),
    city VARCHAR(20)
);

INSERT INTO student (rollno, name, marks, grade, city) VALUES
(101, 'Arindam', 68, 'B', 'Kolkata'),
(102, 'Sujata', 93, 'O', 'Pune'),
(103, 'Ankita', 80, 'A', 'Kolkata'),
(104, 'Subham', 76, 'B', 'Delhi'),
(105, 'Shahwaiz', 92, 'O', 'Kolkata'),
(106, 'Chotuu', 55, 'D', 'Mumbai');

SELECT name, marks FROM student;
SELECT city FROM student;
SELECT DISTINCT city FROM student;

SELECT * FROM student WHERE marks >= 80;
SELECT * FROM student WHERE city = 'Kolkata';
SELECT * FROM student WHERE name = 'Sujata';
SELECT * FROM student WHERE marks = 55;

SELECT * FROM student WHERE city = 'Kolkata' AND marks >= 90;
SELECT * FROM student WHERE city = 'Kolkata' OR marks = 90;
SELECT * FROM student WHERE marks BETWEEN 80 AND 95;
SELECT * FROM student WHERE city IN ('Kolkata', 'Delhi');
SELECT * FROM student WHERE city IN ('Kolkata', 'Delhi', 'Prafullanagar');
SELECT * FROM student WHERE city IN ('Prafullanagar');
SELECT * FROM student WHERE city NOT IN ('Kolkata');
SELECT * FROM student WHERE name NOT IN ('Sujata');

SELECT * FROM student LIMIT 3;
SELECT * FROM student WHERE marks > 75 LIMIT 3;

SELECT * FROM student ORDER BY city ASC;
SELECT * FROM student ORDER BY name ASC;

SELECT MAX(marks) FROM student;
SELECT COUNT(name) FROM student;
SELECT MIN(marks) FROM student;
SELECT SUM(marks) FROM student;
SELECT AVG(marks) FROM student;

SELECT city, COUNT(rollno) FROM student GROUP BY city;
SELECT city, name, COUNT(rollno) FROM student GROUP BY city, name;
SELECT grade, COUNT(rollno) FROM student GROUP BY grade ORDER BY grade;

SELECT city, AVG(marks) FROM student GROUP BY city;
SELECT city, AVG(marks) FROM student GROUP BY city ORDER BY AVG(marks) ASC;
SELECT city, AVG(marks) FROM student GROUP BY city ORDER BY AVG(marks) DESC;

CREATE TABLE customer(
    Customer_id INT PRIMARY KEY,
    Customer VARCHAR(50),
    Mode VARCHAR(50),
    City VARCHAR(50)
);

INSERT INTO customer (Customer_id, Customer, Mode, City) VALUES
(101, 'Olivia Barrett', 'Netbanking', 'Porland'),
(102, 'Ethan Sinclair', 'Credit Card', 'Miami'),
(103, 'Maya Hernandez', 'Credit Card', 'Seattle'),
(104, 'Liam Donovan', 'Netbanking', 'Denver'),
(105, 'Sophin Nguyen', 'Credit Card', 'New Orleans'),
(106, 'Caleb Foster', 'Debit card', 'Minneapolis'),
(107, 'Ava Patel', 'Debit card', 'Phoenix'),
(108, 'Lucas Cartel', 'Netbanking', 'Boston'),
(109, 'Isabella Martinez', 'Netbanking', 'Nashville'),
(110, 'Jackson Brooks', 'Credit Card', 'Boston');

SELECT * FROM customer;
SELECT Mode, COUNT(Customer_id) FROM customer GROUP BY Mode;

SELECT city, COUNT(rollno) FROM student GROUP BY city HAVING MAX(marks) > 90;
SELECT city FROM student WHERE grade = 'O' GROUP BY city HAVING MAX(marks) >= 92 ORDER BY city ASC;

UPDATE student SET grade = 'O' WHERE grade = 'A';
UPDATE student SET marks = 80 WHERE rollno = 101;
UPDATE student SET grade = 'A' WHERE marks BETWEEN 80 AND 85;
UPDATE student SET grade = 'O' WHERE grade = '0';
UPDATE student SET marks = marks + 1;
UPDATE student SET marks = 12 WHERE marks = 56;
DELETE FROM student WHERE marks <= 12;

CREATE TABLE Dept(
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO Dept VALUES (101, 'English'), (102, 'IT');
UPDATE Dept SET id = 103 WHERE id = 102;

CREATE TABLE Teacher(
    id INT PRIMARY KEY,
    name VARCHAR(50),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES Dept(id) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO Teacher VALUES (101, 'Adam', 101), (102, 'Adam', 103);

ALTER TABLE student ADD COLUMN age INT;
ALTER TABLE student DROP COLUMN age;
ALTER TABLE Teacher RENAME TO Teacher_details;

ALTER TABLE student ADD COLUMN age INT NOT NULL DEFAULT 19;
ALTER TABLE student MODIFY COLUMN age VARCHAR(50);
INSERT INTO student (rollno, name, marks, grade, city, age) VALUES (107, 'Gargi', 68, 'B', 'Kolkata', 100);
ALTER TABLE student RENAME COLUMN age TO stu_age;
ALTER TABLE student DROP COLUMN stu_age;
ALTER TABLE student RENAME TO stu;

DELETE FROM stu WHERE marks < 80;
ALTER TABLE stu RENAME COLUMN name TO fullname;
ALTER TABLE stu DROP COLUMN grade;

CREATE TABLE student (
    student_id INT,
    name VARCHAR(50)
);

INSERT INTO student (student_id, name) VALUES
(101, 'adam'), (102, 'bob'), (103, 'casey');

CREATE TABLE course (
    student_id INT,
    course VARCHAR(50)
);

INSERT INTO course (student_id, course) VALUES
(102, 'english'), (105, 'math'), (103, 'science'), (107, 'computer science');

SELECT * FROM student INNER JOIN course ON student.student_id = course.student_id;
SELECT * FROM student AS s INNER JOIN course AS c ON s.student_id = c.student_id;

SELECT * FROM student AS s LEFT JOIN course AS c ON s.student_id = c.student_id;
SELECT * FROM student AS s RIGHT JOIN course AS c ON s.student_id = c.student_id;

SELECT * FROM student AS s LEFT JOIN course AS c ON s.student_id = c.student_id
UNION
SELECT * FROM student AS s RIGHT JOIN course AS c ON s.student_id = c.student_id;

SELECT * FROM student AS s LEFT JOIN course AS c ON s.student_id = c.student_id WHERE c.student_id IS NULL;
SELECT * FROM student AS s RIGHT JOIN course AS c ON s.student_id = c.student_id WHERE s.student_id IS NULL;
SELECT * FROM student AS s LEFT JOIN course AS c ON s.student_id = c.student_id
WHERE s.student_id IS NULL
UNION
SELECT * FROM student AS s RIGHT JOIN course AS c ON s.student_id = c.student_id
WHERE c.student_id IS NULL;

CREATE TABLE employee(
    id INT PRIMARY KEY,
    name VARCHAR(50),
    manager_id INT
);

INSERT INTO employee (id, name, manager_id) VALUES
(101, 'adam', 103), (102, 'bob', 104), (103, 'casey', NULL), (104, 'donald', 103);

SELECT * FROM employee;
SELECT * FROM employee AS a JOIN employee AS b ON a.id = b.manager_id;
SELECT a.name AS manager_name, b.name FROM employee AS a JOIN employee AS b ON a.id = b.manager_id;

SELECT name FROM employee UNION SELECT name FROM employee;
SELECT name FROM employee UNION ALL SELECT name FROM employee;

CREATE TABLE studentnew(
    rollno INT PRIMARY KEY,
    name VARCHAR(50),
    marks INT NOT NULL,
    grade VARCHAR(1),
    city VARCHAR(20)
);

INSERT INTO studentnew (rollno, name, marks, grade, city) VALUES
(101, 'Arindam', 68, 'B', 'Kolkata'),
(102, 'Sujata', 93, 'O', 'Pune'),
(103, 'Ankita', 80, 'A', 'Kolkata'),
(104, 'Subham', 76, 'B', 'Delhi'),
(105, 'Shahwaiz', 92, 'O', 'Kolkata'),
(106, 'Chotuu', 55, 'D', 'Mumbai');

SELECT * FROM studentnew;
SELECT AVG(marks) FROM studentnew;
SELECT name, marks FROM studentnew WHERE marks > (SELECT AVG(marks) FROM studentnew);

SELECT rollno FROM studentnew WHERE rollno % 2 = 0;
SELECT name, rollno FROM studentnew WHERE rollno IN (102, 104, 106);
SELECT name, rollno FROM studentnew WHERE rollno IN (
    SELECT rollno FROM studentnew WHERE rollno % 2 = 0
);

SELECT MAX(marks) FROM (SELECT * FROM studentnew WHERE city = 'Delhi') AS temp;
SELECT MAX(marks) FROM studentnew WHERE city = 'Delhi';
SELECT * FROM studentnew WHERE city = 'Delhi';

SELECT (SELECT MAX(marks) FROM studentnew) AS max_marks, name FROM studentnew;

CREATE VIEW view1 AS SELECT rollno, name, marks FROM studentnew;
SELECT * FROM view1;
SELECT * FROM view1 WHERE marks > 90;
DROP VIEW view1;
