var express = require('express');
var router = express.Router();

const templateTypes = [
  { name : "Jade", usefulness : "sucky." },
  { name : "EJS", usefulness : "a little better.." },
  { name : "Handlebars", usefulness : "the best." }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Express',
    message : "I like Handlebars.",
    templates: templateTypes,
    anothermessage : "Handlebars is awesome."
  });
});

module.exports = router;
