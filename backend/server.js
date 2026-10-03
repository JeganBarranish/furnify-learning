const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("YOUR_MONGODB_CONNECTION_STRING")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });

app.listen(5001, () => {
    console.log("Server running on http://localhost:5001");
});