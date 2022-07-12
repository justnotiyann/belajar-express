const express = require('express')
var expressLayouts = require('express-ejs-layouts');
var path = require('path');
const app = express()
const port = 3000

// Inisialisasi Global Variabel
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.use(expressLayouts);

// Express Port
app.listen(port, () => {
    console.log(`Node Berjalan pada port ${port}`)
})

// Routes Index/root
const index = require('./routes/index')
app.use('/', index)

// Routes User/user
const user = require('./routes/user')
app.use('/user', user)

module.exports=app