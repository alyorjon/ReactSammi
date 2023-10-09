import React, { Component } from 'react'
import "./app_search.css"
class  AppSearch extends Component {
  constructor(props){
    super(props)
    this.state={term:''}
  }
  updateTermHandlers=(e)=>{
    const term=e.target.value
    console.log(term)
    this.setState({term})
    this.props.updateTermHandlers({term})
    }
  render(){
    return (<input type="text" name="term" id="" className="form-control search-input" placeholder='Kinolarni qidirish' onChange={this.updateTermHandlers} value={this.state.term} />)
  }
  
}

export default AppSearch 