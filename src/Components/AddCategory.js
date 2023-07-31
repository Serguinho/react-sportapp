import React, { useState } from "react";
import "../CSS/AddCategory.css";
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

  const [inputValue, setinputValue] = useState('');
  const handleInputChange=(e)=>{
    setinputValue(e.target.value)
  }
  const handleSumit=(e)=>{
    e.preventDefault();
    if(inputValue.trim().length>0){

       setCategories (cats => [ inputValue, ...cats ]);
       setinputValue('');
    }


  }

  return (
   // <>
    <form onSubmit={handleSumit}>
      <input 
           type="text" 
           value={inputValue}
           onChange={handleInputChange}
        />
    </form>
        
    //</> no es necesario poner si el elemento engloba, como es el caso de form que engloba a input.
  );
};

AddCategory.propTypes= {
  setCategories:PropTypes.func.isRequired,

}



export default AddCategory;
