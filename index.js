require('http').createServer(function(req,res){res.write("Hello world!");res.end()}).listen('8888',function(){console.log("Server listening.")})
