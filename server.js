import express  from 'express'
const app = express()
const port = 3000

app.set('view engine','ejs')

app.use(express.static('./public'))
app.get('/', (req,res) => {
  res.render('index',{name:'DEFAULT PAGE'})
})
app.get('/:name', (req,res) => {
  res.render('index',{name:req.params.name})
})

app.listen(port)

