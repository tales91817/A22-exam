const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/:page_name', (req, res) => {
    const pageName = req.params.page_name;
    // console.log(pageName)
    res.render(pageName)
})

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Express is listening on localhost: ${port}`)
})