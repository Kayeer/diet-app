const router = require('express').Router();
const db = require("./db.js");
const {getProducts, addProduct, getProduct, deleteProduct, changeProduct} = require("./ctrl/product.js");

router.get("/",(req, res) => {
    console.log(req.query);
    res.send("Пришёл get запрос");
});
router.post("/", (req, res) => {
    console.log(req.body);
    res.send("Пришёл post запрос")    
});
router.delete("/", (req, res) => {
    console.log(req.body);
    res.send("Пришёл delete запрос")
});
router.put("/", (req, res) => {
    console.log(req.body)
    res.send("пришёл put запрос")
})

router.get("/products", getProducts);
router.get("/product/id/:id", getProduct);
router.delete("/product/id/:id", deleteProduct);
router.put("/product/id/:id", changeProduct);
router.post("/product", addProduct)

module.exports = router;