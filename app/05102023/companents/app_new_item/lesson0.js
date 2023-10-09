import React from 'react'
import './app_new_item.css'
const AppNewItem = () => {
  return (
    <div className='app-new-add'>
      <h3>Yangi kino qo'shish qo'shish</h3>
      <form className='add-form d-flex'>
        <input type='text' className='form-control new-post-label' id="" placeholder='Qanday kino?'/>
        <input type="number" className='form-control new-post-label' name="" id="" placeholder='Necha marta korilgan?'/>
        <input type="submit" className='btn btn-outline-dark' value="Submit" />
      </form>
    </div>
  )
}

export default AppNewItem