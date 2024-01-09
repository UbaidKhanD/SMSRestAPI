
const { route } = require('express/lib/router');
const dbconnection = require('../dbConnection');
const express = require('express');


const router = express.Router()

router.post('/', async (req, res, next) => {
    try {

        const { subjectName, abbreviation } = req.body;
        const studentSubject = dbconnection.query(
            `INSERT INTO tblstudentsubject (subjectName,abbreviation) 
            values(?,?)`, [subjectName, abbreviation]
        );

        res.status(200).json({
            messege: "Student Subject Added"
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
        dbconnection.query(`SELECT * FROM tblstudentsubject`, function (err, studentSubjectList) {
            if (err) {
                res.json({
                    message: "Student Subject record could not found"
                })
            } else {
                res.json({ studentSubjectData: studentSubjectList })
            }
        })
    }
    catch (err) {
        res.status(500).json({
            messege: 'server not found.'
        })
        console.log(studentSubjectList, 'studenSubjecttdata')
    }
})



router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const dataStudent = dbconnection.query(`SELECT * FROM tblstudentsubject WHERE id=?`, [id], function (err, studentSubjectList) {
        console.log(id, 'getbyID')
        if (err) {
            res.json({
                message: "Student Subject Record Could Not Get"
            })
        }
        else {
            res.json({
                studentSubjectGetByID: studentSubjectList
            })

        }
    })
})



router.put('/:id', async (req, res, next) => {
    try {
        const studenSubjecttDetail = req.params.id;
        const { subjectName, abbreviation } = req.body;
        dbconnection.query(`UPDATE tblstudentsubject SET subjectName=?,abbreviation=? WHERE id=?`,
            [subjectName, abbreviation, studenSubjecttDetail], function (err) {
                console.log(err)
                if (err) {

                    res.status(500).json({
                        message: 'Record Could not get'
                    })
                    console.log(studenSubjectUpdatedata, 'studentRecord not found')
                }
                else {
                    res.status(200).json({
                        message: 'Student Subject Record Updated'
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
        dbconnection.query(`DELETE FROM tblstudentsubject WHERE id=?`, [req.params.id], function (err, studentSubjectData) {
            if (err) {
                res.status(500).json({
                    message: 'Student subject Record Could Not Delete'
                })
            }
            else {
                res.status(200).json({
                    studentDeleteByID: studentSubjectData,
                    message: 'Student Subject Record deleted'
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