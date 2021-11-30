const express = require('express') ; // thứ vừa cài - nó sẽ vào node_modules -> vào express
const morgan = require('morgan'); // add morgan
const path = require('path'); // add path
var handlebars= require('express-handlebars');
const app = express()  ; // function dc đã dc khởi tạo trong file express, chỉ gọi để sử dụng ===> app : đối tượng website
const port = 3000    ;   // run website port nào


app.use(express.static(path.join(__dirname,'public')));

//route khi vao web
app.use(morgan('combined'))   // morgan
//template engine
app.engine('hbs', handlebars.engine({
  extname : '.hbs'
}));  // định nghĩa
app.set('view engine','hbs');  // sử dụng
app.set('views', path.join(__dirname,'resource/views'))

app.get('/', (req, res) => {       //cái url nào thì render hello worl
  res.render('home');
})
app.get('/news', (req, res) => {       //cái url nào thì render hello worl
  res.render('news');
})

app.get('/blog',(req,res)=>
{
  res.render('blog');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// lắng nghe port - máy locial ip 127.0.0.1 ==> phân giải ip ip ra url