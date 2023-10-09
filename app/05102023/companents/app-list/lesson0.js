import React from 'react'
import './app_list.css'
import AppListItems from '../app-list-item/app_list_item'


const AppList = ({data,onDelete}) => {
  // console.log(data)
  return (
    <ul className='applist'>
      {data.map(item=>(
        // <AppListItems movie_name={item.name} viewers={item.viewers} favourite={item.favourite} />
        <AppListItems {...item} key={item.id} onDelete={()=>onDelete(item.id)} />
        
      )
        // console.log(item)
        )}
        
    </ul>
  )
}

export default AppList