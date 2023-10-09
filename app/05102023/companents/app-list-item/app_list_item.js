import React from 'react'
import './app_list_item.css'

class AppListItems extends React.Component{
  constructor(props){
    super(props)
    this.state={
      favourite:false,like:false
    }
  }
  
  render(){
    const {name,viewers,onDelete,onToggle,favourite,like} = this.props;
    // const {favourite,like}=this.state
    return (
    <li className={`list-group-item  d-flex justify-content-between ${favourite && 'increase'} ${like && 'like'}`}>
      <span className='list-group-item-label' data-toggle='like'  onClick={onToggle}>{name}</span>
      <input type="number" name="" className='list-group-item-input' defaultValue={viewers} id="" />
        <div className="d-flex justify-content-center align-items-center">
          <button onClick={onToggle} data-toggle='favourite' type="button" className="btn-cookie btn-sm">
            <i className="fas fa-cookie"></i>
          </button>
          <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
            <i className="fas fa-star"></i>
        </div>
    </li>
    )
  }
}



export default AppListItems