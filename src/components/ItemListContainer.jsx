import React , { useEffect, useState }from "react"
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";

export default function ItemListContainer() {
    

  function OnAdd (cantidad, stock){
    console.log("1111")
    if (cantidad == 1) {
      alert("Se añadio al carrito " + cantidad + " unidad");
    } else {
      alert("Se añadieron al carrito " + cantidad + " unidadades");
    }
   
     cantidad = 1;
     return cantidad
  }


  
  const [productos, setProductos] = useState([])

    useEffect (() => {
        
        const deposito = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve ([
                    {id: 0, juego: "Fifa 22", precio: 5990, url: "https://i.blogs.es/0a2b76/e53cynvwuaix9pa/450_1000.jpeg"},
                    {id: 1, juego: "Call of Duty Black Ops", precio: 2390, url:"https://esports.as.com/2020/08/21/call-of-duty/Todas-portadas-Call-of-Duty_1384671540_481605_1024x1452.jpg"},
                    {id: 2, juego: "Forza Horizon", precio: 3460, url: "https://gossipvehiculo.com/wp-content/uploads/2021/08/forzahorizon5-keyart-vert-rgb-final-1629720353.jpg"},
                    {id: 3, juego: "Spiderman: Miles Morales", precio: 8560, url: "https://media.vandal.net/m/86451/spiderman-miles-morales-20207921133921_1.jpg"},
                    {id: 4, juego: "NBA 2k 22", precio: 6999, url: "https://media.tycsports.com/files/2021/07/14/306777/nba-2k22-luka-doncic-portada_w416.jpg"},
                    {id: 5, juego: "Red dead Redeption II", precio: 4580, url: "https://media.vandal.net/m/42944/red-dead-redemption-2-2019101812583956_1.jpg"},
                    {id: 6, juego: "Spiderman", precio: 4580, url: "https://i.3djuegos.com/juegos/13417/spiderman_ps4__nombre_provisional_/fotos/ficha/spiderman_ps4__nombre_provisional_-4004811.jpg"},
                    {id: 7, juego: "The Last of Us Part II", precio: 6350, url: "https://as01.epimg.net/meristation/imagenes/2019/09/25/game_cover/183891271569432001.jpg"},
                    {id: 8, juego: "Call of Duty Vanguard", precio: 4699, url: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AANeM1v.img?h=560&w=473&m=6&q=60&o=f&l=f"}
                ])
    
            }, 2000)
        })

        deposito
                .then((res)=> {
                    setProductos(res);
                })
                .catch((err) => {
                    console.log(err)
                })
    }, [])  


  return (
    <>
    
      
      <ItemList productos={productos}/>
      <ItemDetailContainer OnAdd={OnAdd}/>
    </>
  );
}
