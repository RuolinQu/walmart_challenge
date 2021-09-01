'use strict';

const mockDBCalls = require('../database/index');

const getItemsHandler = async (request, response) => {
  try {
    // throw new Error('get item route error;')
    const data = await mockDBCalls.getItems();
    return response.status(200).send(JSON.stringify(data));
  } catch (err) {
    console.log(err.message)
    return response.status(500).send("Server Error");
  }
};

module.exports = app => {
  app.get('/items', getItemsHandler);
};