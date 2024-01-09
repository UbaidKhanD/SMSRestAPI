

const { route } = require('express/lib/router');
const dbconnection = require('../dbConnection');
const express = require('express');


const router = express.Router()
router.post('/', async (req, res, next) => {
    try {
        const { enrollmentName, enrollmentDate } = req.body;
        const studentEnrollment = dbconnection.query(
            `INSERT INTO tblenrollment (enrollmentName, enrollmentDate) VALUES(?,?)`, [enrollmentName, enrollmentDate]
        );
        res.status(200).json({
            message: 'Enrollment Added'
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: err
        })

    }
})


router.get('/', async (req, res, next) => {
    try {
        dbconnection.query(
            `SELECT * FROM tblenrollment`, function (err, studentEnroolment) {
                if (err) {
                    res.status(500).json({
                        message: 'Enrollment not Found'
                    })
                }
                else {
                    StudentEnrollmenData: studentEnroolment
                }
            }
        )

    }
    catch (err) {

    }
})



router.get('/:id', async (req, res, next) => {
    try {
        dbconnection.query(
            `SELECT * FROM tblenrollment WHERE ID=?`, [req.params.id], function (err, enrollmentData) {
                if (err) {
                    res.status(500).json({
                        message: 'Enrollment Could found By ID'
                    })
                }
                else {
                    res.status.json({
                        enroolmentByID: enrollmentData
                    })
                }
            }
        )
    }
    catch (err) {
        console.log(err)
        res.status({
            message: err
        })
    }
})


router.put('/:id', async (req, res, next) => {
    try {

        const enrollmentId = req.params.id;
        const { enrollmentName, enrollmentDate } = req.body
        dbconnection.query(
            `UPDATE SET tblenrollment enrollmentName=?,enrollmentDate WHERE id=?`, [enrollmentName, enrollmentDate], function (err) {
                if (err) {
                    res.status(500).json({
                        message: 'Enrollment Data Could Not Update'
                    })
                }
                else {
                    res.status(200).json({
                        message: 'Enrollment Date Updated'
                    })
                }
            }
        )
    }
    catch (err) {
        console.log(err)
        res.status.json({
            message: err
        })
    }
})

router.delete('/:id', async (req, res, next) => {
    const enrollmentData = req.params.id;
    dbconnection.query(
        `DELETE * FROM tblenrollment WHERE id=?`[req.params.id], function (err) {
            if (err) {
                res.status(500).json({
                    message: 'Enrollment COuld not deleted'
                })
            }
            else {
                res.status(500).json({
                    message: 'Enrollment Data Updated Succesfully'
                })
            }
        }
    )
})





module.exports.router;