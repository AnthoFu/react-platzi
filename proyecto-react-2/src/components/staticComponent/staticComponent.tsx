
const RenderProductos= () => {

    const ListaProductos = [
    'Manzana',
    'Pera',
    'Harina',
    'Arroz',
    'Azucar',
]

    return (
        <ul>
            {
                ListaProductos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    )


}

export default RenderProductos