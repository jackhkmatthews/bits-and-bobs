const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize_demo', 'jackmatthews', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Article = sequelize.define('article', {
  slug: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: {
        args: [10, 100],
        msg: 'Please enter a title between 10 and 100'
      }
    }
  },
  body: {
    type: Sequelize.TEXT,
    defaultValue: 'Coming soon...',
    validate: {
      startsWithUpper: bodyval => {
        const first = bodyval.charAt(0);
        var startsWithUpper = first === first.toUpperCase();
        if (!startsWithUpper) {
          throw new Error('First letter must be a uppercase letter');
        } else {
          // ..
        }
      }
    }
  }
}, {
  timestamps: false,
  hooks: {
    beforeValidate: () => {
      console.log('beforeValidate');
    },
    afterValidate: () => {  
      console.log('afterValidate');
    },
    beforeCreate: () => {
      console.log('beforeCreate');
    },
    afterCreate: (res) => {
      console.log('created article with title:', res.dataValues.title);
    }
  }
});

Article
  .sync({force: true})
  .then(() => {
    return Article.create({
      title: 'Hello there',
      slug: 'hello-there',
      body: 'A nothing article about saying hello in different languages'
    });
  })
  .catch(error => {
    console.log(error);
  });

