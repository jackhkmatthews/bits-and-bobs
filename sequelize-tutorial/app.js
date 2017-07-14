const Sequelize = require('sequelize');

const connection = new Sequelize('sequelize_demo', 'jackmatthews', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const Article = connection.define('article', {
  title: Sequelize.STRING,
  body: Sequelize.TEXT
});

connection.sync()
  .then(() => {
    Article.findAll()
      .then(articles => {
        console.log(articles.length);
      });
  });

