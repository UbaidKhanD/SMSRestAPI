const { route } = require('express/lib/router');
const dbconnection = require('../dbConnection');
const express = require('express');
const { body } = require('express-validator');


const router = express.Router()



router.post('/', async (req, res, next) => {
    try {
        const { name } = req.body;
        const studentArea = dbconnection.query(
            `INSERT INTO tblstudentarea (name)value(?)`, [name]
        );
        res.status(200).json({
            message: 'Student Area Added Succesfully'
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: err
        })
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        dbconnection.query(
            `SELECT * FROM tblstudentarea`, function (err, studentAreaData) {
                if (err) {
                    res.status(500).json({
                        message: 'Data Could Not Found'
                    })
                }
                else {
                    res.status(200).json({
                        studentAreaDetail: studentAreaData,

                    })
                }
            }
        )
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: err
        })
    }
})

router.get('/"id', async (req, res, next) => {
    try {
        const { id } = req.params;
        dbconnection.query(
            `SELECT * FROM tblstudentarea WHERE id=?`, [id], function (err, studentAreaDataGetById) {
                if (err) {
                    res.status(500).json({
                        message: 'Record could not get'
                    })
                }
                else {
                    res.status(200).json({
                        studentAreaRecord: studentAreaDataGetById
                    })
                }
            }
        )

    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: err
        })
    }
})



router.put('/:id', async (req, res, next) => {
    try {
        const studentAreaDetail = req.params.id;
        const { name } = req.body;
        dbconnection.query(`UPDATE tblstudentarea SET name=? WHERE id=?`,
            [name], function (err) {
                console.log(err)
                if (err) {

                    res.status(500).json({
                        message: 'Record Could not get'
                    })
                    console.log(studentAreaDetail, 'Student Area Record not found')
                }
                else {
                    res.status(200).json({
                        message: 'Student Area Record Updated'
                    })
                }
            })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: err
        })
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        dbconnection.query(
            `DELETE * FROM tblstudentarea WHERE id=?`, [req.params.id], function (err) {
                if (err) {
                    res.status(500).json({
                        message: 'Record Could Not deleted'
                    })
                }
                else {
                    res.status(200).json({
                        message: 'Record Deleted Sucesfully'
                    })
                }
            }
        )
    }
    catch (err) {

    }
})

module.exports = router;