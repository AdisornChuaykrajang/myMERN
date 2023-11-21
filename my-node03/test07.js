const http = require('http');

const server = http.createServer((request,responseponse)=>{
    if (request.url == '/') {
        response.write('<h1>Hello....</h1>')
        response.end
    }else if (request.url == '/about') {
        response.write('<h1>About....</h1>')
    }else{
        response.write('<h1>Page not found</h1>')
        response.end
    }
})

server.listen(4000),()=>{
    console.log('Server running...');
}