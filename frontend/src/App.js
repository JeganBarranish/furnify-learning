import { useEffect, useState } from "react";

function App() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5001/api/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.log("Error fetching products:", error);
            });

    }, []);

    return (
        <div>

            <h1>Furnify</h1>

            <h2>Our Products</h2>

            {products.map(product => (

                <div key={product.id}>

                    <h3>{product.name}</h3>

                    <p>₹{product.price}</p>

                    <p>{product.category}</p>

                </div>

            ))}

        </div>
    );
}

export default App;