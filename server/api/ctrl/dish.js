// const db = require("../db.js");
// // db.connect();
// function getDishes(req, res) {
//     // db.query(`CREATE table IF NOT EXISTS dishes (
//     //     name VARCHAR(100),
//     //     img TEXT,
//     //     rcp TEXT,
//     //     prots INT,
//     //     carbs INT,
//     //     fats INT,
//     //     cal INT,
//     //     id SERIAL,
//     //     PRIMARY KEY(id)
//     // )`, (e) => {
//     //     console.log(e)
//     // })
//     db.query(`SELECT * FROM dishes`, (err, result) => {
//         if (err) {
//             console.log("ошибка");
//             res.send(err);
//         } else {
//             console.log(result);
//             res.json(result.rows)
//         }
//     });
// }

// function addDish(req, res) {
//     console.log(req.body);
//     let keys = Object.keys(req.body);
//     let values = Object.values(req.body);
//     console.log(keys, values);
//     bd.query(`INSERT INTO dishes(${[...keys]}) values(`)
// };

// function getDishes(req, res) {
//     db.query(`SELECT * FROM dishes`, (err, result) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(result)
//         }
//         res.send('работа') 
//     });
// }

// module.exports = {getDishes, addDish}