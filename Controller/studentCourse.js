// const { route } = require('express/lib/router');
// const dbconnection = require('../dbConnection');
// const express = require('express');
// const { body } = require('express-validator');

// const router = express.Router()


// router.post('/', async (req, res, next) => {
//     try {

//         const { courseName, description } = req.body
//         const studentCourseInert = dbconnection.query(
//             `INSERT INTO tblcourses (courseName,description) VALUES(?,?)`, [courseName, description]
//         );
//         console.log(studentCourseInert.insertId, 'Student Course')
//         res.status(200).json({
//             messege: 'Student Course Added'
//         })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).json({
//             messege: 'Student Record Could Not Added'
//         })

//     }
// })


// router.get('/', async (req, res, next) => {
//     try {
//         dbconnection.query(
//             `SELECT * FROM tblcourses`, function (err, studentCourse) {
//                 if (err) {
//                     res.status(500).json({
//                         messege: 'Course not found'
//                     })
//                 }
//                 else {
//                     res.status(200).json({
//                         couserDetal: studentCourse
//                     })
//                 }
//             }
//         )
//     }


//     catch (err) {
//         console.log(err)
//         res.status(500).json({
//             messege: 'Student Record Could Find'
//         })
//     }

// })


// router.get('/:id', async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         dbconnection.query('SELECT * FROM tblcourses WHERE ID=?', [id], function (err, couserData) {

//         })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).json({
//             messege: 'couser could not find by ID',
//             cousredataFind: couserData
//         })
//     }
// })




// router.put('/', async (req, res, next) => {
//     try {
//         const courseDetail = req.params.id;
//         const { courseName, description } = req.body;
//         dbconnection.query(
//             `UPDATE tblcourses SET courseName=?,description=?`, [courseName, description, courseDetail], function (err) {
//                 console.log(err)
//                 if (err) {
//                     res.status(500).json({
//                         messege: 'Recourd could not get'
//                     })
//                 }
//                 else {
//                     res.status(200).json({
//                         messege: 'Record updated'
//                     })
//                 }
//             }

//         )
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).json({
//             messege: 'Record could not update'
//         })
//     }

// })

// router.delete('/:id', async (req, res, next) => {
//     try {
//         const coursedata = req.params.id;
//         const { courseName, description } = body;
//         dbconnection.query(
//             `DELETE * FROM tblcourses WHERE ID=?`, req.params.id, function (err, studentCourseData) {
//                 if (err) {
//                     res.status(500).json({
//                         messege: 'Student Course Could Not Deleted'
//                     })
//                 }
//                 else {
//                     res.status(200).json({
//                         messege: 'Studnt deleted'
//                     })
//                 }

//             }
//         )
//     }

//     catch (err) {
//         console.log(err)
//         res.status(500).json({
//             messege: err
//         })
//     }
// })






// module.exports.router;