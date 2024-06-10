import React from 'react'
import styles from './Appointments.module.css'
import classNames from 'classnames'
import { Link } from 'react-router-dom'



function Step({ link, titleStep, stepImg, altImg, stepDec1, stepDec2, stepCount }) {
    return (
        <>
            <div className={classNames('py-5 px-4 position-relative', styles.step_card)}>
                <div className={styles.step_counter}>
                    <h5 className='px-4 pt-2 pb-1 text-center'>{stepCount}</h5>
                </div>
                <div className='title_step'>
                    <h4>
                        <Link to={link}>
                            {titleStep}
                        </Link>
                    </h4>
                </div>
                <div className='stepImg_info pt-5'>
                    <img
                        src={stepImg}
                        alt={altImg}
                        className='img-fluid' />
                </div>
                <div className='step_dec py-4'>
                    <p className='mb-0'><b>{stepDec1}</b></p>
                    <p><b>{stepDec2}</b></p>
                </div>
            </div>
        </>
    )
}

export default Step
