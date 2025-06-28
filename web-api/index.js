const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());  // To allow frontend to call the API (as frontend is running on a different origin, not running on localhost:3000 like the server)
app.use(express.json());  // To allow endpoints to receive JSON in the body of the request

const DATA_FILE = path.join(__dirname, '../data/gardens.json');

// Returns all gardens
app.get('/gardens', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: `Failed to retrieve data from: ${DATA_FILE}`});

        const gardens = JSON.parse(data);
        res.json(gardens);
    });
});

// Adds a new garden to the list of gardens
app.post('/gardens', (req, res) => {
  const newGarden = req.body;

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: `Failed to retrieve data from: ${DATA_FILE}` });

    let gardens = JSON.parse(data);
    newGarden.id = gardens.length > 0 ? gardens[gardens.length - 1].id + 1 : 1;
    gardens.push(newGarden);

    fs.writeFile(DATA_FILE, JSON.stringify(gardens, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Erreur écriture données' });

      res.status(201).json(newGarden);
    });
  });
});

// Delete a garden by ID
app.delete('/gardens/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: `Failed to retrieve data from: ${DATA_FILE}`});

        let gardens = JSON.parse(data);
        
        const index = gardens.findIndex(garden => garden.id == id);
        if (index === -1) return res.status(404).json({ error: `Could not find garden with id = ${id}`});

        gardens.splice(index, 1);

        fs.writeFile(DATA_FILE, JSON.stringify(gardens), (err) => {
            if (err) return res.status(500).json({ error: `Failed to write data to: ${DATA_FILE}`});

            res.status(204).send(); // 204 status means request was successful and does not return anything
        });
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Express server is running on http://localhost:${PORT}`));