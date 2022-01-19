const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const helpers = require('./utils/helpers')

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db: sequelize
    })
};

const hbs = exphbs.create({ helpers });


// set up handlebars

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



// Add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up express.js session and connect to db
app.use(session(sess));

// turn on routes
app.use(require('./controllers'));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening at port: ${PORT}`));
});

