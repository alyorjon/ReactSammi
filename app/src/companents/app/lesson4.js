import React, { Component } from "react";
import AppInfo from "../app-info/app_info";
import AppSearch from "../app-search/app_search";
import AppFilter from "../app_filter/app_filter";
import './app.css'
import AppList from "../app-list/app_list";
import AppNewItem from "../app_new_item/app_new_item";
import {v4 as uuidv4} from 'uuid'
class  App extends Component {
  constructor(props){
    super(props)
    this.state={
      database:[
        {name:'Hukumdor Usmon 1',viewers:123456, favourite:false,id:1},
        {name:'Hukumdor Usmon 2',viewers:654, favourite:true,id:2},
        {name:'Hukumdor Usmon 3',viewers:987, favourite:false,id:3},
      ]
    }
    }
    onDelete=id=>{
      // /// Mutable imutable holatlari haqida 
      this.setState(({database})=>({database:database.filter(c=>c.id !=id)}))
      
    }
    addForm=(e,item)=>{
      e.preventDefault()
      this.setState(
        ({database})=>({database:[...database,{...item,id:uuidv4()}]}))
          // const newArr=[...database,{...item,id:uuidv4()}]
          // return {database:newArr}
        
      
    }
    render(){
    const {database} = this.state
    // const {onDelete}= this.props.onDelete
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo/>
          <div className="appsearch">
            <AppSearch/>
            <AppFilter/>
          </div>
          <AppList data={database} onDelete={this.onDelete} />
          <AppNewItem addForm={this.addForm}/>
          </div>
      </div>
    )
  
  }
  }

export default App

 