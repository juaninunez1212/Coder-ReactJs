import React, { useEffect, useState } from "react"
import ItemDetail from './ItemDetail';
import { traerProductos } from "./stock";

export default function ItemDetailContainer({OnAdd}) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        /* fetch('https://fakestoreapi.com/products/1')
            .then((res) => res.json())
            .then((json) => console.log(json)); */
        traerProductos().then((res) => {
            
            setProductos(res);
        });
    }, []);

    
    return (
        <>
            
            <ItemDetail producto={productos} OnAdd={OnAdd} />
        </>
    );
};