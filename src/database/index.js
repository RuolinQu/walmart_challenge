'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getItems = () => {

    const dataAccessMethod = () => {
      let items = [];
      _.map(db.itemsOfUserByUsername, itemsList => {
        itemsList.forEach(item => {
          if (!items.includes(item)) {
            items.push(item);
          }
        });
      });
      return items;
    };
    return mockDBCall(dataAccessMethod);
};
  

const getListOfAgesOfUsersWith = (item) => {

    const dataAccessMethod = () => {
        const usersByid = db.usersById;
        const itemOfUsers = db.itemsOfUserByUsername;
        let ans = new Map()
        for (let key in usersByid) {
            let userName = usersByid[key].username;
            let age = usersByid[key].age;
            if (itemOfUsers[userName].includes(item)) {
                if (ans.has(age)) {
                    ans.set(age, ans.get(age) + 1);
                  } else {
                    ans.set(age, 1);
                  }
            }
        }
        let res = Array.from(ans)
        res.sort((a, b) => a[0] - b[0]);
        return res
    }
    return mockDBCall(dataAccessMethod);

}

module.exports = {
    getItems,
    getUsers,
    getListOfAgesOfUsersWith
};
