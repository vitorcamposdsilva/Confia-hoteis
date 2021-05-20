const express = require('exppress');
const session = require('express-session');
const { dirname } = require('node:path');

const port = 3000;
var path = require('path');
const app = express();



app.engine('html',require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views',path.join(_dirname,'/views'));

app.listen(port,()=>{
    console.log('servidor rodando')
})