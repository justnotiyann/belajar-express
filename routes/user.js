const express = require('express')
const router = express.Router()
const mahasiswa = require('../public/mahasiswa.json')

// Halaman Tabel Mahasiswa
router.get('/', (req, res) => {

    res.render('./user/daftar',
    {
        layout:'./layout/main',
        title: 'Daftar Mahasiswa',
        mahasiswa,
    })
})

// Halaman Edit Mahasiswa
router.get('/edit', (req, res) => {
    res.render('./user/edit',
    {
        layout:'./layout/main',
        title:'Halaman Edit'
    })
})

// Halaman Tambah Mahasiswa
router.get('/tambah', (req, res) => {
    res.render('./user/tambah',
    {
        layout: './layout/main',
        title:'Halaman Tambah'
    })
})

// Jadi satu
router.route()

module.exports= router