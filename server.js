import express from "express";
const app = express();

// Serve all static files in the root directory
app.use(express.static("."));

// Serve index.html for the root route
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "." });
});

// Cloud Run requires listening on process.env.PORT
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
