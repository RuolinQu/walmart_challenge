import React from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css'

import './index.css'

const columns = [
    {
      title: 'Name',
      dataIndex: 'username',
      render: text => <p>{text}</p>,
      align: 'center',
    },
    {
      title: 'Age',
      className: 'users-age',
      dataIndex: 'age',
      align: 'center',
    },
  ];
  
const data =
    [
        { "username": "John", "age": 18 },
        { "username": "Paul", "age": 29 },
        { "username": "Rita", "age": 12 },
        { "username": "Erica", "age": 90 },
        { "username": "Tina", "age": 90 }
    ]
  


export default function UsersTable() {
    return (
        <div className="users-wrapper">
            <h3 className="users-text">All users</h3>
            <h6 className="users-text">Users and their age</h6>
            <Table
                columns={columns}
                dataSource={data}
                bordered
            />
        </div>
    )
}
