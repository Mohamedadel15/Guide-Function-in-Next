const sql = require('better-sqlite3');
const db = sql('anyName.db');

const dummyData = [
    { name: 'ahmed', age: 25 },
    { name: 'Jane', age: 24 },
    { name: 'Jack', age: 27 },
    { name: 'Jill', age: 26 },
    ];

// -------------------------- 1. Create table if not exists --------------------------
db.prepare(`
    CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER CHECK(age > 0)
    );
`).run();


async function init() {
    const insert = db.prepare(`
        INSERT INTO user (name, age) VALUES (@name, @age);
    `);

    for (const user of dummyData) {
        insert.run(user);
    }
}

init().then(() => {
    console.log('Done');
});





