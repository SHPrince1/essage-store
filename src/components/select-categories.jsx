import React from 'react'
import  Select  from 'react-select'
import style from "../styles/select.module.css"

const categories = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'real estate', label: 'Real Estate' },
    { value: 'health', label: 'Health and Beauty' },
    { value: 'baby', label: 'Babies' },
    { value: 'job', label: 'Jobs' },
    { value: 'vehicle', label: 'Vehicles' }, 
   
  ];

const SelectCat = () => {
  return (
   <>

   <div className={style.parentBox}>
   <Select options = {categories} />

   </div>
    
    </>
  )
}

export default SelectCat