'use strict';

const mockDBCalls = require('../database/index');

const getItemsHandler = async (request, response) => {
  try {
    const data = await mockDBCalls.getItems();
    console.log(data)
    return response.status(200).send(JSON.stringify(data));
  } catch (err) {
    return response.status(500).send("Server Error");
  }

};

module.exports = app => {
  app.get('/items', getItemsHandler);
};