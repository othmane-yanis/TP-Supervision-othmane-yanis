
const express = require("express");
const app = express();

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend OK" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Backend démarré sur le port 3000");
});
