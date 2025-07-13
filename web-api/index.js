const express = require('express');
const path = require('path');
const cors = require('cors');
const jwksRsa = require('jwks-rsa');
const { expressjwt } = require('express-jwt');
const { getGardensByUser, createGarden, deleteGardenById } = require(path.join(__dirname, '../data/gardensRepository'));

const app = express();
app.use(cors());  // To allow frontend to call the API (as frontend is running on a different origin, not running on localhost:3000 like the server)
app.use(express.json());  // To allow endpoints to receive JSON in the body of the request

// Middleware to check JWT
const checkJwt = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksUri: "https://dev-5aqjsme5s68hvy2a.eu.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://gardens-api",
  issuer: "https://dev-5aqjsme5s68hvy2a.eu.auth0.com/",
  algorithms: ["RS256"],
});

// Returns all gardens
app.get('/api/gardens', checkJwt, async (req, res) => {
    const gardens = await getGardensByUser(req.auth.sub);
    res.json(gardens);
});

// Adds a new garden to the list of gardens
app.post('/api/gardens', checkJwt, async (req, res) => {
  const newGarden = await createGarden(req.body, req.auth.sub);
  if (!newGarden) {
    return res.status(400).json({ error: 'Failed to create garden' });
  }
  return res.status(201).json(newGarden);
});

// Delete a garden by ID
app.delete('/api/gardens/:id', checkJwt, async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const deleted = await deleteGardenById(id, req.auth.sub);
    if (!deleted) {
        return res.status(404).json({ error: 'Garden not found or does not belong to user' });
    }
    res.status(204).send(); // No content to return
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Express server is running on http://localhost:${PORT}`));