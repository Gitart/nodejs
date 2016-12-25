  var r = require('rethinkdbdash')();
  //  var connection = null;

  r.connect({host: 'localhost', port: 28015}, function(err, conn) {
            if (err) throw err;
//            connection = conn;
        });





 module.exports={

             // Add records
             AddRecord:function(req, res)
              {
                     r.db('Barsetka').table('Test').insert({'name':'KOKZ'}).run().then(function(user) 
                        {
                            console.log('ss')
                            res.end('<html><h2>Добавлена новая запись</h2></html>');
                         })
              },
                                                                                         
                                                                                         
              //  Удаление записи    
              DelRecord:function(req, res)
                {
                       r.db('Barsetka').table('Test').delete().run().then(function(user) 
                        {
                          console.log('Delte all records')
                          res.end('ss');
                         });
                },
                      
               // Updates records
               UpdateAll:function(req, res)
                {
                       var Tm = new Date()
          
                       r.db('Barsetka').table('Test').update({'DateUpdate':Tm}).run().then(function(user) 
                        {
                          console.log('Update records')
                          res.end('Update Records current date');
                         });
                }
    
}
