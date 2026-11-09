const express = require("express");
const ingredients = require("../data/ingredients");

const router = express.Router();

// GET /api/ingredients — all ingredients
router.get("/", (req, res) => {
  res.json(ingredients);
});

// GET /api/ingredients/substitutes — each ingredient with its substitutes
// (used on the recipe details screen)
router.get("/substitutes", (req, res) => {
  const substitutes = ingredients.map((ingredient) => ({
    id: ingredient.id,
    name: ingredient.name,
    substitutes: ingredient.substitutes
  }));
  res.json(substitutes);
});

module.exports = router;
