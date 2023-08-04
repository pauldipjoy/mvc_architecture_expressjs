const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

const products = [
  {
    name: "Britania",
    category: "biscut",
  },

  {
    name: "Tata-Gold",
    category: "tea",
  },
];

const htmlForm = `
<form action="/products" method="POST">
<input type="text" name="name" placeholder="enter name"/>
<input type="text" name="category" placeholder="enter category"/>
<button type="submit">Save product</button>
</form>
`;

app.get("/products", (req, res) => {
  res.send(htmlForm);
});

app.post("/products", (req, res) => {
  const name = req.body.name;
  const category = req.body.category;

  const product = {
    name,
    category,
  };

  products.push(product);
  res.status(202).json({
    success: true,
    products,
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "Not Found!",
  });
});

module.exports = app;
