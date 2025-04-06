const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let currentLocation = { lat: -23.5, lng: -46.6 };

app.post("/update-location", (req, res) => {
  currentLocation = req.body;
  console.log("Localização recebida via POST:", currentLocation);
  res.send("Localização atualizada!");
});

app.get("/get-location", (req, res) => {
  res.json(currentLocation);
});

// Simulação de movimento
// setInterval(() => {
//   currentLocation.lat += (Math.random() - 1.0) * 0.0005;
//   currentLocation.lng += (Math.random() - 1.0) * 0.0005;
//   console.log("Localização simulada:", currentLocation);
// }, 5000); // atualiza a cada 5 segundos

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
