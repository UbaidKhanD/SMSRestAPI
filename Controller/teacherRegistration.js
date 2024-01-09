

// const { route } = require('express/lib/router');
// const dbconnection = require('../dbConnection');
// const express = require('express');

// const router = express.Router()


// router.post('/', async (req, res, next) => {
//     try {
//         const { FirstName, LastName, DateOfBirth, GenderAddress, PhoneNumber, Email } = req.body;
//         const teacherData = dbconnection.query(
//             `INSERT INTO tblteachers (FirstName,LastName,DateOfBirth,GenderAddress,PhoneNumber,Email) values(?,?,?,?,?,?)`,
//             [FirstName, LastName, DateOfBirth, GenderAddress, PhoneNumber, Email]
//         );
//         console.log(teacherData.insertId, 'Record Insertd')
//         res.staus(200).json({
//             message: 'Teacher Data Added'
//         })
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({
//             message: err
//         })
//     }
// })


// router.get('/', async (req, res, next) => {
//     try {
//         dbconnection.query(`SELECT * FROM tblteachers`, function (err, teacherData) {
//             if (err) {
//                 res.status(500).json({
//                     message: err
//                 })
//             } else {
//                 res.status(200).json({
//                     TeacherData: teacherData,
//                 })
//             }
//         })
//     }
//     catch (err) {
//         res._construct(500).json({
//             message: 'internal Error'
//         })
//     }
// })


// router.get('/:id', async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const studentData = dbconnection.query(`SELECT * FROM tblteachers WHERE id=?`, [id], function (err, teacherList) {
//             if (err) {
//                 res.status(500).json({
//                     message: 'Teacher Data Could not Found'
//                 })
//             }
//             else {
//                 res.status(200).json({
//                     TeacherDataByID: teacherList
//                 })
//             }
//         })
//     }
//     catch (err) {
//         res.status(500).json({
//             message: 'Data Could Not Found'
//         })
//     }
// })


// router.put('/:id', async (req, res, next) => {
//     try {
//         const teacherDetail = req.params.id;
//         const { FirstName, LastName, DateOfBirth, GenderAddress, PhoneNumber, Email } = req.body
//         const teacherList = dbconnection.query(
//             `UPDATE tblteachers SET FirstName=?, LastName=?, DateOfBirth=?, GenderAddress=?, PhoneNumber=?, Email=? WHERE id=?`,
//             [FirstName, LastName, DateOfBirth, GenderAddress, PhoneNumber, Email, teacherDetail], function (err) {
//                 console.log(err)
//                 if (err) {
//                     res.status(500).json({
//                         message: 'Data Could Not Update'
//                     })
//                 }
//                 res.status(200).json({
//                     message: 'Data Updated'
//                 })
//             }
//         )
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).json({
//             message: err
//         })
//     }
// })

// router.delete('/:id', async (req, res, next) => {
//     try {
//         dbconnection.query(
//             `DELETE FROM tblteachers WHERE id=?`, [req.params.id], function (err, teacherdata) {
//                 if (err) {
//                     res.status(500).json({
//                         message: 'Data Could not Updated'
//                     })
//                 }
//                 else {
//                     res.status(200).json({
//                         message: 'Data Updated Successfully'
//                     })
//                 }
//             }
//         )
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).json({
//             message: 'Data Could Not Delete'
//         })
//     }
// })



// module.exports = router;