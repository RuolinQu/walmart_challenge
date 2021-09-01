import React,{useState,useEffect} from 'react'
import { getItems,getListOfAge } from '../../API/tableAPI.js'
import { Select,Table} from 'antd'
import { nanoid } from 'nanoid';

import './index.css'

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
    const [cols, setCols] = useState([])
    const [loading,setLoading]= useState(false)

    useEffect(() => {
        getItems().then(data => {
            setItems(data)
        })
    }, [])

    useEffect(() => {
        setLoading(true)
        getListOfAge(curItem).then(res => {
            setLoading(false)
            setData(res)
        })
    }, [curItem])

    useEffect(() => {
        getListOfAge(curItem).then(data => {
            let obj=[]
            data.forEach((item, index) => {
                obj.push({ 'age':item[0],'count':item[1],'key':nanoid()})
            })
            setCols(obj)
        })
    }, [data])

    function handleChange(value) {
        setCurItem(value)
      }
      

    return (
        <div className="ageTable-wrapper">
            <header>Age DemoGraphic of Users With {curItem}</header>
            <div className="menu-wrapper">
                <Select style={{ width: 120 }}
                    placeholder="item"
                    onChange={handleChange}>
                    {items.map((item, index) => (
                        <Option
                            key={nanoid()}
                            value={item}
                        >{item}</Option>
                    ))}
                </Select>
                <Table
                columns={columns}
                dataSource={cols}
                    loading={loading}
                    bordered
                    
                 />
            </div>
        </div>
    )
}
