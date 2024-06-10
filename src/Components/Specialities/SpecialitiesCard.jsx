import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Specialities.module.css'

function SpecialitiesCard({ specImg, specAlt, linkOnImg, paraForSpec, clinicLink, doctorLink }) {
    return (
        <>
        <div className='Specialities_list'>
            <div className='Specialities_img'>
                <Link to={linkOnImg}>
                    <img
                        src={specImg}
                        alt={specAlt}
                        className={styles.spec_imgWidth} />
                </Link>
            </div>
            <div className='Specialities_text'>
                <p className='text-center py-2 fs-5 mb-0'>{paraForSpec}</p>
            </div>
            <div className='d-flex align-items-center justify-content-center gap-3 fs-6'>
                <Link to={doctorLink}>Doctor »</Link>
                <Link to={clinicLink}>Clinic »</Link>
            </div>
        </div>
    </>
    )
}

export default SpecialitiesCard
