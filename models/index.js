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

Page.beforeValidate((page) => {
    const slug = generateSlug(page.title);
    page.slug = slug;
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

function generateSlug(title) {
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
}