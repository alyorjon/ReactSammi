import React from 'react'
import './app_info.css'

class AppInfo extends React.Component{
  constructor(props){
    super(props)
    this.state={
      counter:0,age:''
    }
  }
  upHandler=()=>{
    this.setState(prevState=>({
      counter:prevState.counter+1
    }))
  }
  downHandler=()=>{
    this.setState(prevState=>({
      counter:prevState.counter-1
    }))
  }
  resetHandler=()=>{
    this.setState({counter:0})
  }
  onChange=(e)=>{
    if (e.target.value>10){      this.setState({age:e.target.value})
  }
    
    
  }
  render(){return (
    <div className='app-info'>
    <p className='fs-3 text-uppercase'>Barcha kinolar soni:</p>
    <p className='fs-3 text-uppercase'>Ko'rilgan kinolar soni:</p>
    <p>Mening yoshim :{this.state.age}</p>
   <form action="" method="get">
     <span>Yoshingizni yozing</span>
     <input type="text" onChange={this.onChange} className='form-control' />
   </form>
 </div>
  )
  }
}


export default AppInfo