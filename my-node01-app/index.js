const http = require('http')

const PORT = 3000

//create web server
const server = http.createServer((request, reaponse)=>{
    if(request.url == '/'){
        response.writeHead(200,{'content-type':'text/html'})
        response.write('<h1>HomePage</h1><hr>Home')
        response.end()
    }else if(request.url == '/Product'){
        response.writeHead(200,{'content-type':'text/html'})
        response.write('<h1>HomePage</h1><hr>Product...')
        response.end()
    }else if(request.url == '/About'){
        response.writeHead(200,{'content-type':'text/html'})
        response.write('<h1>HomePage</h1><hr>About...')
        response.end()
    }else{
        response.writeHead(404,{'content-type':'text/html'})
        response.write('<h1>HomePage</h1><hr>^o^')
        response.end()
    }

})

//สั่ง server start และคอยรับ รีเควส จาก ผู้ใช้ พร้อมแสดงผมการทำงานของ เวิร์ฟเวอร์
server.listen(PORT,()=>{
    console.log('server running on port 3000:)');
})