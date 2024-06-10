import React from 'react'
import styles from './Appointments.module.css'
import teleconsultationBanner from '../../Img/teleconsultationbanner.png'
import BeneﬁtsCard from './BeneﬁtsCard'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import teleServices1 from '../../Img/tele-services-1.png'
import teleServices2 from '../../Img/tele-services-2.png'
import teleServices3 from '../../Img/tele-services-3.png'
import teleServices4 from '../../Img/tele-services-4.png'
import teleServices5 from '../../Img/tele-services-5.png'
import artboard from '../../Img/Artboard.jpg'
import illus1 from '../../Img/illus-01.jpg'
import illus2 from '../../Img/illus-02.jpg'
import illus3 from '../../Img/illus-03.jpg'
import illus4 from '../../Img/illus-04.jpg'
import illus5 from '../../Img/illus-05.jpg'
import ButtonMain from '../Button/ButtonMain'
import classNames from 'classnames'
import Step from './Step'

function Appointments() {
    return (
        <>
            <section className='appointments'>
                <div className='container-fluid px-4'>
                    <div className='appointment_banner'>
                        <img
                            src={teleconsultationBanner}
                            alt="appointment_banner"
                            className='img-fluid' />
                    </div>
                    <div className='Teleconsultation_Beneﬁts text-center py-5'>
                        <div className='container'>
                            <h1 className={styles.title}>Aster Teleconsultation Beneﬁts</h1>
                            <p className='py-3 fs-5'><b>Book your appointment online through the myAster application & avail medical follow ups, medicine prescription reﬁlls, health advice & more</b> via video consultation with the doctor – all from your home!</p>
                            <p className='fs-5'>Consult your doctor from the comfort of your home with myAster. Find the doctor of your choice by location, medical specialty, and type of consultation available. Explore 500+ doctor profiles, view their schedules and slots, and book an appointment easily. Choose to pay for your teleconsultation appointment through self-pay or insurance.</p>
                            <p className='py-3 fs-5'>Tele consult with the doctor on myAster and book follow-up appointments on the go. Receive medical advice from experts, view prescriptions directly on myAster, and order your medicines and prescription refills from the online pharmacy on the myAster app or website. To know more visit myAster website or <a href="">download the app.</a></p>
                        </div>
                        <Container className='pt-5'>
                            <Row>
                                <div className='col-lg-4'>
                                    <BeneﬁtsCard benefitsImg={teleServices1} benefits_descriptions={'33 years of Trusted Legacy'} />
                                </div>
                                <div className='col-lg-4 pt-4 pt-lg-0 pt-md-0 pt-sm-4'>
                                    <BeneﬁtsCard benefitsImg={teleServices2} benefits_descriptions={'Qualiﬁed Professional Doctors'} />
                                </div>
                                <div className='col-lg-4 pt-4 pt-lg-0 pt-md-0 pt-sm-4'>
                                    <BeneﬁtsCard benefitsImg={teleServices3} benefits_descriptions={'Quick Response'} />
                                </div>
                            </Row>
                            <Row className='justify-content-center pt-4'>
                                <div className='col-lg-4'>
                                    <BeneﬁtsCard benefitsImg={teleServices4} benefits_descriptions={'100% Secure, Safe & Privacy Guaranteed'} />
                                </div>
                                <div className='col-lg-4 pt-4 pt-lg-0 pt-md-0 pt-sm-4'>
                                    <BeneﬁtsCard benefitsImg={teleServices5} benefits_descriptions={'Prescribed Medicine Delivered Home'} />
                                </div>
                            </Row>
                            <Row className='pt-4'>
                                <div className='col-lg-6 text-center text-md-end text-lg-end'>
                                    <ButtonMain className={styles.buttonAppointments} link={'https://www.myaster.com/doctor-consultation'} text={'Book Now'} />
                                </div>
                                <div className='col-lg-6 text-center text-md-start text-lg-start pt-4 pt-lg-0 pt-md-0 pt-sm-4'>
                                    <ButtonMain className={styles.buttonAppointments} link={'https://www.myaster.com/doctor-consultation'} text={'Download the myAster Application '} />
                                </div>
                            </Row>
                            <Row className={classNames('my-4 py-4 px-3 align-items-center',styles.healthcare_Assistant_section)}>
                                <div className="col-lg-6 text-start ">
                                    <h3 className={styles.title}>Your Personal Healthcare Assistant</h3>
                                    <p className={classNames('fs-5',styles.title)}>The myAster application is a convenient doctor appointment booking app that ensures consultation with our expert doctors from the comfort of your home.</p>
                                </div>
                                <div className="col-lg-6">
                                    <div className={styles.aster_benefitscard}>
                                        <img
                                            src={artboard}
                                            alt="artboard"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </Row>
                        </Container>
                        <Container className='pt-5'>
                            <Row>
                                <div className='col-lg-4'>
                                    <Step titleStep={'Download The myAster Application'} stepImg={illus1} altImg={'illus1'} stepDec1={'Download the application from App Store/Play Store'} stepDec2={"Create your own & family's profile"} link={'https://www.myaster.com/doctor-consultation'} stepCount={'Step 1'}/>
                                </div>
                                <div className='col-lg-4 pt-5 pt-lg-0 pt-md-0 pt-sm-5'>
                                <Step titleStep={'Verify Your Profile'} stepImg={illus2} altImg={'illus2'} stepDec1={'Scan & upload your Emirates ID'} stepDec2={"Get your profile verified"} stepCount={'Step 2'}/>
                                </div>
                                <div className='col-lg-4 pt-5 pt-lg-0 pt-md-0 pt-sm-5'>
                                <Step titleStep={'Quick Booking'} stepImg={illus3} altImg={'illus3'} stepDec1={'Book A Video Consultation With Your'} stepDec2={"Doctor"}  stepCount={'Step 3'}/>
                                </div>
                            </Row>
                            <Row className='pt-5 justify-content-center align-items-center'>
                                <div className='col-lg-4'>
                                    <Step titleStep={'Easy Payment Method'} stepImg={illus4} altImg={'illus4'} stepDec1={'Easy payment & checkout process right on '} stepDec2={"your phone"} stepCount={'Step 4'}/>
                                </div>
                                <div className='col-lg-4 pt-5 pt-lg-0 pt-md-0 pt-sm-5'>
                                <Step titleStep={'Manage Your Account'} stepImg={illus5} altImg={'illus5'} stepDec1={'Manage your appointment, health records,'} stepDec2={"lab results etc from the comfort of your home"} stepCount={'Step 5'}/>
                                </div>
                            </Row>
                            <Row className='pt-4'>
                                <div className='col-lg-6 text-center text-md-end text-lg-end'>
                                    <ButtonMain className={styles.buttonAppointments} link={'https://www.myaster.com/doctor-consultation'} text={'Book Now'} />
                                </div>
                                <div className='col-lg-6 text-center text-md-start text-lg-start pt-4 pt-lg-0 pt-md-0 pt-sm-4'>
                                    <ButtonMain className={styles.buttonAppointments} link={'https://www.myaster.com/doctor-consultation'} text={'Download the myAster Application '} />
                                </div>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Appointments
