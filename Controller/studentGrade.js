
const { route } = require('express/lib/router');
const dbconnection = require('../dbConnection');
const express = require('express');


const router = express.Router()

router.post('/', async (req, res, next) => {
    try {

        const { name } = req.body;
        const studentGrade = dbconnection.query(
            `INSERT INTO tblgrade (name) value(?)`, [name]
        );
        res.status(200).json({
            message: 'Student Grade Added'
        })
    }
    catch (err) {
        res.status(500).json({
            message: err
        })
    }
})

router.get('/', async (req, res, next) => {
    try {
        dbconnection.query(
            `SELECT * FROM tblgrade`, function (arr, studentGradedata) {
                if (err) {
                    res.status(500).json({
                        message: 'Data could not found'
                    })
                }
                else {
                    res.status(200).json({
                        studentGrade: studentGradedata,

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



router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const studentGradeData = dbconnection.query(
            `SELEC * FROM tblgrade WHERE id=?`, [id], function (err, studentGradeByID) {
                if (err) {
                    res.status(500).json({
                        message: 'Data could not found'
                    })
                }
                else {
                    res.status(200).json({
                        studenDatailGetById: studentGradeByID
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
        const studentGrade = req.params.id;
        const { name } = req.body;
        dbconnection.query(
            `UPDATE tblgrade SET name=? WHERE id=?`[name], function (err) {
                if (err) {
                    res.status(500).json({
                        message: 'Data Could not Updated'
                    })
                }
                else {
                    res.status(200).json({
                        message: 'Record Updated Succesfully'
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


router.delete('/:id', async (req, res, next) => {
    try {
        dbconnection.query(
            `DELETE * FROM tblgrade WHERE ID=?`, [req.params.id], function (err) {
                if (err) {
                    res.status(500).json({
                        message: 'Reord could not deleted'
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




module.exports.router;