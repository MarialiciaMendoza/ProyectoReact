const products = [
    {
        id: '1',
        name: 'Analisis Microbiológico',
        price: 35,
        stock: 100,
        descripcion: 'Descripcion de Servicio'
    },
    { id: '2', name: 'Analisis Fisico-Quimico', price: 50, stock: 100, descripcion: 'Descripcion de Servicio'},
    { id: '3', name: 'Analisis Bromatológico', price: 40, stock: 100, descripcion: 'Descripcion de Servicio'},
    { id: '4', name: 'Asesoría y Asistencia Técnica', price: 100, stock: 100, descripcion: 'Descripcion de Servicio'}
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout (()=>{
            resolve (products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}