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
    this.state={database:[
        {name:'Hukumdor Usmon 1',viewers:123456, favourite:false, like:false,id:1},
        {name:'Hukumdor Usmon 2',viewers:654, favourite:false, like:true,id:2},
        {name:'Hukumdor Usmon 3',viewers:987, favourite:false, like:false,id:3},
      ],
      term:'',
      filter:'',
    }};
    onDelete=id=>{
      this.setState(({database})=>({database:database.filter(c=>c.id !=id)}))};
    addForm=item=>{
      this.setState(({database})=>({database:[...database,{...item,id:uuidv4()}]}))};
    
    onToggle=(id,prop)=>{
      this.setState(
        ({database})=>({
          database:database.map(item=>{
            if(item.id==id){return {...item,[prop]:!item[prop]}}
            return item
          })
        })
      )
    }
    searchHandler=(arr,term)=>{
      if (term.length===0){
        return arr
      }
      return arr.filter(item=>item.name.toLowerCase().indexOf(term)>-1)
    }
    updateTermHandlers=term=>{this.setState(term)}
    filterHandlers=(arr,filter)=>{
      switch(filter){
        case 'like':return arr.filter(c=>c.like)
        case 'favourite':return arr.filter(c=>c.viewers>8000)
        default :return arr
      }
    }
    render(){
    const {database,term,filter} = this.state;
    const allmoviescount=database.length
    const favouritemoviecount=database.filter(c=>c.favourite).length
    const visibleData= this.filterHandlers(this.searchHandler(database,term),filter)
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo allmoviescount={allmoviescount} favouritemoviecount={favouritemoviecount} />
            <div className="appsearch">
              <AppSearch updateTermHandlers={this.updateTermHandlers} />
              <AppFilter filterHandlers={this.filterHandlers} />
            </div>
          <AppList onToggle={this.onToggle} data={visibleData} onDelete={this.onDelete}  />
          <AppNewItem addForm={this.addForm}/>
        </div>
      </div>
    )
  
  }
  }

export default App

 