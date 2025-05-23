import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('aquadex.db');

export const setupDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS fishes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT
      );`
    );
  });
};

export const addFish = (name, description) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO fishes (name, description) VALUES (?, ?)', [name, description]);
  });
};

export const getFishes = (callback) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM fishes', [], (_, { rows }) => {
      callback(rows._array);
    });
  });
};
