# Mubi Todo

React + Vite da yozilgan vazifalar ro'yxati.

## Imkoniyatlar
- Vazifa qo'shish, belgilash, tahrirlash (✎ yoki ikki marta bosish), o'chirish
- Filtr: Hammasi / Faol / Bajarilgan
- Progress halqasi (bajarilgan foiz)
- localStorage — sahifa yangilansa ham ma'lumot saqlanadi
- Yorug' / qorong'i rejim
- Mobil, planshet va kompyuterda ishlaydi

## Ishga tushirish
```bash
npm install
npm run dev      # development
npm run build    # production build (dist/ papkasi)
```

## Deploy
`npm run build` dan keyin `dist/` papkasini Vercel yoki Netlify'ga yuklang,
yoki GitHub'ga push qilib, Vercel bilan ulang.

## Struktura
```
src/
  App.jsx
  index.css
  main.jsx
  hooks/useLocalStorage.js
  components/ AddForm, Filters, ProgressRing, TodoItem
```
