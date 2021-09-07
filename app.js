const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const connectDB = require('./config/db')

//  routes
const posts = require('./routes/posts')

// start app
const app = express()

// start Handlebars middleware
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

// start bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// start methodOverride middleware
app.use(methodOverride('_method'))

// start express middleware
app.use(express.json())

// conncet database
connectDB()

//  routes, create files in routes folder
app.get('/', (req, res) => res.render('index'))
app.get('/about', (req, res) => res.render('about'))

// port
app.use('/posts', posts)

const PORT = process.env.PORT ||5000

app.listen(PORT, () => console.log(`Server connection at port ${PORT}`))
