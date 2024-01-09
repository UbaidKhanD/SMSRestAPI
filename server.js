
const express = require('express');
const studentRegistrationRoute = require('./Controller/studentRegistration');
const teacherRegistrationROute = require('./Controller/teacherRegistration');
const studentCourseRoute = require('./Controller/studentCourse');
const studentAttendanceRoute = require('./Controller/studentAttendence');
const studentClassRoute = require('./Controller/studentClass');
const studentEnrollmentRoute = require('./Controller/studentEnrollment');
const studentGradeRoute = require('./Controller/studentGrade');
const studentScoreRoute = require('./Controller/studenScoreCard');
const staffRoute=require('./Controller/staffController');
const studentAreaRoute=require('./Controller/studentArea');
const studentSubjectRoute=require('./Controller/studentSubject')
const bodyParser = require('body-parser');
var cors = require('cors');

const router = express.Router();


const app = express()
const port = 4502;
app.use(bodyParser.json());
app.use(express.json());

app.use('/student', studentRegistrationRoute);
app.use('/teacher', teacherRegistrationROute);
app.use('/course', studentCourseRoute);
app.use('/attendence', studentAttendanceRoute);
app.use('/class', studentClassRoute);
app.use('/enrollment', studentClassRoute);
app.use('/grade', studentGradeRoute);
app.use('/scoreCard', studentScoreRoute);
app.use('/staff',staffRoute );
app.use('/student-area', studentAreaRoute);
app.use('/subject',studentSubjectRoute )




app.get('/', (req, res) => {
  res.send('Hello this is express')
});


app.listen(port, () => {
  console.log(`Database Connected ${port}`)
})


