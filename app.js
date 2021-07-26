const express = require('express');
const app = express();
var fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({ extended: false }));


  app.get('/hoteis/index.html',function(req,res){ 
    fs.readFile('hoteis/index.html', function (err,data){ 
      res.writeHead (200,{'content-Type':'text/html'}); 
      res.write(data); 
      return res.end(); 
    })
  });
  app.get('/sobre/index.html',function(req,res){
    fs.readFile('sobre/index.html', function (err,data){ 
      res.writeHead (200,{'content-Type':'text/html'}); 
      res.write(data); 
      return res.end(); 
    });
  });  
  
  app.get('/sobre/style.css',function(req,res){ 
    fs.readFile('sobre/style.css', function (err,data){ 
      res.writeHead (200,{'content-Type':'text/css'}); 
      res.write(data);  
      return res.end();
    });
  });  
  app.get('/vendas/index.html',function(req,res){ 
    fs.readFile('vendas/index.html', function (err,data){ 
      res.writeHead (200,{'content-Type':'text/html'}); 
      res.write(data);
      return res.end(); 
    });
  });  

  app.get('/vendas/style.css',function(req,res){ 
    fs.readFile('vendas/style.css', function (err,data){ 
      res.writeHead (200,{'content-Type':'text/css'}); 
      res.write(data);  
      return res.end();
    });
  });  

  app.get('/login/index.html',function(req,res){ 
    fs.readFile('login/index.html', function (err,data){ 
      res.writeHead (200,{'content-Type':'text/html'}); 
      res.write(data);
      return res.end(); 
    });
  });  
  app.get('/login/style.css',function(req,res){ 
    fs.readFile('login/style.css', function (err,data){ 
      res.writeHead (200,{'content-Type':'text/css'}); 
      res.write(data);  
      return res.end();
    });
  });  

  app.get('/index.html',function(req,res){ 
    fs.readFile('menu/index.html', function (err,data){ 
      res.writeHead (200,{'content-Type':'text/html'}); 
      res.write(data);  
      return res.end();
    });
  });  
  app.get('/style.css',function(req,res){ 
    fs.readFile('menu/style.css', function (err,data){ 
      res.writeHead (200,{'content-Type':'text/css'}); 
      res.write(data);  
      return res.end();
    });
  });  
  app.get('/bg.jpg',function(req,res){ 
    fs.readFile('menu/bg.jpg', function (err,data){ 
      res.writeHead (200,{'content-Type':'image/jpg'}); 
      res.write(data);  
      return res.end();
    });
  });  
    app.get('/sobre/bckg.jpg',function(req,res){ 
      fs.readFile('sobre/bckg.jpg', function (err,data){ 
        res.writeHead (200,{'content-Type':'image/jpg'}); 
        res.write(data);  
        return res.end();
      });
    });  

  app.get('/',function(req,res){ 
    fs.readFile('menu/index.html',function (err,data){ 
      res.writeHead (200,{'content-Type':'text/html'}); 
      res.write(data);
      return res.end(); 
    })
  });

app.listen(5000, function (){
    console.log('server is running')
});