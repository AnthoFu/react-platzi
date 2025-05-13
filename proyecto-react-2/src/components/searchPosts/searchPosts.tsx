import { useState, useEffect } from "react"

// Aqui definimos los campos que tendra o que usaremos de products
type products = {
    id: number;
    title: string;
    description: string;
    price: number;
};

const SearchPosts = () => {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState<products[]>([]);

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/?title=${query}`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('[Error] Busqueda de post:', error))
    }, [query]) // Esta es la dependencia para que funcione el useEffect, es IMPORTANTE


    return (

        <div>
            <h2>Buscador de productos</h2>
            <input type="text"
                placeholder="Buscar por titulo"
                value={query}
                onChange={(event) => setQuery(event.target.value)} />
            <hr />
            <h2>Lista de productos</h2>
            <hr />
            <ul>
                {
                    products.map((product) => (
                        <li key='product.id'>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <span>{product.price}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export default SearchPosts