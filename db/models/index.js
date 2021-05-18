const mysql = require ('mysql');

const config = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "bestbuy"
}

const Connecion = mysql.createPool(config);

const Query = (query, values) => {
    return new Promise((resolve, reject) => { 
        Connecion.query(query, values, (err,results) => {
            if(err) reject(err);
            resolve(results);
        });
    });
};

module.exports = {Query};