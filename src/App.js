import React,  { useState }from 'react'
import {Upload, Button} from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

import { Menu } from 'antd';

const items = [
  {
    key: '1',
    label: (
      // <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
      //   1st menu item
      // </a>
      <div>Node JS</div>
    ),
  },
  {
    key: '2',
    label: (
      <div>Python (Flask)</div>
    ),
  },
];


export default function App() {
  return (
    <div style={{
      display:'flex',
    flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      height:'100vh',
      width:'100%',
    }}>
      {/* <Menu width={'100%'} mode="horizontal" items={items} /> */}
<Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Select Source Framework
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
    <br/>
  <Dropdown
  style={{backgroundColor:"blue"}}
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Select Output Framework
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  <br/>
      <Upload.Dragger style={{width:'500px', height:'800px'}} height={'500px'}backgroundColor ={'#00001f'}accept='.zip' listType='picture' action={'https://localhost:3000'}>
        Drag your project zip or 
        <br/>
        <Button color='black' >Upload Project Zip</Button>
        </Upload.Dragger>

    </div>
  )
}
