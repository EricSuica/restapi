const { call } = require("body-parser");
const pool = require("../../config/database");

module.exports = {
    create:(data, callBack) => {
        pool.query(
            `insert into test(name, password) values(?,?)`,
            [
                data.name,
                data.password
            ],
            (error, results, fields) => {
                if(error){
                   return callBack(error);
                }
                return callBack(null, results)
            }
        );
    }
};