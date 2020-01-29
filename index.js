var express = require('express')
var app = express();
var Web3 = require('web3')
var web3 = new Web3("HTTP://127.0.0.1:8545")
var address = "0xB0f6Dd52A3a0E54282B710d444D4B87e720ffE49";
var balance;
app.get('/test/', function(req,res) {
    console.log(req);
    var z = req.query.xxx;

    web3.eth.getBalance(z, (err,bal)=>{balance=bal
        res.send(balance);
        })

})
var server = app.listen(process.env.PORT, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })