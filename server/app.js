const express = require("express");
const recipesRouter = require("./routes/recipes");
const ingredientsRouter = require("./routes/ingredients");

const app = express();
const PORT = process.env.PORT || 3000;

// Home route — describes the API and lists the available routes
app.get("/", (req, res) => {
  res.json({
    message: "ברוכים הבאים ל־API של Mealy",
    routes: [
      "GET /api/recipes",
      "GET /api/recipes/featured",
      "GET /api/ingredients",
      "GET /api/ingredients/substitutes"
    ]
  });
});

// Entity routes
app.use("/api/recipes", recipesRouter);
app.use("/api/ingredients", ingredientsRouter);

// Error route — any address that doesn't match a route above
app.use((req, res) => {
  res.status(404).json({
    error: "הנתיב לא נמצא",
    path: req.originalUrl
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
