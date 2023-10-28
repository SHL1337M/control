import React from "react";

export default function ProductList({data}){
    
return (
    data.isLoading==true?<img style={{width:"50px", height:"50px"}} src="https://media.istockphoto.com/id/1138945991/ko/%EB%B2%A1%ED%84%B0/%EA%B2%80%EC%9D%80%EC%83%89%EC%97%90-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0.jpg?s=1024x1024&w=is&k=20&c=kJBJFYYSY7HNhM_k6B5asrtoS84-aW7-8l5i1PqNKZY="/>:
        <table>
            <tr><th>Title</th><th>Desc</th><th>Price</th></tr>
            {
            data.listProducts.map((prod, idx)=>
                <tr key={idx}><td>{prod.attributes.title}</td><td>{prod.attributes.description}</td><td>{prod.attributes.price}</td></tr>
            )}
        </table>
    )
}