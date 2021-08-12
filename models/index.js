const Sequelize = require('sequelize');

// Connects to PostgresQL Database via
// name-of-protocol://location-of-database:database-port/database-name 
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

// Setup Models
const Page = db.define('pages', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: Sequelize.ENUM('open', 'closed')
});

const User = db.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});

module.exports = {
    db, Page, User
};