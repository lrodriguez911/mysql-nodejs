// This is our model


const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function getMultiple(page = 1) {
    const offSet = helper.getOffSet(page, config.listPerPage);
    const rows = await db.query(
        `SELEC * FROM languages_programming LIMIT ${offSet}, ${config.listPerPage}`
    );
    const data = helper.emptyorRows(rows);
    const metadata = {page};

    return {
        data,
        metadata
    }
}

module.exports = {
    getMultiple
}