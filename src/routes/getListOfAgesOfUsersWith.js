'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    try {
        const ItemToLookup = request.query.item;
        const data = await mockDBCalls.getListOfAgesOfUsersWith(ItemToLookup);
        return response.status(200).send(JSON.stringify(data));
      } catch (err) {
        return response.status(500).send("Server Error");
      }
    
};

module.exports = (app) => {
    app.get('/users/age', getListOfAgesOfUsersWithHandler);
};
