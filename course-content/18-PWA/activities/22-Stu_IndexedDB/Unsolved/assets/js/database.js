import { openDB } from 'idb';

const initdb = async () =>

// TODO: Add a comment explaining what this method does
// A logical test against name and version

  openDB('todos', 1, {
    // TODO: Add a comment explaining the functionality of this method:
    // It is checking if a db by this name already exits, if it does give positive feedback on console
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      // If db doesnt exits, create new one using the name we are giving it
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

initdb();
