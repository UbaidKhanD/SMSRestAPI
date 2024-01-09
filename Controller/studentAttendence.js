

const { route } = require('express/lib/router');
const dbconnection = require('../dbConnection');
const express = require('express');
const { param } = require('./studentRegistration');


const router = express.Router()


router.post('/', async (req, res, next) => {
    try {
        const { attended, date } = req.body;
        const studentAttendence = dbconnection.query(
            'INSERT INTO tblattendance (attended,date) VALUES (?,?)', [attended, date]
        );

        console.log(studentAttendence.insertId, 'Attendence')
        res.status(200).json({
            messege: 'Attendence Record Added'
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            messege: err
        })
    }
})


router.get(async (req, res, next) => {
    try {
        dbconnection.query(
            `SELECT * FROM tblattendance`, function (err, studentAttendeceRecord) {
                if (err) {
                    res.status(500).json({
                        messege: 'Attendence Record Could Not found'
                    })
                }
                else {
                    res.status(200).json({
                        StudenAttendeceData: studentAttendeceRecord
                    })
                }
            }
        )
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            messege: err
        })
    }
})





router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        dbconnection.query(
            `SELECT * FROM tblattendance WHERE id=?`, [id], function (err, studentData) {
                if (err) {
                    res.status(500).json({
                        messege: 'Record Could Not Get'
                    })
                }
                else {
                    res.status(200).json({
                        GetDataByID: studentData
                    })
                }
            }

        )
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            messege: err
        })
    }
})


router.put('/:id', async (req, res, next) => {
    try {
        const studentAttence = req.params.id;
        const { attended, date } = req.body;
        dbconnection.query(
            `UPDATE tblattendance SET attended=?,date=? WHERE id=?`, [attended, date], function (err, studentAttendence) {
                if (err) {
                    res.status(500).json({
                        messege: 'Record could not Update'
                    })

                } else {
                    res.status(200).json({
                        messege: 'Record Updated'
                    })
                }
            }
        )

    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            messege: err
        })
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        dbconnection.query(
            `DELETE FROM tblattendance WHERE id=?`[req.params.id], function (err, attendenceData) {
                if (err)
                    res.status(500).json({
                        messege: 'Record COuld Not Deleted'
                    })
                else {
                    res.status(200).json({
                        recorddeleteBydId: attendenceData,
                        messege: 'Record Deleted'
                    })
                }
            }

        )
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            messege: err
        })
    }
})


module.exports = router;