import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import styles from './Specialities.module.css'
import SpecialitiesCard from './SpecialitiesCard'
import Cardiology from '../../Img/Cardiology.png'
import Dentistry from '../../Img/Dentistry.png'
import clinicalPsychology from '../../Img/Clinical-Psychology.png'
import Dermatology from '../../Img/Dermatology.png'
import Dietetics from '../../Img/Dietetics.png'
import Endocrinology from '../../Img/Endocrinology.png'
import ENT from '../../Img/ENT.png'
import FamilyMedicine from '../../Img/Family-Medicine.png'
import Gastroenterology from '../../Img/Gastroenterology.png'
import GeneralMedicine from '../../Img/General-Medicine.png'
import GeneralSurgery from '../../Img/General-Surgery.png'
import Obstetrics from '../../Img/Gynaecology-_-Obstetrics.png'



const specialities = [
    { img: Cardiology, alt: 'Cardiology', text: 'Cardiology', linkImg : '#' , clinicOnLink: '#', doctorOnLink : '#' },
    { img: clinicalPsychology, alt: 'Clinical Psychology', text: 'Clinical Psychology', linkImg : '#' , clinicOnLink: '#', doctorOnLink : '#'},
    { img: Dentistry, alt: 'Dentistry', text: 'Dentistry', linkImg : '#' , clinicOnLink: '#', doctorOnLink : '#' },
    { img: Dermatology, alt: 'Dermatology / Cosmetology', text: 'Dermatology / Cosmetology', linkImg : '#' , clinicOnLink: '#', doctorOnLink : '#' },
    { img: Dietetics, alt: 'Dietetics', text: 'Dietetics', linkImg : '#' , clinicOnLink: '#', doctorOnLink : '#' },
    { img: Endocrinology, alt: 'Endocrinology', text: 'Endocrinology', linkImg : '#' , clinicOnLink: '#', doctorOnLink : '#' },
    { img: Dentistry, alt: 'Endodontics', text: 'Endodontics', linkImg : '#' , clinicOnLink: '#', doctorOnLink : '#' },
    { img: ENT, alt: 'ENT', text: 'ENT', linkImg : '#' , clinicOnLink: '#', doctorOnLink : '#' },
    { img: FamilyMedicine, alt: 'Family-Medicine', text: 'Family Medicine', linkImg : '#' , clinicOnLink: '#', doctorOnLink : '#' },
    { img: Gastroenterology, alt: 'Gastroenterology', text: 'Gastroenterology', linkImg : '#' , clinicOnLink: '#', doctorOnLink : '#' },
    { img: GeneralMedicine, alt: 'General-Medicine', text: 'General Medicine', linkImg : '#' , clinicOnLink: '#', doctorOnLink : '#' },
    { img: GeneralSurgery, alt: 'GeneralSurgery', text: 'General Surgery', linkImg : '#' , clinicOnLink: '#', doctorOnLink : '#' },
    { img: Obstetrics, alt: 'Obstetrics', text: 'Gynaecology / Obstetrics', linkImg : '#' , clinicOnLink: '#', doctorOnLink : '#' },
    { img: Obstetrics, alt: 'Obstetrics', text: 'Gynaecology / Obstetrics', linkImg : '#' , clinicOnLink: '#', doctorOnLink : '#' },
    { img: Obstetrics, alt: 'Obstetrics', text: 'Gynaecology / Obstetrics', linkImg : '#' , clinicOnLink: '#', doctorOnLink : '#' },


];

function Specialities() {

    return (
        <>
            <section className='our_Specialities'>
                <Container>
                    <div className='main_title_specialities'>
                        <h3 className={styles.title_specialities}>
                            OUR SPECIALITIES
                        </h3>
                    </div>
                    <Row xs={1} md={2} lg={3} className='g-5 py-4 pb-5'>
                    {specialities.map((spec, index) => (
                        <Col key={index} className='text-center'>
                            <SpecialitiesCard 
                                specImg={spec.img} 
                                specAlt={spec.alt}
                                linkOnImg={spec.linkImg} 
                                paraForSpec={spec.text} 
                                clinicLink={spec.clinicOnLink} 
                                doctorLink={spec.doctorOnLink} 
                            />
                        </Col>
                    ))}
                </Row>
                </Container>
            </section>
        </>
    )
}

export default Specialities
