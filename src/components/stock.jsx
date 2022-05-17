


export const traerProductos = (categoryId, productos) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = productos.filter(
            (producto) => producto.categoria === categoryId
        )
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(productos)
        }, 3000);
    });
};



    // export const traerProducto = (id) => {
    //     return new Promise((resolve, reject) => {
    //         const productoElegido = productos.find(
    //             (producto) => producto.id === Number(id)
    //         )
    //         setTimeout(() => {
    //             resolve(productoElegido);
    //         }, 1000);
    //     });
    // };