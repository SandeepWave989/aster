import React from 'react'
import { Link } from 'react-router-dom'

function Doctors({doctorImg, doctorAlt, doctorName, doctorBio, DoctorImgLinks}) {
  return (
    <>
        <div className='doctor_info'>
            <div>
                <Link to={DoctorImgLinks}>
                <img 
                src={doctorImg}
                alt={doctorAlt} 
                className=''/>
                </Link>
            </div>
            <div className='doctor_content'>
                <h3>{doctorName} ...</h3>
                <p>{doctorBio}</p>
                <Link to='https://www.myaster.com/doctor-consultation'>Book Appointment</Link>
            </div>
        </div>
    </>
  )
}

export default Doctors
