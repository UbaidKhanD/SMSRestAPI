
const { route } = require('express/lib/router');
const dbconnection = require('../dbConnection');
const express = require('express');


const router = express.Router()

router.post('/', async (req, res, next) => {
    try {

        const { firstName, fatherName, motherName, dateOfBirth, placeOfBirth, sex, telephone, mobilePhone, address, dateOfHiring, yearsOfService, formation, specialty, category, salary } = req.body;
        const staffRecordData = dbconnection.query(
            `INSERT INTO tblstaff (firstName,fatherName,motherName,dateOfBirth,placeOfBirth,sex,telephone,mobilePhone,address,dateOfHiring,yearsOfService,formation,specialty,category,salary) 
            values(?,?,?,?,?,?,?)`, [firstName, fatherName, motherName, dateOfBirth, placeOfBirth, sex, telephone, mobilePhone, address, dateOfHiring, yearsOfService, formation, specialty, category, salary]
        );

        res.status(200).json({
            messege: "Staff Registration Sucessfully"
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
        dbconnection.query(`SELECT * FROM tblstaff`, function (err, staffList) {
            if (err) {
                res.json({
                    message: "Student record could not found"
                })
            } else {
                res.json({ staffData: staffList })
            }
        })
    }
    catch (err) {
        res.status(500).json({
            messege: 'server not found.'
        })
        console.log(staffList, 'studentdata')
    }
})



router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const dataStudent = dbconnection.query(`SELECT * FROM tblstaff WHERE id=?`, [id], function (err, staffList) {
        console.log(id, 'getbyID')
        if (err) {
            res.json({
                message: "Staff Record Could Not Get"
            })
        }
        else {
            res.json({
                studentGetByID: staffList
            })

        }
    })
})



router.put('/:id', async (req, res, next) => {
    try {
        const staffDetail = req.params.id;
        const { firstName, fatherName, motherName, dateOfBirth, placeOfBirth, sex, telephone, mobilePhone, address, dateOfHiring, yearsOfService, formation, specialty, category, salary } = req.body;
        dbconnection.query(`UPDATE tblstaff SET firstName=?,fatherName=?,motherName=?,dateOfBirth=?,placeOfBirth=?,sex=?,telephone=?,mobilePhone=?,address=?,dateOfHiring=?,yearsOfService=?,formation=?,specialty=?,category=?,salary=?
        WHERE id=?`,
            [firstName, fatherName, motherName, dateOfBirth, placeOfBirth, sex, telephone, mobilePhone, address, dateOfHiring, yearsOfService, formation, specialty, category, salary, staffDetail], function (err) {
                console.log(err)
                if (err) {

                    res.status(500).json({
                        message: 'Record Could not get'
                    })
                    console.log(studenUpdatedata, 'staff Record not found')
                }
                else {
                    res.status(200).json({
                        message: 'Staff Record Updated'
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
        dbconnection.query(`DELETE FROM tblstaff WHERE id=?`, [req.params.id], function (err, staffData) {
            if (err) {
                res.status(500).json({
                    message: 'Student Record Could Not Delete'
                })
            }
            else {
                res.status(200).json({
                    studentDeleteByID: staffData,
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