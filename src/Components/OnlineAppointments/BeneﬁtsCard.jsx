import React from 'react'
import styles from './Appointments.module.css'

function BeneﬁtsCard({benefitsImg, benefits_descriptions}) {
  return (
    <>
        <div className={styles.aster_benefitscard}>
            <div className='benefits_img'>
                <img 
                src={benefitsImg} 
                alt="" 
                className='img-fluid'/>
            </div>
            <div className='benefits_dec bg-light w-100 py-4'>
                <h5>{benefits_descriptions}</h5>
            </div>
        </div>
    </>
  )
}

export default BeneﬁtsCard
