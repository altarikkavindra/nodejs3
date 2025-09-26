const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World from Node.js Level 3!");
});

// Export app buat keperluan testing
module.exports = app;

// Kalau dijalankan langsung dengan `npm start`, baru listen
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
