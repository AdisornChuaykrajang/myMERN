const  fs  = require('fs')
const http = require('http')
const path = require('path')

const PORT = 3000

//create web server
const server = http.createServer((request, response)=>{
    if(request.url == '/'){
        getPage(response,'Home.html')
    }else if(request.url == '/product'){
        getPage(response,'product.html')
    }else if(request.url == '/about'){
        getPage(response,'about.html')
    }else{
        response.writeHead(404,{'content-type':'text/html'})
        response.write('<h1>HomePage</h1><hr>^o^')
        response.end()
    }

})

//function เรียกไฟล์เพจ
function getPage(response, pageFile){
    response.writeHead(200,{'content-type':'text/html'})

    fs.readFile(
        path.join(__dirname,'views',pageFile),
        function(err,data){
            if(err) throw err
            response.write(data)
            response.end()

        }
    )
}


//สั่ง server start และคอยรับ รีเควส จาก ผู้ใช้ พร้อมแสดงผมการทำงานของ เวิร์ฟเวอร์
server.listen(PORT,()=>{
    console.log('server running on port 3000:)');

})