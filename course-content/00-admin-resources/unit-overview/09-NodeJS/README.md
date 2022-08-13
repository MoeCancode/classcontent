# Node.js

## Overview

You’ve arrived at another important milestone in your journey. The JavaScript you wrote for your first project was executed entirely on the client side, though it used third-party server-side APIs. In this and later units, you’ll learn how to write your own server-side applications to handle requests and ultimately to build your own APIs.

In a previous era, this would be the point when you’d begin learning a second programming language, like PHP, to write server-side code. Luckily, Node.js&mdash;released in 2009&mdash;makes this unnecessary. Node.js is an implementation of the V8 JavaScript engine without Chrome. It allows you to write server-side code using JavaScript. This means that you no longer need a browser to run JavaScript. You can (and will) do so from the command line!

In this unit, you’ll learn how to initialize a Node.js project, install third-party dependencies, and create interactive command-line applications. Node.js ships with a **standard library**. The standard library contains a number of modules that allow you to extend the functionality of Node.js, like `fs`, which you’ll use to read and write files. You’ll also learn how to add a large and robust ecosystem of third-party modules to applications to extend their functionality.

## Key Topics

The following topics will be covered in this unit:

* [Node.js](https://en.wikipedia.org/wiki/Node.js)

    * [process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv)

    * [fs](https://node.readthedocs.io/en/latest/api/fs/)

* Modularization

    * [require()](https://nodejs.org/api/modules.html#modules_require_id)

    * [module.exports](https://nodejs.org/api/modules.html#modules_module_exports)

* [npm](https://docs.npmjs.com/about-npm/)

    * [package.json](https://docs.npmjs.com/creating-a-package-json-file)

    * [npm init](https://docs.npmjs.com/cli/init)

    * [node_modules](https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders)

* [inquirer](https://www.npmjs.com/package/inquirer/v/0.2.3)

* [ES6](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_%E2%80%93_ECMAScript_2015)

    * [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) and [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

    * [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

    * [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

    * Array methods ([map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce))

    * [Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and rest

    * [Destructuring arrays and objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

* [Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)

    * [Callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

    * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Learning Objectives

You will be employer-ready if you are able to: 

* Build interactive command-line applications that process user input.

* Explain modularization and how it relates to npm and the standard library.

* Initialize new Node.js projects with npm, and install and import dependencies.

* Explain the importance and usefulness of ES6+ concepts such as `let`, `const`, and arrow functions.

* Handle asynchronicity with callbacks and Promises.

### Git Guide

Refer to the Git Guide to review the git concept for this unit. Watch the `📹 Git Guide` video for an additional walkthrough of the git concept.

  * 📖 [Git Guide: Git Fork](./01-Activities/27-Evr_Git-Fork)

  * 📹 [Git Guide Video: Git Fork](https://2u-20.wistia.com/medias/tyiqf0rns2)


### Full-Stack Blog Posts

Check out the [Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/) for additional resources, like walkthroughs, articles, and installation guides.

  * 📖 [Node.js installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs)

---

