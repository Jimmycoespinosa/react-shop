import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API)=>{
    const [products, setProducts] = useState([]);
    
	useEffect(async()=>{
		const response = await axios(API);//Funcionalidad que remplaza el fetch de Javascript.
		setProducts(response.data);
	}, []);//[] Sin dependencias solo se ejecuta una vez.
    return products;
};

export default useGetProducts;
