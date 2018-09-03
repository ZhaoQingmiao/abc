const express = require('express');
const server = express();
sever.get('/',(req,res)=>{
    res.send('ok');
});
server.listen(80);