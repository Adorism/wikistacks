const Sequelize = require('sequelize');

// Connects to PostgresQL Database via
// name-of-protocol://location-of-database:database-port/database-name 
const db = new Sequelize('postgres://localhost:5432/wikistack');

module.exports = {
    db
};