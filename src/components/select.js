import React from 'react'
import  Select  from 'react-select'
import style from "../styles/select.module.css"

const options = [
    { value: 'abia', label: 'Abia' },
    { value: 'adamawa', label: 'Adamawa' },
    { value: 'loyal', label: 'Loya' },
    { value: 'akwa ibom', label: 'Akwa Ibom' },
    { value: 'bauchi', label: 'Bauchi' },
    { value: 'benue', label: 'Benue' }, 
   
  ];

const SelectBar = () => {
  return (
   <>

   <div className={style.parentBox}>
   <Select options = {options} />

   </div>
    
    </>
  )
}

export default SelectBar