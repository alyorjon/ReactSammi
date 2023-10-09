import React from 'react'
import './app_new_item.css'
class  AppNewItem  extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name:'',viewers:'',favourite:false,like:false
    }
  }
  changeInputHandler=(e)=>{
    this.setState(
      {
        [e.target.name]:e.target.value
      }
    )
  }
  addFormHandler=e=>{
    e.preventDefault()
    this.props.addForm({name:this.state.name,viewers:this.state.viewers,favourite:this.state.favourite,like:this.state.like})
    this.setState({name:'',viewers:''})
  }
  render(){
    const {name,viewers} = this.state
    const {addForm}=this.props
    return (
      <div className='app-new-add'>
        <h3>Yangi kino qo'shish qo'shish</h3>
        <form className='add-form d-flex' onSubmit={this.addFormHandler}>
          <input onChange={this.changeInputHandler} type='text' className='form-control new-post-label' value={name} name='name' id="" placeholder='Qanday kino?'/>
          <input onChange={this.changeInputHandler} value={viewers} type="number" className='form-control new-post-label' name="viewers" id="" placeholder='Necha marta korilgan?'/>
          <input type="submit" className='btn btn-outline-dark' value="Submit" />
        </form>
      </div>
    )
  }

}
  


  // (
  //   <div className='app-new-add'>
  //     <h3>Yangi kino qo'shish qo'shish</h3>
  //     <form className='add-form d-flex'>
  //       <input type='text' className='form-control new-post-label' id="" placeholder='Qanday kino?'/>
  //       <input type="number" className='form-control new-post-label' name="" id="" placeholder='Necha marta korilgan?'/>
  //       <input type="submit" className='btn btn-outline-dark' value="Submit" />
  //     </form>
  //   </div>
  // )
export default AppNewItem