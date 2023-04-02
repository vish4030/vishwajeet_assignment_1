import React,{ useState }  from 'react';

import { Button, Space } from 'antd';
import { AliyunOutlined,PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import '../css/avtar.css';





export const Avtar = ({id,avtar,name,email,phone,website,deleteDetail, updateData})=>
{

    const [toggle, setToggle] =useState('none');
    const [name_v, setName] = useState(name);
    const [email_v, setEmail] = useState(email);
    const [phone_v, setPhone] = useState(phone);
    const [website_v, setWebsite] = useState(website);


   return <div className='avList'>
       <img src={`https://api.dicebear.com/6.x/micah/svg?seed=${name}`} alt='Avtar' style={{width: '200px',height: '200px'}} />
        <h1>{name}</h1>
        <h3><AliyunOutlined   />   : {email}</h3>
        <h3><PhoneOutlined  />     : {phone}</h3> 
        <h3><GlobalOutlined  />    :{website}</h3>
       
        <Button type='primary' onClick= {() => setToggle('block')} >Edit </Button>
        <Button type='primary'danger onClick={deleteDetail}>Delete</Button>

        <form className='form' style={{display:toggle}} >
        <label>Name:</label><input type="text"
         value={name_v} 
         onChange={(e) =>setName(e.target.value)} /><br /><br />
 
         <label>Email:</label><input type="text"
         value={email_v}  
         onChange={(e) =>setEmail(e.target.value)} /><br /><br />

        <label>Phone:</label><input type="text" 
         value={ phone_v} 
         onChange={(e) =>setPhone(e.target.value)} /><br /><br />

         <label>Website:</label><input type="text"
         value={website_v}  
         onChange={(e) =>setWebsite(e.target.value)} /><br /><br />
         <Space wrap>
         <Button type='primary'danger onClick= {(e) => { e.preventDefault(); setToggle('none')}} >Cancle</Button>
         <Button type='primary'  onClick={(e) => {
             e.preventDefault(); 
             updateData(id, name_v,  email_v, phone_v, website_v); 
             setToggle('none')}}>
             OK</Button>
         </Space>
        </form> 
      </div>
     
    
}