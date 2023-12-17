import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "darkgaming123",
  database: "restoranku",
});

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


app.listen(8800, () => {
  console.log("Server running on port 8800")
});