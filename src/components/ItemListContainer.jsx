import React , { useEffect, useState }from "react"

import ItemList from "./ItemList";

import { useParams } from "react-router-dom";
import { traerProductos } from "./stock";

export default function ItemListContainer() {
    
  
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  console.log('😊', categoryId);

  useEffect(() => {
    setLoading(true);
    traerProductos(categoryId)
      .then((res) => setProductos(res))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
    });
  }, [categoryId]);

  
  return (
    <>
    {loading ? (
      <h1>Cargando Productos</h1>
    ) : (
      <ItemList productos={productos}/>
      )}
    </>
  );
}
