import React , { useEffect, useState }from "react"

import ItemList from "./ItemList";

import { useParams } from "react-router-dom";
// import { traerProductos } from "./stock";
import {collection, docs, getDocs, getFirestore} from "firebase/firestore";

export default function ItemListContainer() {
    
  
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  console.log('😊', categoryId);

  // useEffect(() => {
  //   setLoading(true);
  //   traerProductos(categoryId)
  //     .then((res) => setProductos(res))
  //     .catch((error) => console.log(error))
  //     .finally(() => {
  //       setLoading(false);
  //   });
  // }, [categoryId]);

  useEffect(() => {


    const db = getFirestore();

    const traerProductos = collection(db, "productos");
    setLoading(true);
  
    getDocs(traerProductos).then((res) => {
        setProductos(res.docs.map((item) => ({ id: item.id, ...item.data() })));
    });
    console.log(productos)
    
}, [categoryId]);
    

  
  return (
    <>
    
      <ItemList productos={productos}/>
      
    </>
  );
}
