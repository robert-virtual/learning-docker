const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h2>Docker es nice ☄</h2>");
});

app.listen(port, () => {
  console.log("aplicacion ejecutandose en el puerto: ", port);
});
