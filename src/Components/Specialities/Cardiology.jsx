import React from 'react'
import styles from './Specialities.module.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SpecialitiesLinks from './SpecialitiesLinks'
import { Link } from 'react-router-dom'
import Doctors from './Doctors'



function SpecialitiesDetails() {
    const specialties = [
        { name: "Cardiology", link: "/specialities/cardiology" },
        { name: "Clinical Psychology", link: "/specialities/clinical-psychology" },
        { name: "Dentistry", link: "/specialities/dentistry" },
        { name: "Dermatology / Cosmetology", link: "/specialities/dermatology-cosmetology" },
        { name: "Dietetics", link: "/specialities/dietetics" },
        { name: "Endocrinology", link: "/specialities/endocrinology" },
        { name: "Endodontics", link: "/specialities/endodontics" },
        { name: "ENT", link: "/specialities/ent" },
        { name: "Family Medicine", link: "/specialities/family-medicine" },
        { name: "Gastroenterology", link: "/specialities/gastroenterology" },
        { name: "General Medicine", link: "/specialities/general-medicine" },
        { name: "General Surgery", link: "/specialities/general-surgery" },
        { name: "Gynaecology / Obstetrics", link: "/specialities/gynaecology-obstetrics" },
        { name: "Implantology", link: "/specialities/implantology" },
        { name: "Internal Medicine", link: "/specialities/internal-medicine" },
        { name: "Laser Technician", link: "/specialities/laser-technician" },
        { name: "Microbiology", link: "/specialities/microbiology" },
        { name: "Nephrology", link: "/specialities/nephrology" },
        { name: "Neurology", link: "/specialities/Neurology" },
        { name: "Ophthalmology", link: "/specialities/Ophthalmology" },
        { name: "Orthodontics", link: "/specialities/Orthodontics" },
        { name: "Orthopaedic Surgery", link: "/specialities/Orthopaedic-Surgery" },
        { name: "Orthopaedics", link: "/specialities/Orthopaedics" },
        { name: "Paediatric Dentistry", link: "/specialities/Paediatric-Dentistry" },
        { name: "Paediatrics", link: "/specialities/Paediatrics" },
        { name: "Pathology", link: "/specialities/Pathology" },
        { name: "Pediatric Orthopaedics", link: "/specialities/Pediatric-Orthopaedics" },
        { name: "Physiotherapy", link: "/specialities/Physiotherapy" },
        { name: "Psychiatry", link: "/specialities/Psychiatry" },
        { name: "Pulmonology", link: "/specialities/Pulmonology" },
        { name: "Radiology", link: "/specialities/Radiology" },
        { name: "Rheumatology", link: "/specialities/Rheumatology" },
        { name: "Speech Therapy", link: "/specialities/Speech-Therapy" },
        { name: "Sports Dentistry", link: "/specialities/Sports-Dentistry" },
        { name: "Urology", link: "/specialities/Urology" },
    ];


    return (
        <>
            <section className='our_Specialities'>
                <Container>
                    <div className='main_title_specialities'>
                        <h3 className={styles.title_specialities2}>
                            Our Specialities
                        </h3>
                    </div>
                    <Row className='px-4 '>
                        <Col xs={3} className='px-5 py-3' style={{ borderLeft: '1px solid var(--main2)' }}>
                            <SpecialitiesLinks specialties={specialties} />
                        </Col>
                        <Col xs={9} className=''>
                            <div className='cardiology_info'>
                                <h1 className='fw-normal' style={{ color: '333333' }}>Cardiology</h1>
                                <p style={{ fontSize: '15px' }}>Cardiology is concerned with the normal functioning of the heart and the diagnosis and treatment of all the disorders affecting the heart.</p>
                                <p className='py-2' style={{ textAlign: 'justify' }}>Cardiology is concerned with the normal functionality of the heart and the subsequent deviation from a healthy heart. Many cardiological disorders involve the heart itself, but some may manifest outside of the heart and in the vascular system.</p>
                                <p className='pb-2' style={{ textAlign: 'justify' }}>Our highly-qualified team of Cardiologists and support specialists provide patients with the latest advances in care for disorders of the heart, arteries, veins and lymphatic vessels. We offer a wide range of cardiac care services and treatments and a full array of diagnostic tests that are quality driven, comprehensive, patient-centered cardiovascular care by a team of pioneering physicians utilizing leading-edge technology. We have strong presence across Dubai, Sharjah, Abu Dhabi & Ajman.</p>
                                <div className='d-flex gap-3 align-items-center'>
                                    <Link to="">Doctor »</Link>
                                    <Link to="">Clinic »</Link>
                                </div>

                                <div className='Our_Doctors py-5'>
                                    <div className=''>
                                        <h2 className='fw-normal text-center'>Our Doctors</h2>
                                        <div>
                                            <Doctors />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <div className='pt-3 px-0 mb-5 pb-5'>
                            <Link to="/our-specialities">more »</Link>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SpecialitiesDetails
