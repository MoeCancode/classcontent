# Progressive Web Applications (PWA)

## Overview

In this unit, you'll learn about Progressive Web Apps (PWAs), which blend the benefits of a traditional browser experience with those of a mobile application. PWAs use the Service Worker and Cache APIs to cache assets and API responses, which ensures that the application will continue to work without an internet connection.

Many of the tools and technologies used to create PWAs can be leveraged to help improve application performance and accessibility. One of these tools is services workers, which can be used to cache static CSS, JavaScript, HTML files, images, and even API requests. This allows developers to reduce network bandwidth and improve overall load times.

In previous units, you learned that JavaScript runs on a single thread, which is something that developers need to consider with regard to performance. The good news is that service workers run on a completely different thread.

To unlock the power of service workers, you will use webpack and workbox. Workbox is a Google library that makes it much easier to set up a service worker. By using webpack, you can deliver applications with optimized code, called bundles. Webpack also allows you to implement CSS loaders to make your CSS files more modular. 

You will also implement Babel, a transpiler that allows you to use ES6 syntax in the browser. Finally, you will learn how to use webpack plugins.

## Key Topics

The following topics will be covered in this unit:

* [Lighthouse](https://developers.google.com/web/tools/lighthouse)

* [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

* [Webpack](https://webpack.js.org/concepts/)

* [ES6 Import Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

* [CSS loaders](https://www.npmjs.com/package/css-loader)

* [Babel](https://babeljs.io/)

* [HTMLWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)

* [Webpack Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)

* [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)

* [Service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

* [Workbox](https://developers.google.com/web/tools/workbox)

* [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache)

* [Workbox routing](https://developers.google.com/web/tools/workbox/modules/workbox-routing)

* [Workbox strategies](https://developers.google.com/web/tools/workbox/modules/workbox-strategies)

* [Concurrently](https://www.npmjs.com/package/concurrently)

* [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

* [idb](https://www.npmjs.com/package/idb)

* [Manifest](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)

* [WebpackPwaManifest](https://www.npmjs.com/package/webpack-pwa-manifest)

## Learning Objectives

You will be employer-ready if you are able to:

* Recognize which metrics in a Lighthouse audit affect page load times.

* Identify the main purpose of a module bundler like webpack.

* Set up webpack dependencies in an application using npm scripts.

* Create a bundle and use it to provide interaction for a webpage.

* Compare webpack in development vs. production mode.

* Extend webpack’s functionality for non-JavaScript files, transpile modern JavaScript for older browsers, and automate bundle output file names.

* Create an `index.html` file using a template with a webpack plugin to automate bundle insertion.

* Implement service workers to a web application.

* Leverage caching strategies to optimize performance.

* Execute a full-stack application with a server and client-side development server.

* Implement IndexedDB inside of a JavaScript application.

* Implement CREATE, READ, UPDATE, and DELETE commands for an IndexedDB instance.

* Convert an existing application into a Progressive Web Application (PWA).

* Deploy a PWA to Heroku.


### Git Guide

Refer to the Git Guide to review the git concept for this unit. Watch the Git Guide Video for an additional walkthrough of the Git concept.


  * 📹 [Git Guide Video: Git Hooks](https://2u-20.wistia.com/medias/xpb67vj99g)

---

