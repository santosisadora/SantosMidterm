var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/homepage', function(req, res, next) {
  res.render('homepage', { title: 'Home Page' });
});

//GET: /about
router.get('/teetimes', function(req, res, next) {
  res.render('teetime',
      {title:'TeeTime',
        content:'This is the teetime content'

      })
})

module.exports = router;
