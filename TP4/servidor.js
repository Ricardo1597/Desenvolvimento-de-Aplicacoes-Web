var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function(req,res) {

    var myurl = url.parse(req.url,true)
    var path  = myurl.pathname
    
    res.writeHead(200,{'Content-Type':'text/html'})

    if (path == '/index') {

        fs.readFile('website/index.html',(erro,dados)=>{

            if (!erro)
                res.write(dados)
            else
                res.write('<p><b>ERRO: </b></p>' + erro)
                res.end()
    })

    } else {

        var pathDoc = path.split("/")
        var urlNovo = 'website/html/' + pathDoc[2] + '.html'

        fs.readFile(urlNovo,(erro,dados)=>{

            if (!erro)
                res.write(dados)
            else
                res.write('<p><b>ERRO: </b></p>' + erro)
                res.end()
      })
    } 

}).listen(4004,()=>{console.log('Servidor à escuta na porta 4004' )})
