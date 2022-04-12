import React, { useEffect, useState } from "react"
import ItemDetail from './ItemDetail';
import { traerProducto } from "./stock";

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState({});

    useEffect(() => {
        /* fetch('https://fakestoreapi.com/products/1')
            .then((res) => res.json())
            .then((json) => console.log(json)); */
        traerProducto().then((res) => {
            
            setProducto(res);
        });
    }, []);

    return (
        <>
            
            <ItemDetail producto={producto} />
        </>
    );
};