const express = require('express')  // thứ vừa cài - nó sẽ vào node_modules -> vào express
const app = express()   // function dc đã dc khởi tạo trong file express, chỉ gọi để sử dụng ===> app : đối tượng website
const port = 3000       // run website port nào
//route khi vao web
app.get('/', (req, res) => {       //cái url nào thì render hello worl
  res.send('Hello World!')
})

app.listen(port, () => {
    var a=1;
    var b=2;
    var c=a+b;
  console.log(`Example app listening at http://localhost:${port}`)
})
// lắng nghe port - máy locial ip 127.0.0.1 ==> phân giải ip ip ra url