# NoSQL

## Overview
In the late 90s and early 2000s, developers began to explore database options that allowed their web applications to handle unstructured data to meet the growing and ever-changing demands of users and address the limitations of the relational model. While these alternative databases existed for decades prior, they didn’t receive the label NoSQL until this time period.  

The structure of a NoSQL database is something other than a table. There are several different types of NoSQL databases, such as key-value and graph. In this unit we will learn MongoDB, a document-oriented NoSQL database. MongoDB documents correspond to a row, or record, in SQL, but unlike rows, documents are analogous to JSON objects. You can see why MongoDB is a popular choice for Node.js developers! 

Rather than object-relational mapping, we will implement object-_document_ mapping, or ODM, with Mongoose.js. 

In this unit, you will learn about NoSQL databases and perform CRUD operations using MongoDB, a popular NoSQL, document-based database. You will also learn to use Mongoose, an Object Data Modeling (ODM) library with your underlying MongoDB database to enforce a specific schema and handle data relationships. Deployment of an application using Mongo Atlas and Heroku is also covered.

## Key Topics

The following topics will be covered in this unit:

* [Visually Exploring Data with MongoDB Compass](https://docs.mongodb.com/compass/master/)

* [MongoDB Databases and Collections](https://docs.mongodb.com/manual/core/databases-and-collections/)

* [MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/)

* [MongoDB Embedded Documents](https://docs.mongodb.com/manual/core/data-model-design/#std-label-data-modeling-embedding)

* [MongoDB Cursor Methods](https://docs.mongodb.com/manual/reference/method/js-cursor/)

* [Mongoose Models and Schemas](https://mongoosejs.com/docs/guide.html)

* [Mongoose CRUD Operations](https://mongoosejs.com/docs/queries.html)

* [Mongoose Instance Methods](https://mongoosejs.com/docs/guide.html#methods)

* [Mongoose Subdocuments](https://mongoosejs.com/docs/subdocs.html)

* [Mongoose Aggregate](https://mongoosejs.com/docs/api/aggregate.html#aggregate_Aggregate)

* [Mongoose Virtuals](https://mongoosejs.com/docs/tutorials/virtuals.html)

* [Mongoose Populate](https://mongoosejs.com/docs/populate.html)

* [Mongoose Subdocuments CRUD Operations](https://mongoosejs.com/docs/subdocs.html#finding-a-subdocument)

## Learning Objectives

You will be employer-ready if you are able to:

* Create and manipulate data using MongoDB Compass

* Insert, find, and return documents stored within a MongoDB database

* Update and delete documents stored in MongoDB database

* Explain how embedded documents can be used to create one-to-one and one-to-many relationships

* Limit, sort, and skip documents using MongoDB methods

* Define the structure of the database with a Mongoose schema

* Create a model to map to the MongoDB document and provide functionality

* Execute CRUD queries using Mongoose

* Explain the difference between an instance method and a static method

* Create and manipulate a subdocument

* Access MongoDB's aggregate framework through Mongoose's `aggegrate()` method

* Implement a Mongoose virtual property to create computed properties

* Configure Heroku for deployment of a Node.js application using MongoDB Atlas

### Git Guide

Refer to the Git Guide to review the git concept for this unit. Watch the `📹 Git Guide` video for an additional walkthrough of the git concept.

  * 📹 [Git Guide Video: GitHub Packages](https://2u-20.wistia.com/medias/z1aozrjw74)

### Full-Stack Blog Posts

Check out the [Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/) for additional resources, like walkthroughs, articles, and installation guides.

  * 📖 Blog Post: [How to Install MongoDB](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb)

  * 📖 Blog Post: [Set Up MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-set-up-mongodb-atlas)

  * 📖 Blog Post: [Deploy with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas)

### General

Refer to these resources for additional information about topics covered in this unit.

  * 📖 [Understanding the different types of NoSQL databases](https://www.mongodb.com/scale/types-of-nosql-databases)

  * 📖 [MongoDB docs on downloading and installing Compass](https://docs.mongodb.com/compass/current/install/)

  * 📖 [MongoDB docs on getting started](https://docs.mongodb.com/manual/tutorial/getting-started/)

  * 📖 [Mongoose docs on getting started](https://mongoosejs.com/docs/index.html)

---
