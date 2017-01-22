/**
 * Created by HP-ProBook on 22.01.2017.
 */
const db = require('mysql');
const mainDbName = require('./utils');

class MySQL {
    constructor(host,user,password=""){
        this.host = host;
        this.user = user;
        this.password = password;
        this.query = null;
        this.connection = null;
    }
    createConnection(database){
        this.connection = db.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: database
        });
    }
    static isAdmin(data){
        return new Promise((resolve,reject)=>{
            sql.connection.query('SELECT * FROM admins', (err, result)=>{
                var user = result.find((adm)=>{
                    return adm.email === data.email && adm.password === data.password;
                });
                if (user) {
                    resolve(user)
                } else reject();
            });
        })
    }
    static checkBase(sql){
        return new Promise((resolve, reject)=>{
            "use strict";
            sql.connection.query('SHOW DATABASES', (err,result)=>{
                resolve(
                    result.find((dbase)=> dbase['Database'] ===  mainDbName)
                );
            })
        });
    }
    static select(sql, dbname){
        "use strict";
        return new Promise((resolve, reject)=>{
            sql.connection.query('use ${dbname}', (err, result)=>{
                resolve();
            });
        });
    }
    static createBase(sql){
        "use strict";
        return new Promise((resolve, reject)=>{
            sql.connection.query(`CREATE DATABASE ${mainDbName} CHARACTER SET utf8 COLLATE utf8_general_ci`, (err, result)=>{

            });
        });

    }
    static getCourses(){
        return new Promise((resolve, reject)=>{
            sql.connection.query('SELECT * FROM courses', function (err, result) {
                if (result) {
                    resolve(result);
                } else reject();
            });
        });
    }
    static createCourse(data){
        return new Promise((resolve, reject)=>{
            sql.connection.query(`INSERT INTO courses (title,video,html,is_hidden) VALUES ("${data.title}", "${data.video}", "${data.html}", ${data.is_hidden})`, (err, result, fields)=>{
                if (result){
                    resolve(result);
                } else reject();
            });
        });
    }
}

const sql = new MySQL('localhost', 'root');
sql.createConnection(mainDbName);


//MySQL.checkBase(sql).then((result)=>{
//    "use strict";
//    if (result) {
//        return MySQL.select(sql, result['Database']);
//    } else {
//        return MySQL.createBase(sql);
//    }
//}).then((result)=>{
//    "use strict";
//    sql.connection.query('SELECT * FROM admins', (err,result)=>{
//        console.log('64', result);
//    });
//});

module.exports = MySQL;
