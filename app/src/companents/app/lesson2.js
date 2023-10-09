import React from "react";
import AppInfo from "../app-info/app_info";
import AppSearch from "../app-search/app_search";
import AppFilter from "../app_filter/app_filter";
import './app.css'
import AppList from "../app-list/app_list";
import AppNewItem from "../app_new_item/app_new_item";

const App = () => {
  const database=[
    {name:'Hukumdor Usmon 1',viewers:123456, favourite:false,id:1},
    {name:'Hukumdor Usmon 2',viewers:654, favourite:true,id:2},
    {name:'Hukumdor Usmon 3',viewers:987, favourite:false,id:3},
  ]
  const onDelete=id=>{
    console.log(id)
  }
  return (
    <div className="app font-monospace">
        
        {/* <Users firstName={{name:'Noname'}} lastName= {()=>"Ismjon function3"}
        link='nonamlink'/>
        <Users firstName={{name:'Noname'}} lastName={()=>'Ismjon function'} link='nonamlink'/> */}
        <div className="content">
           
            <AppInfo/>
            <div className="appsearch">
                <AppSearch/>
                <AppFilter/>
            </div>
            <AppList data={database} onDelete={onDelete}/>
            <AppNewItem/>
        </div>
        
    </div>
  )
}

export default App

 