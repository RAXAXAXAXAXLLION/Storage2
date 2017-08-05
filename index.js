require('http').createServer(function(request,response){response.end("Hello world!")}).listen('8888',function(){console.log('Server listening.')}))
