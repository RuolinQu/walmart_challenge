import React,{useState,useEffect} from 'react'
import { getItems,getListOfAge } from '../../API/tableAPI.js'
import { Select,Table} from 'antd'

import './index.css'
import { set } from 'lodash';

const { Option } = Select;

const columns = [
    {
      title: 'Age',
      dataIndex: 'age',
      render: text => <p>{text}</p>,
      align: 'center',
    },
    {
      title: 'Count',
      className: 'user-count',
      dataIndex: 'count',
      align: 'center',
    },
  ];

export default function ItemList() {
    
    const [items,setItems]=useState([])
    const [curItem,setCurItem]=useState("____")
    const [data, setData] = useState([])
    const [cols,setCols]= useState([])

    useEffect(() => {
        getItems().then(data => {
            setItems(data)
        })
    }, [])

    useEffect(() => {
        getListOfAge(curItem).then(res => {
            setData(res)
        })
    }, [curItem])

    useEffect(() => {
        getListOfAge(curItem).then(data => {
            let obj=[]
            data.forEach((item, index) => {
                obj.push({ 'age':item[0],'count':item[1]})
            })
            setCols(obj)
            console.log(cols)
        })
    }, [data])

    function handleChange(value) {
        setCurItem(value)
      }
      

    return (
        <div className="ageTable-wrapper">
            <header>Age DemoGraphic of Users With {curItem}</header>
            <div className="menu-wrapper">
                <Select style={{ width: 120 }} onChange={handleChange}>
                    {items.map((item, index) => (
                        <Option value={item}>{item}</Option>
                    ))}
                </Select>
                <Table
                columns={columns}
                dataSource={cols}
                bordered
            />
            </div>
 
        </div>
    )
}
