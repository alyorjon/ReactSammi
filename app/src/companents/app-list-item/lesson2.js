import React from 'react'
import './app_list_item.css'

class AppListItems extends React.Component{
  constructor(props){
    super(props)
    this.state={
      favourite:false,like:false
    }
  }
  getFavourite=()=>{
    this.setState(
      ({favourite})=>({
        favourite:!favourite
      })
    )}
  
  getLike=()=>{
    this.setState(
      ({like})=>({
        like:!like
      })
    )}
  render(){
    const {name,viewers} = this.props;
    const {like,favourite} =this.state;
    return (
      
      <li className={`list-group-item  d-flex justify-content-between ${favourite && 'increase'} ${like && 'like'}`}>
      <span className='list-group-item-label' onClick={this.getLike}>{name}</span>
      <input type="number" name="" className='list-group-item-input' defaultValue={viewers} id="" />
      <div className="d-flex justify-content-center align-items-center">
        <button onClick={this.getFavourite} type="button" className="btn-cookie btn-sm">
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
          <i className="fas fa-star"></i>
      </div>
    </li>
    )
  }
}



export default AppListItems