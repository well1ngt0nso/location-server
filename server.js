const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Localização inicial
let currentLocation = { lat: -23.5, lng: -46.6 };

// Rota POST corrigida para receber latitude/longitude e salvar como lat/lng
app.post("/update-location", (req, res) => {
  const { latitude, longitude } = req.body;
  currentLocation = {
    lat: latitude,
    lng: longitude,
  };
  console.log("Localização recebida via POST:", currentLocation);
  res.send("Localização atualizada!");
});

// Rota GET para fornecer a localização atual
app.get("/get-location", (req, res) => {
  res.json(currentLocation);
});

// (Comentado) Simulação de movimento opcional
// setInterval(() => {
//   currentLocation.lat += (Math.random() - 0.5) * 0.0005;
//   currentLocation.lng += (Math.random() - 0.5) * 0.0005;
//   console.log("Localização simulada:", currentLocation);
// }, 5000);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
