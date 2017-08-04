require('http').createServer((req,res)=>{res.end("Hello world!")}).listen('80',function(){console.log("Server listening.")})
