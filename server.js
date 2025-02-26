const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Simuler une base de données
const users = [];

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        return res.json({ success: false, message: 'Cet email est déjà utilisé.' });
    }

    // Ajouter l'utilisateur à la "base de données"
    users.push({ username, email, password });
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
