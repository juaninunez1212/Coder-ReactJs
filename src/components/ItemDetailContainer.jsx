import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
// import { traerProducto } from "./stock";
import {doc, getDoc, getFirestore} from "firebase/firestore";

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);
    const {id} = useParams();
    console.log(id);
useEffect(() => {


    const db = getFirestore();

    const traerProducto = doc(db, "productos", id);

    getDoc(traerProducto).then((res) => {
        setProducto({ id: res.id, ...res.data() });
    });
    console.log(producto)
}, [id]);
    
    

    
    return (
        <>
            
            <ItemDetail {...producto}/>
        </>
    );
};