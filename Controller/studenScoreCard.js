

const { route } = require('express/lib/router');
const dbconnection = require('../dbConnection');
const express = require('express');



const router = express.Router()

router.post('/', async (req, res, next) => {
    try {
        const { firstTrismester, secondTriSmester, thirdTrimSester, finalGrade, year } = req.body;
        const studentScorecard = dbconnection.query
            (
                `INSERT INTO tblscorerecord (firstTrismester, secondTriSmester, thirdTrimSester, finalGrade, yea) values(?,?,?,?,?,?)`,
                [firstTrismester, secondTriSmester, thirdTrimSester, finalGrade, year], function (err) {
                    if (err) {
                        res.status(500).json({
                            message: 'Record Could Not Added'
                        })
                    }
                    else {
                        res.status(200).json({
                            message: 'Record Added Succefully'
                        })
                    }
                }
            )
    }
    catch (err) {

    }
})


router.get('/', async (req, res, next) => {
    try {
        dbconnection.query(
            `SELECT * FROM tblscorerecord`, function (err, studentGradeData) {
                if (err) {
                    req.status(500).json({
                        message: 'Data Can not get'
                    })
                }
                else {
                    res.status(200).json({
                        studentGradeDetail: studentGradeData
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
        const studenScore = dbconnection.query(
            `SELECT * FROM tblscorerecord WHERE id=?`, [req.params.id], function (err, scoreCard) {
                if (err) {
                    res.status(500).json({
                        message: 'Score Card could not get by ID'
                    })
                }
                else {
                    masterScoreById: scoreCard
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
        const scoreCardData = req.params.id;
        const { firstTrismester, secondTriSmester, thirdTrimSester, finalGrade, year } = req.body;
        dbconnection.query(
            `UPDATE tblscorerecord SET firstTrismester=?,secondTriSmester=?,thirdTrimSester=?,finalGrade=?,year=? WHERE id=?`,
            [firstTrismester, secondTriSmester, thirdTrimSester, finalGrade, year], function (err, scoreCardData) {
                if (err) {
                    res.status(500).json({
                        message: 'Record could not updated'
                    })
                }
                else {
                    res.status(200).json({
                        updateDataMasterCard: scoreCardData,
                        message: 'Data Updated succesfuly'
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
            `DELETE * FROM tblscorerecord WHERE id=?`, [req.params.id], function (err) {
                if (err) {
                    res.status(500).json({
                        message: 'Data could not deleted'
                    })
                }
                else {
                    res.status(200).json({
                        message: 'Data Deleted Succeefully'
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