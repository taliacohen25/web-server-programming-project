// Fixed recipe data for "Mealy" (stored in code for this exercise).
// mealType matches the home screen choice: breakfast / lunch / dinner.
// featured = the recipe whose image represents its meal type on the home screen.
const recipes = [
  {
    id: 1,
    title: "שקשוקה ביתית",
    mealType: "breakfast",
    prepTimeMinutes: 20,
    difficulty: "קל",
    servings: 2,
    image: "shakshuka.jpg",
    ingredients: [
      { ingredientId: 6, name: "ביצים", amount: "4 יחידות" },
      { ingredientId: 7, name: "עגבניות", amount: "4 יחידות" },
      { ingredientId: 8, name: "בצל", amount: "1 יחידה" },
      { ingredientId: 3, name: "שום", amount: "2 שיניים" }
    ],
    steps: [
      "מטגנים בצל ושום קצוצים עד שהם מזהיבים.",
      "מוסיפים עגבניות חתוכות ומבשלים כ־10 דקות עד שנוצר רוטב סמיך.",
      "יוצרים גומות ברוטב ושוברים לתוכן את הביצים.",
      "מכסים ומבשלים 5–7 דקות עד שהחלבון מתייצב."
    ],
    featured: true
  },
  {
    id: 2,
    title: "פנקייק ביתי",
    mealType: "breakfast",
    prepTimeMinutes: 15,
    difficulty: "קל",
    servings: 3,
    image: "pancakes.jpg",
    ingredients: [
      { ingredientId: 9, name: "קמח", amount: "1 כוס" },
      { ingredientId: 10, name: "חלב", amount: "1 כוס" },
      { ingredientId: 6, name: "ביצים", amount: "2 יחידות" }
    ],
    steps: [
      "מערבבים בקערה קמח, חלב וביצים לבלילה חלקה.",
      "יוצקים מצקת בלילה למחבת משומנת.",
      "כשמופיעות בועות הופכים ומטגנים עוד דקה.",
      "מגישים עם פירות יער וסילאן."
    ],
    featured: false
  },
  {
    id: 3,
    title: "עוף עם אורז",
    mealType: "lunch",
    prepTimeMinutes: 40,
    difficulty: "בינוני",
    servings: 4,
    image: "chicken-rice.jpg",
    ingredients: [
      { ingredientId: 11, name: "חזה עוף", amount: "500 גרם" },
      { ingredientId: 12, name: "אורז", amount: "1.5 כוסות" },
      { ingredientId: 8, name: "בצל", amount: "1 יחידה" }
    ],
    steps: [
      "מתבלים את חזה העוף וצולים במחבת עד שהוא משחים.",
      "מטגנים בצל, מוסיפים אורז ומערבבים דקה.",
      "מוסיפים 2.5 כוסות מים רותחים ומבשלים 18 דקות על אש נמוכה.",
      "פורסים את העוף ומגישים מעל האורז."
    ],
    featured: true
  },
  {
    id: 4,
    title: "פסטה שמנת ופטריות",
    mealType: "dinner",
    prepTimeMinutes: 25,
    difficulty: "קל",
    servings: 2,
    image: "creamy-pasta.jpg",
    ingredients: [
      { ingredientId: 1, name: "פסטה", amount: "250 גרם" },
      { ingredientId: 2, name: "פטריות", amount: "200 גרם" },
      { ingredientId: 3, name: "שום", amount: "2 שיניים" },
      { ingredientId: 4, name: "שמנת לבישול", amount: "250 מ״ל" },
      { ingredientId: 5, name: "פרמזן", amount: "50 גרם" }
    ],
    steps: [
      "מבשלים את הפסטה במים רותחים לפי הוראות האריזה.",
      "מטגנים את הפטריות והשום במחבת.",
      "מוסיפים את השמנת ומבשלים על אש נמוכה.",
      "מערבבים עם הפסטה ומפזרים פרמזן."
    ],
    featured: false
  },
  {
    id: 5,
    title: "סלט יווני",
    mealType: "dinner",
    prepTimeMinutes: 10,
    difficulty: "קל",
    servings: 2,
    image: "greek-salad.jpg",
    ingredients: [
      { ingredientId: 7, name: "עגבניות", amount: "3 יחידות" },
      { ingredientId: 13, name: "מלפפונים", amount: "2 יחידות" },
      { ingredientId: 14, name: "גבינה בולגרית", amount: "150 גרם" },
      { ingredientId: 15, name: "זיתי קלמטה", amount: "1/2 כוס" }
    ],
    steps: [
      "חותכים עגבניות ומלפפונים לקוביות גדולות.",
      "מוסיפים זיתים וקוביות גבינה.",
      "מתבלים בשמן זית, אורגנו ומלח."
    ],
    featured: true
  }
];

module.exports = recipes;
