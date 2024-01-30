const sql = require('better-sqlite3');
const db = sql('anyName.db');



// ------------- 1. Get All User From Data BAse  ----------------
export async  function getUSer () {
    await  new Promise((resolve) => setTimeout(resolve, 2000))
     // -------------- Select ALl Columns From User Table   -------------
    const user = db.prepare('SELECT * FROM user');
    // throw  new Error('Error Occures')
     return user.all();
}