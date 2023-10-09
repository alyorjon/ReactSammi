import React from 'react'
import './app_list.css'
import AppListItems from '../app-list-item/app_list_item'


const AppList = ({data,onDelete,onSubmit,onToggle}) => {
  return (
    <ul className='applist'>
      {data.map(item=>(
        // <AppListItems movie_name={item.name} viewers={item.viewers} favourite={item.favourite} />
        <AppListItems {...item} key={item.id} onDelete={()=>onDelete(item.id)} onSubmit={()=>onSubmit(e,item)} onToggle={e=>onToggle(item.id,e.currentTarget.getAttribute('data-toggle'))} like={item.like} favourite={item.favourite} />
        
      )
        // console.log(item)
        )}
        
    </ul>
  )
}

export default AppList