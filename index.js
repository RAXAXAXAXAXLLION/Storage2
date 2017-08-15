require('http').createServer(function(i,o){
o.write("Hello world!")
o.end()
}).listen('8888',function(){console.log("Server listening.")})
