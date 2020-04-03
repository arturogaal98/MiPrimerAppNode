const mysql = require('mysql');

module.exports = () => {


    return mysql.createConnection({
        host: 'sql3.freemysqlhosting.net',
        user: 'sql3330824',
        password: 'Ry1paBfPaZ',
        database: 'sql3330824'
    });

    /*return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'news_portal'
    });*/



}