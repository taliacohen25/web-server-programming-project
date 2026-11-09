const express = require("express");
const recipes = require("../data/recipes");

const router = express.Router();

// GET /api/recipes — all recipes (recipe discovery screen)
router.get("/", (req, res) => {
  res.json(recipes);
});

// GET /api/recipes/featured — one featured recipe per meal type
// (the images next to בוקר / צהריים / ערב on the home screen)
router.get("/featured", (req, res) => {
  const featured = recipes.filter((recipe) => recipe.featured);
  res.json(featured);
});

module.exports = router;
