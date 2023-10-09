import React from "react";
import AppInfo from "../app-info/app_info";
import AppSearch from "../app-search/app_search";
import AppFilter from "../app_filter/app_filter";
import './app.css'
import AppList from "../app-list/app_list";
import AppNewItem from "../app_new_item/app_new_item";


class UserState extends React.Component{
  constructor(props){
    super(props)
    this.state={
      counter:0,
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
  onFavourite=id=>{console.log(`Favourite : ${id}`)}
  onLike=id=>{console.log(`Like :${id}`)}
  render(){return (
    <div className="w-50 d-flex">
      <div className="border p-2 mt-3">
      <h1>Counter</h1>
      
      <div className="mb-3">
      <button onClick={this.upHandler} className="btn btn-success">Up</button>
      <button onClick={this.downHandler} className="btn btn-yellow">Down</button>
      <button onClick={this.resetHandler} className="btn btn-dark">Reset</button>
      <p>Result {this.state.counter}</p>
      </div>
      
    </div>
    </div>
  )
  }
}

const App = () => {
  const database=[
    {name:'Hukumdor Usmon 1',viewers:123456, favourite:false,id:1},
    {name:'Hukumdor Usmon 2',viewers:654, favourite:true,id:2},
    {name:'Hukumdor Usmon 3',viewers:987, favourite:false,id:3},
  ]
  return (
    <div className="app font-monospace">
        
        {/* <Users firstName={{name:'Noname'}} lastName= {()=>"Ismjon function3"}
        link='nonamlink'/>
        <Users firstName={{name:'Noname'}} lastName={()=>'Ismjon function'} link='nonamlink'/> */}
        <div className="content">
            <UserState fullname='Fullname'/>
            <UserState fullname='Fullname'/>
            <AppInfo/>
            <div className="appsearch">
                <AppSearch/>
                <AppFilter/>
            </div>
            <AppList data={database}/>
            <AppNewItem/>
        </div>
        
    </div>
  )
}

export default App

 