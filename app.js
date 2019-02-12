const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/src/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/markets',function(req,res){
    res.sendFile(path.join(__dirname+'/src/markets.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/block_search',function(req,res){
    res.sendFile(path.join(__dirname+'/src/block_search.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/learn',function(req,res){
    res.sendFile(path.join(__dirname+'/src/learn.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/support',function(req,res){
    res.sendFile(path.join(__dirname+'/src/support.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/contact_us',function(req,res){
    res.sendFile(path.join(__dirname+'/src/contact_us.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/termsofuse',function(req,res){
    res.sendFile(path.join(__dirname+'/src/termsofuse.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/privacy',function(req,res){
    res.sendFile(path.join(__dirname+'/src/privacy.html'));
    //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.use(express.static('assets'))
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');