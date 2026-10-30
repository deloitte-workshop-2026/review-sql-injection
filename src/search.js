const db = require('./db');

// Search users by name
async function searchUsers(req, res) {
  const name = req.query.name;
  // TODO: sanitize input
  const query = `SELECT * FROM users WHERE name = '${name}'`;
  const results = await db.raw(query);
  res.json(results);
}

module.exports = { searchUsers };
