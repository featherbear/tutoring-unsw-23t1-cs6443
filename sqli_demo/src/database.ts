import { redBright } from 'chalk'
import sqlite from 'better-sqlite3'

const DISABLE_WAL = process.env["DISABLE_WAL"] === undefined

export function createQuery(positions = [], ...vars) {
    let query = "";
    let fmtQuery = "";
    for (let i = 0; i < positions.length || i < vars.length; ++i) {
        positions[i] && (fmtQuery += (query += positions[i]) && positions[i]);
        vars[i] && (fmtQuery += redBright((query += vars[i]) && vars[i]));
    }
    
    console.info("\n" + [Array(query.length + 7).fill('-').join(""), "query> " + fmtQuery].join("\n"));
    return query;
}

export function init() {
    const db = sqlite(':memory:')

    db.exec(`
    CREATE TABLE users (
        id integer primary key, 
        username string,
        password string
    );

    INSERT INTO users 
    ( username, password ) 
    VALUES 
    ( 'andrew', 'andrew' ),
    ( 'admin', 'admin' ),
    ( 'secret', 'FLAG{SECRET_FLAG}' ),
    ( 'topmen', 'password' )
    `)
    // USER_DOESNT_EXIST

    
    db.exec(`
    CREATE TABLE stock (
        id integer primary key, 
        item string,
        count integer
    );

    INSERT INTO stock
    ( item, count ) 
    VALUES 
    ( 'books', 24 ),
    ( 'pens', 15 ),
    ( 'pencils', 3 ),
    ( 'bag', 9 ),
    ( 'friends', 0 )
    `)
    // USER_DOESNT_EXIST

    


    if (DISABLE_WAL) db.pragma('journal_mode = WAL');

    return db;
}

