import React,{useState,useEffect} from 'react'
import { Table, Divider } from 'antd'
import { getUsers } from '../../API/tableAPI.js'
import 'antd/dist/antd.css'

import './index.css'
import { nanoid } from 'nanoid'

const columns = [
    {
      title: 'Name',
      dataIndex: 'username',
      render: text => <p>{text}</p>,
      align: 'center',
      key:"user-name"
    },
    {
      title: 'Age',
      className: 'users-age',
      dataIndex: 'age',
      align: 'center',
      key:"user-age",
    },
  ];

export default function UsersTable() {

    const [userData, setUserData]=useState([])

    useEffect(() => {
        getUsers().then((res) => {
            let ans=res.map((item) => {
                return {...item, key:nanoid()}
            })
            setUserData(ans)
        })
    },[])

    return (
        <div className="users-wrapper">
            <h3 className="users-text">All users</h3>
            <h6 className="users-text">Users and their age</h6>
            <Table
                columns={columns}
                dataSource={userData}
                bordered
            />
            <Divider/>
        </div>
    )
}
