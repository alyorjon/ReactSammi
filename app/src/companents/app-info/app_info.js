import React from 'react'
import './app_info.css'

class AppInfo extends React.Component{
  constructor(props){
    super(props)
    this.state={
      counter:0,age:''
    }
  }
  
  render(){
    const {allmoviescount,favouritemoviecount}=this.props
    return (
    
    <div className='app-info'>
    <p className='fs-3 text-uppercase'>Barcha kinolar soni:{allmoviescount}</p>
    <p className='fs-3 text-uppercase'>Ko'rilgan kinolar soni:{favouritemoviecount} </p>
    <p>Mening yoshim :{this.state.age}</p>
   
 </div>
  )
  }
}


export default AppInfo