const pool = require('../web-api/pgPool');

async function getGardensByUser(userSub) {
    const query = 'SELECT * FROM gardens WHERE user_sub = $1';
    const { rows } = await pool.query(query, [userSub]);
    return rows;
}

async function createGarden(garden, userSub) {
    const query = 'INSERT INTO gardens (name, location, size, members, user_sub) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const { rows } = await pool.query(query, [garden.name, garden.location, garden.size, garden.members, userSub]);
    return rows[0];
}

async function deleteGardenById(id, userSub) {
    const query = 'DELETE FROM gardens WHERE id = $1 AND user_sub = $2';
    const { deleteCount } = await pool.query(query, [id, userSub]);
    return deleteCount > 0;
}

module.exports = {
    getGardensByUser,
    createGarden,
    deleteGardenById
}