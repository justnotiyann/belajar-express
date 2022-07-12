const express = require('express')
const router = express.Router()


router.get('/', (req, res)=> {
    res.render('index', {
        layout:'./layout/main',
        title:'Halaman Utama',
        // admin:'iyan'
    })
})

module.exports= router