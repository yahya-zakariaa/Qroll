import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../../padges/Auth/Login/Login'
import AdminDashboard from '../../padges/Dashboard/AdminDashboard/AdminDashboard/AdminDashboard'
import Home from '../../component/Home/Home'
import DoctorDashboard from '../../padges/Dashboard/DoctorDashboard/DoctorDashboard/DoctorDashboard'
import StudentDashboard from '../../padges/Dashboard/StudentDashboard/StudentDashboard/StudentDashboard'
import TeacherDashboard from '../../padges/Dashboard/TeacherDashboard/TeacherDashboard/TeacherDashboard'
import AdminLayout from '../../layouts/AdminLayout/AdminLayout'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import DoctorLayout from '../../layouts/DoctorLayout/DoctorLayout'
import StudentLayout from '../../layouts/StudentLayout/StudentLayout'
import TeacherLayout from '../../layouts/TeacherLayout/TeacherLayout'
import Profileteacher from '../../padges/Dashboard/TeacherDashboard/Profileteacher/Profileteacher'
import Changepasswred from '../../padges/Dashboard/TeacherDashboard/Changepasswred/Changepasswred'
import Coursestecher from '../../padges/Dashboard/TeacherDashboard/Coursestecher/Coursestecher'
import Qrcodeteacher from '../../padges/Dashboard/TeacherDashboard/Qrcodeteacher/Qrcodeteacher'
import Allstudentteacher from '../../padges/Dashboard/TeacherDashboard/Allstudentteacher/Allstudentteacher'
import Addnewstudentteacher from '../../padges/Dashboard/TeacherDashboard/Addnewstudentteacher/Addnewstudentteacher'
import Filterbysection from '../../padges/Dashboard/TeacherDashboard/Filterbysection/Filterbysection'
import Sectionattentencereport from '../../padges/Dashboard/TeacherDashboard/Sectionattentencereport/Sectionattentencereport'
import Sectionfinalreport from '../../padges/Dashboard/TeacherDashboard/Sectionfinalreport/Sectionfinalreport'

import Profilestudent from '../../padges/Dashboard/StudentDashboard/Profilestudent/Profilestudent'
import Changepassworedstudent from '../../padges/Dashboard/StudentDashboard/Changepassworedstudent/Changepassworedstudent'
import Coursesstudent from '../../padges/Dashboard/StudentDashboard/Coursesstudent/Coursesstudent'
import Scanqrcodestudent from '../../padges/Dashboard/StudentDashboard/Scanqrcodestudent/Scanqrcodestudent'
import Sectionattendstudent from '../../padges/Dashboard/StudentDashboard/Sectionattendstudent/Sectionattendstudent'
import Scanerdonee from '../../padges/Dashboard/StudentDashboard/Scanerdonee/Scanerdonee'
import Lectureattendstudent from '../../padges/Dashboard/StudentDashboard/Lectureattendstudent/Lectureattendstudent'
import Indexstudent from '../../padges/Dashboard/StudentDashboard/Indexstudent/Indexstudent'
import ContentStudent from '../../padges/Dashboard/StudentDashboard/ContentStudent/ContentStudent'
import Profiledoctoer from '../../padges/Dashboard/DoctorDashboard/Profiledoctoer/Profiledoctoer'
import Changepassowreddoctoer from '../../padges/Dashboard/DoctorDashboard/Changepassowreddoctoer/Changepassowreddoctoer'
import Coursessdoctoer from '../../padges/Dashboard/DoctorDashboard/Coursessdoctoer/Coursessdoctoer'
import Qrcodeleturedoctoer from '../../padges/Dashboard/DoctorDashboard/Qrcodeleturedoctoer/Qrcodeleturedoctoer'
import Allstudentdoctoer from '../../padges/Dashboard/DoctorDashboard/Allstudentdoctoer/Allstudentdoctoer'
import Addstudentdoctoer from '../../padges/Dashboard/DoctorDashboard/Addstudentdoctoer/Addstudentdoctoer'
import Veiwabsentdoctoer from '../../padges/Dashboard/DoctorDashboard/Veiwabsentdoctoer/Veiwabsentdoctoer'
import Filterletureeorsectiondoctoer from '../../padges/Dashboard/DoctorDashboard/Filterletureeorsectiondoctoer/Filterletureeorsectiondoctoer'
import Sectionfilterdocter from '../../padges/Dashboard/DoctorDashboard/Sectionfilterdocter/Sectionfilterdocter'
import Lecturesfilterdoctoer from '../../padges/Dashboard/DoctorDashboard/Lecturesfilterdoctoer/Lecturesfilterdoctoer'
import Finalsectiondoctoer from '../../padges/Dashboard/DoctorDashboard/Finalsectiondoctoer/Finalsectiondoctoer'
import Finalleturesdoctoer from '../../padges/Dashboard/DoctorDashboard/Finalleturesdoctoer/Finalleturesdoctoer'
import Excessiveabsencestudent from '../../padges/Dashboard/TeacherDashboard/Excessiveabsencestudent/Excessiveabsencestudent'
export default function Approutes() {
  return (
    <div>
      <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>

        <Route path="/login" element={<Login/>}/>

        <Route  element={<ProtectedRoute />}>      

        <Route path="/admin-dashboard" element={<AdminLayout/>}>
        <Route index element={<AdminDashboard />}/>
        </Route>



        <Route path="/doctor-dashboard" element={<DoctorLayout/>}>
        <Route index element={<DoctorDashboard/>} /> 
        <Route  path="/doctor-dashboard/profiledoctoer" element={<Profiledoctoer/>}/>
        <Route  path="/doctor-dashboard/changepassowreddoctoer" element={<Changepassowreddoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer" element={<Coursessdoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/qrcodeleturedoctoer" element={<Qrcodeleturedoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/allstudentdoctoer" element={<Allstudentdoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/allstudentdoctoer/addstudentdoctoer" element={<Addstudentdoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/veiwabsentdoctoer" element={<Veiwabsentdoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/filterletureeorsectiondoctoer" element={<Filterletureeorsectiondoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/sectionfilterdocter" element={<Sectionfilterdocter/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/lecturesfilterdoctoer" element={<Lecturesfilterdoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/finalsectiondoctoer" element={<Finalsectiondoctoer/>}/>
        <Route  path="/doctor-dashboard/coursessdoctoer/finalleturesdoctoer" element={<Finalleturesdoctoer/>}/>

        </Route>
        
        


        <Route path="/student-dashboard" element={<StudentLayout/>}>
        <Route index  element={<StudentDashboard/>} />
        <Route  path="/student-dashboard/profilestudent" element={<Profilestudent/>}/>
        <Route  path="/student-dashboard/profilestudent/changepassworedstudent" element={<Changepassworedstudent/>}/>
        <Route  path="/student-dashboard/coursesstudent" element={<Coursesstudent/>}/>
        <Route  path="/student-dashboard/coursesstudent/scanqrcodestudent" element={<Scanqrcodestudent/>}/>
        <Route  path="/student-dashboard/coursesstudent/scanqrcodestudent/scanerdonee" element={<Scanerdonee/>}/>
        <Route  path="/student-dashboard/coursesstudent/sectionattendstudent" element={<Sectionattendstudent/>}/>
        <Route  path="/student-dashboard/coursesstudent/lectureattendstudent" element={<Lectureattendstudent/>}/>
        <Route  path="/student-dashboard/indexstudent" element={<Indexstudent/>}/>
        <Route  path="/student-dashboard/indexstudent/contentStudent" element={<ContentStudent/>}/>

        </Route>
        




        
        <Route path="/teacher-dashboard" element= {<TeacherLayout/>}>
        <Route index element={<TeacherDashboard/>} />
        <Route  path="/teacher-dashboard" element={<TeacherDashboard/>} />
        <Route  path="/teacher-dashboard/profileteacher" element={<Profileteacher/>}/>
        <Route  path="/teacher-dashboard/profileteacher/changepasswred" element={<Changepasswred/>}  />
        <Route  path="/teacher-dashboard/coursestecher" element={<Coursestecher/>}  />
        <Route  path="/teacher-dashboard/coursestecher/qrcodeteacher" element={<Qrcodeteacher/>}  />
        <Route  path="/teacher-dashboard/coursestecher/allstudentteacher" element={<Allstudentteacher/>}  />
        <Route  path="/teacher-dashboard/coursestecher/addnewstudentteacher" element={<Addnewstudentteacher/>}  />
        <Route  path="/teacher-dashboard/coursestecher/filterbysection" element={<Filterbysection/>}  />
        <Route  path="/teacher-dashboard/coursestecher/filterbysection/sectionattentencereport" element={<Sectionattentencereport/>}  />
        <Route  path="/teacher-dashboard/coursestecher/Sectionfinalreport" element={<Sectionfinalreport/>}  />
        <Route  path="/teacher-dashboard/coursestecher/Sectionfinalreport" element={<Sectionfinalreport/>}  />
        <Route  path="/teacher-dashboard/coursestecher/excessiveabsencestudents" element={<Excessiveabsencestudent/>}  />

        </Route>
        
                


        
      
      




      </Route>

      </Routes>
    </div>
  )
}
