const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const products = [
    {
        id: 1,
        name: "Modern Sofa",
        price: 24999,
        category: "Sofa"
    },
    {
        id: 2,
        name: "Wooden Chair",
        price: 7999,
        category: "Chair"
    },
    {
        id: 3,
        name: "Dining Table",
        price: 18999,
        category: "Table"
    }
];

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.listen(5001, () => {
    console.log("Server running on http://localhost:5001");
});