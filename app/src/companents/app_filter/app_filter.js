import React, { Component } from 'react'
import './app_filter.css'
class  AppFilter extends Component {
  constructor(props){
    super(props)

  }
  render(){
    return (
      <div className='btn-group'>
        <button className="btn btn-dark" type='button'>Barcha kinolar</button>
        <button className="btn btn-outline-dark " type='button'>Ko'rilgan kinolar</button>
        <button className="btn btn-outline-dark " type='button'>Mashkur  kinolar</button>
      </div>
    )
  }
  
}
const btnsArr=[
  {name:'all',label:"Barcha kinolar"},
  {name:'like',label:"Mashhur kinolar"},
  {name:'favourite',label:"Ko'rilgan kinolar"},
]
export default AppFilter