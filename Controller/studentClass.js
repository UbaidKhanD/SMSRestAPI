


const { route } = require('express/lib/router');
const dbconnection = require('../dbConnection');
const express = require('express');


const router = express.Router()



router.post('/', async (req, res, next) => {
    try {
        const { className } = req.body;
        const studentClassdata = dbconnection.query(
            `INSERT INTO tblclasses (className) VALUE(?)`, [className]
        );
        res.status(200).json({
            message: 'Student Class Added'

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
            `SELECT * FROM tblclasses `, function (err, studentClassdata) {
                if (err) {
                    res.status(500).json({
                        message: 'Class Data Could not Found'
                    })
                }
                else {
                    res.status(200).json({
                        studentClass: studentClassdata
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
        const { id } = req.params
        dbconnection.query(`SELECT * FROM tblclasses WHERE id=?`, [id], function (err, studentClassdata) {
            if (err) {
                res.status(500).json({
                    message: 'Student Class Could Not Found'
                })
            }
            else {
                res.status(200).json({
                    studentDataByID: studentClassdata
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


router.put('/:id', async (req, res, next) => {
    try {
        const studenClassDetail = req.params.id;
        const{className}=req.body;
        const studentClassUpdate=dbconnection.query(
            `UPDATE tblclasses SET className=? WHERE id=?`,[className], function(err){
                if(err){
                    res.status(500).json({
                        message:'Class Could not update'
                    })
                }
                else{
                    res.status(500).json({
                        message:'Student Class  Updated'
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



router.delete('/:id', async(req,res,next)=>{
    try{
        const studentClass =req.params.id;
    dbconnection.query(
        `DELETE FROM tblclasses WHERE id=?`, [req.params.id],function(err){
            if(err){
                res.status(500).json({
                    message:'Class data COuld not Updated'
                })
            }
            else{
                res.status(200).json({
                    message:'Student Class data Added Successfully'
                })
            }
        }
    )
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message:err
        })
    }
})

module.exports.router;