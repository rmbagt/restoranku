import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "darkgaming123",
  database: "restoranku",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.listen(8800, () => {
  console.log("Server running on port 8800")
});