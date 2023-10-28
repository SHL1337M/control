 
import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import axios from "axios";

export default function ProdApp(){

const [apiData, setApiData] = useState({listProducts:[], isLoading:true})

useEffect(()=>{
    axios.get("http://192.168.1.71:1337/api/products")
         .then((res)=>{setApiData({listProducts:res.data.data, isLoading:false}); })
})

function addToList(data){
    //setApiData({listProducts:[...apiData.listProducts, data]})
    axios.post("http://192.168.1.71:1337/api/products", {data:data})
         .then(()=>alert("Ajouté"))
         .catch(()=>alert("Erreur lors de l'insertion"))
}
return(
    <>
        <ProductForm action={addToList}/>
        <ProductList data={apiData}/>
    </>
)
}