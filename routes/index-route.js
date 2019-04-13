var router = require('express').Router();

router.get('/',function(req,res){
    res.render("index.ejs");
});

router.get('/pagi',function(req,res){
    res.render("pagination.ejs");
});

module.exports = router;