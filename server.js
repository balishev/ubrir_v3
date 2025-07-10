const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

// Для GitHub Pages просто отдаем статику
app.use(express.static('public'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});