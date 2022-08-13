# MySQL

## Overview

In this unit, we add the final layer to our stack: the database. While it is the last, it is by no means the least. Databases are the foundation of full-stack web applications. Although we began our journey on the client-side, it will be more useful from this point on to approach application development from the bottom up. When using our applications, what is most important to our users is being able to store and retrieve data. Once we determine how we will model that data, we can then set about determining the best way to deliver it to the front-end via our server-side API. 

In simplest terms, a database is a collection of data stored electronically. The database management system (DBMS) we will be using in this unit is MySQL. MySQL is the most popular SQL database. The SQL in MySQL is short for Structured Query Language, and that structure is _relational_. A relational database stores and finds data based on its relationship to other data in the database. Relational databases are tabular, meaning data is stored in tables composed of rows and columns, much like a spreadsheet. 

We will begin the unit using GUI's, such as MySQL Workbench, to interface with our databases, but by the end of the unit you should be proficient using the MySQL command line prompt. We will then connect our Node.js servers to our MySQL databases to perform queries based on client requests and return responses accordingly. 

## Key Topics

The following topics will be covered in this unit:

* [MySQL Shell](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-getting-started.html)

* [Creating and selecting a database](https://dev.mysql.com/doc/refman/8.0/en/creating-database.html)

* [Creating tables](https://dev.mysql.com/doc/refman/8.0/en/creating-tables.html)

* [SELECT statement](https://dev.mysql.com/doc/refman/8.0/en/select.html)

* [INSERT statement](https://dev.mysql.com/doc/refman/8.0/en/insert.html)

* [UPDATE statement](https://dev.mysql.com/doc/refman/8.0/en/update.html)

* [DELETE statement](https://dev.mysql.com/doc/refman/8.0/en/delete.html)

* [Connecting MySQL to Node.js app using mysql2](https://www.npmjs.com/package/mysql2)

* [Data types](https://dev.mysql.com/doc/refman/8.0/en/data-types.html)

* [Schemas](https://docs.oracle.com/cd/B19306_01/server.102/b14220/schema.htm)

* [Seeds](https://dev.mysql.com/doc/refman/8.0/en/loading-tables.html)

* [Primary keys](https://dev.mysql.com/doc/refman/8.0/en/constraint-primary-key.html)

* [Foreign keys](https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html)

* [Prepared statements](https://dev.mysql.com/doc/refman/8.0/en/sql-prepared-statements.html)

* [Aggregate functions](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html)

* [Joins](https://dev.mysql.com/doc/refman/8.0/en/join.html)

## Learning Objectives

You will be employer-ready if you are able to:

* Use MySQL Shell to execute commands.

* Create a database schema.

* Seed a database for use in application development.

* Perform CRUD functions using MySQL commands.

* Specify the relationship between tables using primary and foreign keys.

* Write a SQL query that joins two tables together.

* Implement `?` prepared statements in conjunction with `INSERT`, `UPDATE`, and `DELETE`

* Perform a calculation on a set of values using aggregate functions.


### Git Guide

Refer to the Git Guide to review the Git concept for this unit. Watch the `📹 Git Guide` video for an additional walkthrough of the Git concept.

  * 📹 [Git Guide Video: Git Cherry-Pick](https://2u-20.wistia.com/medias/wkipdjl81o)

### Full-Stack Blog Posts

Check out the [Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/) for additional resources, like walkthroughs, articles, and installation guides.

  * 📖 Blog Post: [MySQL Installation Guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide)

  * 📖 Blog Post: [MySQL Reference Guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-reference-guide)

  * 📖 Blog Post: [Deploy with Heroku and MySQL](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql)

### General

Refer to these resources for additional information about topics covered in this unit.

  * 📖 [MySQL documentation on getting started](https://dev.mysql.com/doc/mysql-getting-started/en/)
  
  * 📖 [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2)

## Helpful Links

* [SQL](https://en.wikipedia.org/wiki/SQL)

* [MySQL](https://en.wikipedia.org/wiki/MySQL)

* [MySQL - W3 Schools](http://www.w3schools.com/sql/)

* [MySQL Workbench Documentation](http://dev.mysql.com/doc/workbench/en/)

* [MySQL NPM Package](https://www.npmjs.com/package/mysql)
