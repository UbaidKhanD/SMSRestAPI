
const { route } = require('express/lib/router');
const dbconnection = require('../dbConnection');
const express = require('express');


const router = express.Router()

router.post('/', async (req, res, next) => {
    try {

        const { firstName, lastName, dateOfBirth, gender, address, phoneNumber, email } = req.body;
        const lastInsertID = dbconnection.query(
            `INSERT INTO tblstudent (firstName, lastName, dateOfBirth, gender, address, phoneNumber, email) 
            values(?,?,?,?,?,?,?)`, [firstName, lastName, dateOfBirth, gender, address, phoneNumber, email]
        );
       
        res.status(200).json({
            messege: "Student Registred"
        });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            messege: err
        });
    }
});


router.get('/', async (req, res, next) => {
    try {
        dbconnection.query(`SELECT * FROM tblstudent`, function (err, studentList) {
            if (err) {
                res.json({
                    message: "Student record could not found"
                })
            } else {
                res.json({ studentData: studentList })
            }
        })
    }
    catch (err) {
        res.status(500).json({
            messege: 'server not found.'
        })
        console.log(studentList, 'studentdata')
    }
})



router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const dataStudent = dbconnection.query(`SELECT * FROM tblstudent WHERE id=?`, [id], function (err, studentList) {
        console.log(id, 'getbyID')
        if (err) {
            res.json({
                message: "Student Record Could Not Get"
            })
        }
        else {
            res.json({
                studentGetByID: studentList
            })

        }
    })
})



router.put('/:id', async (req, res, next) => {
    try {
        const studentDetail = req.params.id;
        const { firstName, lastName, dateOfBirth, gender, address, phoneNumber, email } = req.body;
        dbconnection.query(`UPDATE tblstudent SET firstName=?,lastName=?,dateOfBirth=?,gender=?,address=?,phoneNumber=?,email=? WHERE id=?`,
            [firstName, lastName, dateOfBirth, gender, address, phoneNumber, email, studentDetail], function (err) {
                console.log(err)
                if (err) {

                    res.status(500).json({
                        message: 'Record Could not get'
                    })
                    console.log(studenUpdatedata, 'studentRecord not found')
                }
                else {
                    res.status(200).json({
                        message: 'Student Record Updated'
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


router.delete('/:id', async (req, res, nest) => {
    try {
        dbconnection.query(`DELETE FROM tblstudent WHERE id=?`, [req.params.id], function (err, studentData) {
            if (err) {
                res.status(500).json({
                    message: 'Student Record Could Not Delete'
                })
            }
            else {
                res.status(200).json({
                    studentDeleteByID: studentData,
                    message: 'Student Record deleted'
                })
            }
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'Record could not found'
        })
    }
})



module.exports = router;