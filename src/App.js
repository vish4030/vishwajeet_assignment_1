import React, {Component} from 'react';
import { fetchData} from './server';
import { Avtar } from './components/Avtar';
import './App.css';


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      data:[]
    }
  }

  // storing data 
  componentDidMount()
  {
    fetchData().then(
      (res) =>  this.setState({data:res})
      )
  };

// updating data
  updateData  = (id, name_v, email_v, phone_v, website_v) =>
  {
    const updatedItem = this.state.data.map( (item) =>
    {
      if(item.id === id)
        return{...item, name:name_v, email:email_v, phone:phone_v, website:website_v}
      return item;  
    })

    this.setState({data:updatedItem});
  }

  // delete an item
   deleteDetail = (id) =>
  {
    const arr = this.state.data;
    this.setState({data:arr.filter( (data,idx)=> idx !== id-1)});
  }
    
  
  
 render()
  {
    const data= this.state.data;
    return(<div>
     {
     data.map( (data) =>
     {
      return<Avtar key={data.id}
      name={data.name}
      email = {data.email}
      phone = {data.phone}
      website = {data.website}
      updateData = {(e, name_v,email_v, phone_v, website_v) =>this.updateData(data.id,name_v,email_v, phone_v, website_v)}
      deleteDetail = { () =>this.deleteDetail(data.id)} 
     />
     })
    }
    </div>);
  }

}


export default App;
