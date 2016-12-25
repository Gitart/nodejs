
var ctrl = require("./indexcontroller.js")



module.exports=function(app){

        app.get('/data', function(req, res){
                 id  = req.query.user;
                 age = req.query.age;
                 res.end('ID->' + id + ' --  AGE' + age );
        })

        
        // Add record
        app.get('/', function(req, res){ ctrl.AddRecord(req, res); })
        
        // Delete All
        app.get('/deleteall', function(req, res){   ctrl.DelRecord(req, res);  })
        
        // Update
        app.get('/updateall', function(req, res){   ctrl.UpdateAll(req, res);  })
        
        app.get('/page', function(req, res){   res.render('index', {Hello: 'WORKED', users: [{ name: 'Vasya' }, {name: 'Kolya'}]});  })
        
        
        
        
         
}

