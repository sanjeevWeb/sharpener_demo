const http = require('http')

const server = http.createServer((req,res) => {
    console.log('Kumar Sanjeev Dutta');
    res.render('sanjeev')
})

server.listen(4000)