import express from "express";
import cors from "cors";
import mysql from "mysql2";
// import pkg from 'pg'
// const { Pool } = pkg;

import dotenv from "dotenv";
dotenv.config("/.env");

const app = express();
const port = 8800;
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// const db = new Pool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

app.get("/", (req, res) => {
  res.json("Welcome to Restoranku API");
});

app.get("/customers", (req, res) => {
  const q = "SELECT * FROM customers";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
});

app.post("/customers", (req, res) => {
  const q = "INSERT INTO customers(`name`) VALUES (?)";

  const values = [req.body.name];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);

    return res.json(data);
  });
});

app.put("/customers/:id", (req, res) => {
  const q = "UPDATE customers SET `name`= ? WHERE id = ?";
  const values = [req.body.name, req.params.id];

  db.query(q, [...values], (err, data) => {
    if (err) return res
    return res.json(data);
  });
});

app.delete("/customers/:id", (req, res) => {
  const q = "DELETE FROM customers WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res
    return res.json(data);
  });
});

app.get("/waiters", (req, res) => {
  const q = "SELECT * FROM waiters";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
});

app.post("/waiters", (req, res) => {
  const q = "INSERT INTO waiters(`name`) VALUES (?)";

  const values = [req.body.name];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);

    return res.json(data);
  });
});

app.put("/waiters/:id", (req, res) => {
  const q = "UPDATE waiters SET `name`= ? WHERE id = ?";

  const values = [
    req.body.name,
    req.params.id,
  ];

  db.query(q, [...values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/waiters/:id", (req, res) => {
  const q = "DELETE FROM waiters WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res
    return res.json(data);
  });
});

app.get("/ingredients", (req, res) => {
  const q = "SELECT * FROM ingredients";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
});

app.post("/ingredients", (req, res) => {
  const q = "INSERT INTO ingredients(`name`, `stock`) VALUES (?)";

  const values = [req.body.name, req.body.stock];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);

    return res.json(data);
  });
});

app.put("/ingredients/:id", (req, res) => {
  const q = "UPDATE ingredients SET `stock`= ? WHERE id = ?";

  const values = [
    req.body.stock,
    req.params.id,
  ];

  db.query(q, [...values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/ingredients/:id", (req, res) => {
  const q = "DELETE FROM ingredients WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  }
  );
});

app.get("/menus", (req, res) => {
  const q = "SELECT * FROM menus";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
});

app.post("/menus", (req, res) => {
  const q = "INSERT INTO menus(`name`, `price`) VALUES (?)";

  const values = [req.body.name, req.body.price];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);

    return
  });
});

app.put("/menus/:id", (req, res) => {
  const q = "UPDATE menus SET `name`= ?, `price`= ? WHERE id = ?";

  const values = [
    req.body.name,
    req.body.price,
    req.params.id,
  ];

  db.query(q, [...values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/menus/:id", (req, res) => {
  const q = "DELETE FROM menus WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res
    return res.json(data);
  });
});

app.post("/recipe", (req, res) => {
  for (let i = 0; i < req.body.selectedIngredient.length; i++) {
    const q = "INSERT INTO recipe( `idMenu`, `idIngredient`) VALUES (?)";
    const values = [req.body.name, req.body.selectedIngredient[i]];

    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);

      return
    });
  }

});

app.get("/orders", (req, res) => {
  const q = "SELECT COUNT(id) FROM orders";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
});

app.post("/orders", (req, res) => {
  const q = "INSERT INTO orders(`customerName`, `waiterName`, `price`, `tableNumber`) VALUES (?)";

  const values = [req.body.customerName, req.body.waiterName, req.body.price, req.body.tableNumber];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);

    return
  });
});

app.delete("/orders/:id", (req, res) => {
  const q = "DELETE FROM orders WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.post("/orderdtl", (req, res) => {
  for (let i = 0; i < req.body.selectedMenu.length; i++) {
    const q = "INSERT INTO orderdtl( `orderId`, `menuName`) VALUES (?)";
    const values = [req.body.orderId, req.body.selectedMenu[i]];

    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);

      return
    });
  }
});

app.get("/history", (req, res) => {
  const q = "SELECT * FROM orders";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`)
});