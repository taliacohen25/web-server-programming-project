# Mealy – שרת (תרגיל 1, צד שרת)

שרת Node.js + Express שמחזיר נתוני JSON קבועים עבור שתי ישויות: **מתכונים** (Recipes) ו**מצרכים** (Ingredients).

## הרצה

```bash
cd server
npm install
npm start
```

השרת עולה בכתובת http://localhost:3000

## נתיבים

| שיטת HTTP | כתובת API | מה מוחזר |
|---|---|---|
| GET | `/` | דף הבית: הודעת פתיחה ורשימת הנתיבים |
| GET | `/api/recipes` | מערך של כל המתכונים |
| GET | `/api/recipes/featured` | מתכון מומלץ לכל ארוחה (בוקר, צהריים, ערב) |
| GET | `/api/ingredients` | מערך של כל המצרכים, כולל קטגוריה ותחליפים |
| GET | `/api/ingredients/substitutes` | כל מצרך והתחליפים האפשריים שלו |
| GET | כל כתובת אחרת | שגיאה 404 בפורמט JSON |

## מבנה תיקיות

```
server/
  app.js              – יצירת השרת, דף הבית ונתיב השגיאה
  routes/
    recipes.js        – נתיבי המתכונים
    ingredients.js    – נתיבי המצרכים
  data/
    recipes.js        – נתוני מתכונים קבועים
    ingredients.js    – נתוני מצרכים קבועים
```
