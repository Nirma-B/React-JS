import React,{useState,useEffect} from "react";
import '../App.css'
import axios from "axios";

const Products =()=>{
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([]);

useEffect(()=>{
    setLoading(true);
    axios({
        method:"GET",
        url:"https://fakestoreapi.com/products",
    })
    .then(res=>{
        setData(res.data);
    }).catch(e=>console.log(e))
    .finally(()=>setLoading(false));
},[]);
    return(
        <div className="products-container">
            {loading && <h1>Loading..</h1>}

            {data.map((product) =>(
                <div key={product.id} className="card">
                    <div><img src={product.image} alt="#"/></div>
                    <div className="card-description">
                        <p>{product.title}</p>
                        <p>{`Price: ${product.price}`}</p>
                        <p className="category">{`Category: ${product.category}`}</p>
                        <p>{product.rating && product.rating.rate} ⭐</p>
                    </div>
                    
                </div>

            ))}

        </div>
    );

};
export default Products;