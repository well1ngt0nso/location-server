const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let currentLocation = { lat: 0, lng: 0 };

app.post("/update-location", (req, res) => {
  currentLocation = req.body;
  console.log("Nova localização:", currentLocation);
  res.send("Localização atualizada!");
});

app.get("/get-location", (req, res) => {
  res.json(currentLocation);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
