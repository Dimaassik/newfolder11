const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.post('/auth', (req, res) => {
    const { firstName, lastName, password } = req.body;

    if (!firstName) {
        return res.json({ message: "Insufficient data provided" });
    }
    return res.json({ 
        name: firstName, 
        surname: lastName, 
        password: password 
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
