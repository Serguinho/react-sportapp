import React from "react";
import  './GifExpertApp.css'
import { useState } from "react";
import AddCategory from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid2";


function GifExpertApp (){


    const [categories, setCategories] = useState(['Danny']);

    // const handleAdd=()=>{
    //     setCategories([...categories,'Daysi']);
    // setCategories(cats=>([...categories,'Daysi']))
    // };
    return(
        <>
        <h2>Gif Expert App</h2> 
        <AddCategory setCategories={setCategories}></AddCategory>
        <hr/>
       
       
        <ol>
            {
               categories.map(category=>(
                <GifGrid 
                    category={category}
                    key={category}
                 />
               ))
            }
            
        </ol>

        </>
);

}

export default GifExpertApp;


