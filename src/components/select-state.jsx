import React from "react";
import  Select  from 'react-select'
import style from "../styles/select.module.css"

const condition = [
    { value: 'new', label: 'New' },
    { value: 'used', label: 'Used' },
    { value: 'refurbished', label: 'Refurbished' },
   
   
  ];

const SelectState = () => {
  return (
    <div className={style.parentBox}>
      
      <Select options = {condition} />
    </div>
  );
};

export default SelectState;
