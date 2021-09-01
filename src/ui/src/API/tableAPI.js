  
const baseUrl = 'http://localhost:3000';

export const getUsers = () => (
  fetch([baseUrl, 'users'].join('/')).then(res => res.json())
);

export const getItems = () => (
  fetch([baseUrl, 'items'].join('/')).then(res => res.json())
);

export const getListOfAge = item => (
  fetch([baseUrl, 'users', `age?item=${item}`].join('/')).then(res => res.json())
);