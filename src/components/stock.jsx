const products = [
                    {id: 0, juego: "Fifa 22", precio: 5990, url: "https://i.blogs.es/0a2b76/e53cynvwuaix9pa/450_1000.jpeg", categoria: "Deportes"},
                    {id: 1, juego: "Call of Duty Black Ops", precio: 2390, url:"https://esports.as.com/2020/08/21/call-of-duty/Todas-portadas-Call-of-Duty_1384671540_481605_1024x1452.jpg" , categoria: "Accion"},
                    {id: 2, juego: "Forza Horizon", precio: 3460, url: "https://gossipvehiculo.com/wp-content/uploads/2021/08/forzahorizon5-keyart-vert-rgb-final-1629720353.jpg", categoria:"Carrera"},
                    {id: 3, juego: "Spiderman: Miles Morales", precio: 8560, url: "https://media.vandal.net/m/86451/spiderman-miles-morales-20207921133921_1.jpg", categoria:"Accion"},
                    {id: 4, juego: "NBA 2k 22", precio: 6999, url: "https://media.tycsports.com/files/2021/07/14/306777/nba-2k22-luka-doncic-portada_w416.jpg", categoria:"Deportes"},
                    {id: 5, juego: "Red dead Redeption II", precio: 4580, url: "https://media.vandal.net/m/42944/red-dead-redemption-2-2019101812583956_1.jpg", categoria:"Accion"},
                    {id: 6, juego: "Spiderman", precio: 4580, url: "https://i.3djuegos.com/juegos/13417/spiderman_ps4__nombre_provisional_/fotos/ficha/spiderman_ps4__nombre_provisional_-4004811.jpg", categoria:"Accion"},
                    {id: 7, juego: "The Last of Us Part II", precio: 6350, url: "https://as01.epimg.net/meristation/imagenes/2019/09/25/game_cover/183891271569432001.jpg", categoria:"Accion"},
                    {id: 8, juego: "Call of Duty Vanguard", precio: 4699, url: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AANeM1v.img?h=560&w=473&m=6&q=60&o=f&l=f", categoria:"Accion"}
]

export const traerProductos = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = products.filter(
            (producto) => producto.categoria === categoryId
        )
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(products)
        }, 3000);
    });
};



    export const traerProducto = (id) => {
        return new Promise((resolve, reject) => {
            const productoElegido = products.find(
                (producto) => producto.id === Number(id)
            )
            setTimeout(() => {
                resolve(productoElegido);
            }, 1000);
        });
    };