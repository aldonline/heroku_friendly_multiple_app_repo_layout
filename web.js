var app = require('express')()
app.get( '/', function(req, res){ res.send('Hello!') } )
app.listen( process.env.PORT || 3000 )