// This is our model


const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function create(data) {
    const result = await db.query(`INSERT INTO languages_programming (name, year_launch , github_rank ) 
    VALUES ('${data.name}', 
        ${data.year_launch},
        ${data.github_rank});`
        )
    
        let message = `Error to create the language programming in the db`
        if(result.affectedRows){
            message = `The languague was create successfully`
        }
        return {message};
}

async function read(page = 1) {
    const offSet = helper.getOffSet(page, config.listPerPage);
    const rows = await db.query(
        `SELECT * FROM languages_programming LIMIT ${config.listPerPage};`
    );
    const data = helper.emptyorRows(rows);
    const metadata = {page};

    return {
        data,
        metadata
    }
}


module.exports = {
    create, 
    read
}