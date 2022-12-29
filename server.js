var express= require('express')
var app= express()
var path=require('path')

//server configuration
app.use(express.static (path.join(__dirname,'public')))


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'))
})

var server = app.listen(8081,function(){
    var host= server.address().address
    var port= server.address().port
    console.log("app listening at 8081 port")    
})