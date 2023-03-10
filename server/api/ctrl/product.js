const setConnection = require("../db.js");

// db.connect()
function getProducts(req, res) {
    const db = setConnection()
    // db.connect();
    // db.query(`CREATE table IF NOT EXISTS product (
    //     name VARCHAR(100),
    //     prots INT,
    //     fats INT,
    //     carbs INT,
    //     kkal INT,
    //     img TEXT,
    //     id SERIAL,
    //     PRIMARY KEY(id)
    // )`, (e, d) => {
    //     console.log("ok");
    // })
    db.query(`SELECT * FROM product`, (err, result) => {
        console.log("успешно");
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.json(result.rows);
        }
        db.end()
    });
}   

    function addProduct(req, res) {
        const db = setConnection()
        console.log(req.body);
        let keys = Object.keys(req.body);
        let values = Object.values(req.body);
        console.log(keys, values);
        let text = `INSERT into product(${[...keys]}) values(`
        for (let i = 0; i < keys.length; i++) {
            if (i) {
                text += ","
            }
            text += `$${i+1}`
        }
        text += ")";
        console.log(text)
        db.query(text, values,
         (err, result) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(result);
                res.json(result);
            }
            db.end();
         }
        );
}

const getProduct = (req, res) => {
    const db = setConnection()
    if (req.params.id) {
        db.query(`SELECT * FROM product where id = ${req.params.id}`, (err, result) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(result);
                res.json(result.rows);
            }
            db.end();
        });
    }
};

function deleteProduct(req,res) {
    const db = setConnection()
    console.log(req.params.id)
    if (req.params.id) {
        db.query(`DELETE FROM product WHERE id = ${+req.params.id}`, (err) => {
            if (err) {
                console.log(err)
                res.send(err);
            } else {
                console.log("удаление прошло успешно")
            }
            db.end();
        })
    }
};

function changeProduct(req, res) {
    const db = setConnection()
    console.log(req.params.id)
    if (req.params.id) {
        db.query(`ALTER TABLE product`, (err) => {
            if (err) {
                console.log(err)
                res.send(err);
            } else {
                console.log("изменение прошло успешно")
            }
            db.end();
        })
    }
}



// db.end()
module.exports = {getProducts, addProduct, getProduct, deleteProduct, changeProduct};
